import useWeather from '../hooks/useWeather';
import { FiSearch } from 'react-icons/fi';
import { ITab, Tabs } from './ui/Tabs';

const tabs: ITab[] = [{ header: 'Today', content: 'Today is a sunny day' }];

const WeatherHome = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const { weather, loading } = useWeather({
    latitude,
    longitude,
  });
  // if (!weather) return <>Fetching ...</>
  return (
    <section>
      <h1 className="text-2xl font-semibold text-center">Weda!</h1>
      <div className="mx-auto w-fit">
        <form
          action=""
          className="flex items-center w-[400px] gap-4 bg-gray-700 py-2 px-4 rounded-full border-2 border-transparent focus-within:border-blue-500 focus-within:border-2"
        >
          <input
            type="text"
            placeholder="Seach a city's weather"
            className="flex-1 bg-transparent border-none outline-none placeholder:text-gray-200"
          />
          <button aria-label="search" type="submit">
            <FiSearch />
          </button>
        </form>
      </div>

      {loading ? (
        <>Loading...</>
      ) : (
        <div>
          <div className="flex">
            <div>
              <h3 className="text-6xl">Lagos</h3>
              <h3>
                Time:{' '}
                {new Date(weather.location.localtime).toLocaleDateString()}
              </h3>
              <img
                src={weather.current.condition.icon}
                alt="Weather"
                className="w-[300px]"
              />
              <p className="text-sm">{weather.current.condition.text}</p>
            </div>
            <div>
              <h3 className="text-6xl">{weather.current.temp_c} &#8451;</h3>
            </div>
          </div>
          <Tabs tabs={tabs} />
        </div>
      )}
    </section>
  );
};

export default WeatherHome;
