import Layout from './components/layout';
import useClientLocation, { ILocation } from './hooks/useClientLocation';
import WeatherHome from './components/pages/WeatherHome';
import Spinner from './components/ui/Spinner';

function App() {
  const location: ILocation = useClientLocation();

  return (
    <Layout>
      {location?.longitude ? (
        <WeatherHome
          latitude={location?.latitude}
          longitude={location?.longitude}
        />
      ) : (
        <>
          <Spinner />
        </>
      )}
    </Layout>
  );
}

export default App;
