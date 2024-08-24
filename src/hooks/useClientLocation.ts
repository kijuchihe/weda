import { useEffect, useState } from 'react';

export interface ILocation {
  latitude: number;
  longitude: number;
}

function useClientLocation(): { location: ILocation; loading: boolean } {
  const [location, setLocation] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
    setLoading(false);
  }, []);

  return { location, loading };
}

export default useClientLocation;
