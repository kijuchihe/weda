import useWeather from '../../hooks/useWeather';
import { ITab, Tabs } from '../ui/Tabs';
import SearchForm from '../features/SearchForm';
import {
  FaCloud,
  FaCompass,
  FaTemperatureHigh,
  FaWater,
  FaWind,
} from 'react-icons/fa';
import { FaU } from 'react-icons/fa6';
import Map from '../features/Map';
import Spinner from '../ui/Spinner';

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
  const itemClassName =
    'bg-gray-300 w-[120px] h-[120px] dark:bg-gray-800 rounded-xl p-4 flex items-center gap-2 justify-center flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer';
  const tabs: ITab[] = [
    {
      header: 'Other details',
      content: (
        <>
          {weather ? (
            <div className="grid grid-cols-5 gap-4">
              <div className={itemClassName} title="Feels Like">
                <FaTemperatureHigh className="w-5 h-5 text-red-500" />
                <h3>{weather.current.feelslike_c} &#8451;</h3>
              </div>
              <div className={itemClassName}>
                <FaWind className="w-5 h-5 text-blue-200" />
                <div>
                  <h3>{weather.current.wind_kph} km/h</h3>
                  <h3 className="flex gap-1 items-center">
                    <FaCompass />
                    {weather.current.wind_dir}
                  </h3>
                </div>
              </div>

              <div className={itemClassName}>
                <FaWater className="w-5 h-5 text-blue-500" />
                Humidity: {weather.current.humidity} %
              </div>
              <div className={itemClassName}>
                <FaCloud className="w-5 h-5 text-blue-300" />
                Cloud: {weather.current.cloud} %
              </div>
              <div className={itemClassName}>
                <FaU className="w-5 h-5 text-purple-300" />
                <h3>Pressure: {weather.current.pressure_mb} mb</h3>
              </div>
            </div>
          ) : (
            'No data'
          )}
        </>
      ),
    },
    {
      header: 'Hourly Report',
      content: 'The api that we used did not have this feature',
    },
    {
      header: 'History',
      content: 'We no get money to pay for this feature. Lmao',
    },
    { header: 'Future', content: 'Na who get money go see the future' },
    {
      header: 'Suggested Activities',
      content: 'The api that we used did not have this feature',
    },
  ];

  return (
    <section className="p-4 h-full min-h-screen">
      <h1 className="text-2xl font-semibold text-center">Wedar!</h1>
      <SearchForm />
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div>
          <div className="flex flex-wrap gap-8">
            <div className="w-full md:w-[45%] text-center md:text-start">
              <h3 className="text-6xl">Lagos</h3>
              <small>Current Location</small>
              <br />
              <br />
              <hr />
              <br />
              <br />
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
            <div className="w-full md:w-[45%]">
              <h3 className="flex gap-2 items-center text-6xl text-center">
                <FaTemperatureHigh className="w-10 h-10 text-red-500" />
                {weather.current.temp_c} &#8451;
              </h3>
              <div>
                <Map lng={weather.location.lon} lat={weather.location.lat} />
              </div>
            </div>
          </div>
          <Tabs tabs={tabs} />
        </div>
      )}
    </section>
  );
};

export default WeatherHome;
