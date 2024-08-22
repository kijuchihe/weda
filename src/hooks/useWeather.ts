import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
  },
};

function useWeather({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getWeather() {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getWeather();
  }, []);
  return { weather, loading, error };
}

export default useWeather;
