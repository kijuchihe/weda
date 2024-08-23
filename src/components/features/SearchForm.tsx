import React, { useState } from 'react';
// import useSearch from '../hooks/useSearch';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface ISearchLocation {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}

const SearchForm = () => {
  const [data, setData] = useState<ISearchLocation[]>([]);
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const useSearch = async (query: string) => {
    // const [data, setData] = useState<any>(null);
    const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
    // Make API request with filtered query

    return data;
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    e.target.value.length > 1 ? useSearch(e.target.value) : setData([]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData([]);
    navigate(`/search?q=${query}`);
    setQuery('');
  };
  return (
    <div className="relative mx-auto w-fit">
      <form
        action=""
        className="flex items-center w-[400px] gap-4 bg-gray-700 py-2 px-4 rounded-full border-2 border-transparent focus-within:border-blue-500 focus-within:border-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Seach a city's weather"
          className="flex-1 bg-transparent border-none outline-none placeholder:text-gray-200"
          value={query}
          onChange={handleChange}
        />
        <button aria-label="search" type="submit">
          <FiSearch />
        </button>
      </form>
      <div className="absolute w-full left-0 top-[50px]">
        {data.length > 0 && (
          <div className="p-2 mt-2 bg-gray-800 rounded-xl">
            {data?.map((city: any) => {
              return (
                <div
                  className="p-2 my-1 rounded-xl cursor-pointer hover:bg-gray-900"
                  onClick={() => {
                    setQuery(`${city.name}, ${city.region}, ${city.country}`);
                    setData([]);
                    navigate(`/search?lat=${city.lat}&lon=${city.lon}`);
                  }}
                  key={city.id}
                >
                  {city.name}, {city.region}, {city.country}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
