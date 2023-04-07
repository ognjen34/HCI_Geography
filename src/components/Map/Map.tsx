import React, { FC, useEffect } from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Point } from "leaflet";
import { getGeoJSON } from '../../Services/CountriesService';
import L from 'leaflet';

interface MapProps {
  selectedCountry: any;
}

const Map: FC<MapProps> = ({ selectedCountry }) => {
  console.log(selectedCountry)
  return (
    <MapContainer center={[20, 0]} zoom={3} scrollWheelZoom={false} dragging={false} zoomControl={false} doubleClickZoom={false} >
      <MapInner selectedCountry={selectedCountry} />
    </MapContainer>
  );
}


interface MapInnerProps {
  selectedCountry: any;
}

const MapInner: FC<MapInnerProps> = ({ selectedCountry }) => {
  const map = useMap()

  useEffect(() => {
    if (selectedCountry !== '') {
      getGeoJSON(selectedCountry.maps.openStreetMaps).then((geojson) => {
        if (geojson !== null) {
            map.eachLayer(layer => {
                if (!(layer instanceof L.TileLayer)) {
                  map.removeLayer(layer);
                }
              });
            // add the highlight layer for the country
            L.geoJSON(geojson, {
            style: {
                weight: 3,
                color: 'blue',
                fillOpacity: 0.1
            }
            }).addTo(map);
        
            // fit the map to the bounds of the country
            const bounds = L.geoJSON(geojson).getBounds();
            map.fitBounds(bounds);
        }
      });
    }
  }, [selectedCountry, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Add any additional map elements here */}
    </>
  );
}

export default Map;