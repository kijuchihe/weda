import useWeather from '../hooks/useWeather';
import { ITab, Tabs } from './ui/Tabs';
import SearchForm from './SearchForm';

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
      <SearchForm />
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
