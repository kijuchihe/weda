import Layout from './components/layout';
import useClientLocation, { ILocation } from './hooks/useClientLocation';
import WeatherHome from './components/pages/WeatherHome';

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
        <>Getting Location...</>
      )}
    </Layout>
  );
}

export default App;
