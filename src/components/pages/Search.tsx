import useQuery from '../../hooks/useQuery';
import useWeather from '../../hooks/useWeather';
import SearchForm from '../features/SearchForm';
import Layout from '../layout';
import { ITab, Tabs } from '../ui/Tabs';

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

const WeatherResults = () => {
  let query = useQuery();
  const { weather, loading } = useWeather({
    latitude: Number(query.get('lat')!),
    longitude: Number(query.get('lon')!),
    q: query.get('q')!,
  });
  const hasParameters = (): boolean => {
    if ((query.get('lat') && query.get('lon')) || query.get('q')) {
      return true;
    }
    return false;
  };
  return (
    <Layout>
      <section>
        <h1 className="text-2xl font-semibold text-center">Wedar!</h1>
        <SearchForm />

        {hasParameters() && (
          <>
            {loading ? (
              <>Loading...</>
            ) : (
              <>
                {weather && (
                  <div>
                    <div className="flex flex-wrap gap-8">
                      <div className="w-full md:w-[45%] text-center md:text-start">
                        <h3 className="text-6xl">
                          {weather?.location.name}, {weather?.location.country}
                        </h3>
                        <br />
                        <h3>
                          Time:{' '}
                          {new Date(
                            weather?.location.localtime
                          ).toLocaleDateString()}
                        </h3>
                        <img
                          src={weather?.current.condition.icon}
                          alt="Weather"
                          className="w-[300px]"
                        />
                        <p className="text-sm">
                          {weather.current.condition.text}
                        </p>
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
              </>
            )}
          </>
        )}
      </section>
    </Layout>
  );
};

export default WeatherResults;
