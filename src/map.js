import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import React, { useState } from 'react';

import 'leaflet/dist/leaflet.css';

const locations = [
  { name: 'CAMPUS SÃO PAULO', coordinates: [-23.54621503620931, -46.62370465092308] },
  { name: 'POLO ARAÇATUBA - SP', coordinates: [-21.20446945485862, -50.44441707791208] },
  { name: 'POLO BAURU - SP', coordinates: [-22.32552237188972, -49.05513903061528] },
  { name: 'CAMPINAS - SP', coordinates: [-22.900823278965238, -47.06546844907691] },
  { name: 'ITATIBA - SP', coordinates: [-23.004761174829724, -46.84407206626374] },
  { name: 'POLO MOGI DAS CRUZES - SP', coordinates: [-23.52053345748915, -46.19097572208791] },
  { name: 'POLO PENAPÓLIS - SP', coordinates: [-21.421398654025012, -50.07402566441758] },
  { name: 'POLO PIRACICABA - SP', coordinates: [-22.72830861653644, -47.652677264417584] },
  { name: 'REGISTRO - SP', coordinates: [-24.491981381388047, -47.841847010948236] },
  { name: 'POLO SANTA CRUZ DO RIO PARDO - SP', coordinates: [-22.90058551041923, -49.622213335582416] },
  { name: 'POLO SÃO CARLOS - SP', coordinates: [-22.005570687102907, -47.919517536203315] },
  { name: 'POLO SÃO JOSÉ DO RIO PRETO - SP', coordinates: [-20.81461719253026, -49.39660524662637] },
  { name: 'POLO SÃO JOSÉ DOS CAMPOS - SP', coordinates: [-23.197581925076847, -45.89208329140658] },
  { name: 'POLO VOTUPORANGA - SP', coordinates: [-20.423625019329243, -49.98770692388454] },
  
];

function Map() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const customIcon = new L.Icon({
    iconUrl: require('./img/mark.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const handleLocationChange = (e) => {
    const selectedIndex = e.target.value;
    setSelectedLocation(locations[selectedIndex]);
  };

  return (
    <div className="map-section">
      <label>Unidades: </label>
      <select onChange={handleLocationChange}>
        {locations.map((location, index) => (
          <option key={index} value={index}>
            {location.name}
          </option>
        ))}
      </select>
      <MapContainer
        key={selectedLocation.coordinates.join(",")} // Adicione esta linha
        center={selectedLocation.coordinates}
        zoom={17}
        style={{ height: '300px', width: '80%', margin: '20px auto' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={selectedLocation.coordinates} icon={customIcon} />
      </MapContainer>
    </div>
  );
}

export default Map;
