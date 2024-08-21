import useWeather from '../hooks/useWeather';
import { FiSearch } from 'react-icons/fi';

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
  console.log(weather);
  return (
    <section>
      <h1 className="text-2xl font-semibold text-center">Weda!</h1>
      <div className="w-fit mx-auto">
        <form
          action=""
          className="flex items-center w-[400px] gap-4 bg-gray-700 py-2 px-4 rounded-full border-2 border-transparent focus-within:border-blue-500 focus-within:border-2"
        >
          <input
            type="text"
            placeholder="Seach a city's weather"
            className="flex-1 bg-transparent placeholder:text-gray-200 border-none outline-none"
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
          {/* Tabs */}
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Profile
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Settings
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeatherHome;
