import useWeather from '../hooks/useWeather';
import { ITab, Tabs } from './ui/Tabs';
import SearchForm from './SearchForm';

const tabs: ITab[] = [
  {
    header: 'Hourly Report',
    content: 'The api that we used did not have this feature',
  },
  {
    header: 'History',
    content: 'We no get money to pay for this feature. Lmao',
  },
  { header: 'Future', content: 'Na who get money go see the future' },
];

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

  return (
    <section>
      <h1 className="text-2xl font-semibold text-center">Wedar!</h1>
      <SearchForm />
      {loading ? (
        <>Loading...</>
      ) : (
        <div>
          <div className="flex flex-wrap gap-8">
            <div className="w-full md:w-[45%] text-center md:text-start">
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
            <div className="w-full md:w-[45%]">
              <h3 className="text-6xl text-center">
                {weather.current.temp_c} &#8451;
              </h3>
            </div>
          </div>
          <Tabs tabs={tabs} />
        </div>
      )}
    </section>
  );
};

export default WeatherHome;
