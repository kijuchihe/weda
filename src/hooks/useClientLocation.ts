import { useEffect, useState } from 'react';

export interface ILocation {
  latitude: number;
  longitude: number;
}

function useClientLocation(): ILocation {
  const [location, setLocation] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });

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

  return location;
}

export default useClientLocation;
