import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

//  lat={59.955413} lng={30.337844}

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="h-[400px] w-[300px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
