import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

//  lat={59.955413} lng={30.337844}

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  const [position, setPosition] = useState<LatLngExpression>([lat, lng]);
  useEffect(() => {
    setPosition([lat, lng]);
  }, [lat, lng]);

  return (
    // Important! Always set the container height explicitly
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-[400px] h-[400px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
