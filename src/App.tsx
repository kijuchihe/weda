import Layout from './components/layout';
import useClientLocation, { ILocation } from './hooks/useClientLocation';
import WeatherHome from './components/WeatherHome';

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
        <>Fetching</>
      )}
      
    </Layout>
  );
}

export default App;
