import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  
  const center = [ 37.7749, -122.4194]; 
  const zoom = 13;

  return (
    <section id="map-sect">
      <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        { <Marker position={center}>
          <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>}

        <Marker position={center}>
          <Popup>
            A sample location<br />
            Latitude: {center[0]}<br />
            Longitude: {center[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;