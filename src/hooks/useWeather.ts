import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY as string,
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
  },
};

function useWeather({
  latitude,
  longitude,
  q,
}: {
  latitude?: number;
  longitude?: number;
  q?: string;
}) {
  let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
  if (latitude && longitude) {
    url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
  } else if (q) {
    url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${q}`;
  }
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getWeather() {
      // To make sure the user inputs a location and a seach isn't done if no location is given
      if (!(latitude && longitude) && !q?.length) {
        setWeather(null);
        setLoading(false);
        return;
      }

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
  }, [latitude, longitude, q]);
  return { weather, loading, error };
}

export default useWeather;
