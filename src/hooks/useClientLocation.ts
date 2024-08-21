import { useEffect, useState } from 'react';

export interface ILocation {
  latitude: number;
  longitude: number;
}

function useClientLocation(): ILocation {
  const [location, setLocation] = useState<ILocation | null>(null);

  useEffect(() => {
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
  }, []);

  if (location) return location;
  return {
    latitude: 0,
    longitude: 0,
  };
}

export default useClientLocation;
