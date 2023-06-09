import React, { FC, useEffect, useState } from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Point } from "leaflet";
import { getGeoJSON } from '../../Services/CountriesService';
import L from 'leaflet';

interface MapProps {
  selectedCountry: any;
  countryClicked: boolean
}

const Map: FC<MapProps> = ({ selectedCountry, countryClicked }) => {
  console.log(selectedCountry)

  return (
    <MapContainer center={[20, 0]} zoom={3} scrollWheelZoom={false} dragging={false} zoomControl={false} maxBounds={[[-90,-180],[90,180]]} minZoom={2}
    maxZoom={7} doubleClickZoom={false} >
      <MapInner selectedCountry={selectedCountry} countryClicked = {countryClicked}/>
    </MapContainer>
  );
}


interface MapInnerProps {
  selectedCountry: any;
  countryClicked: boolean
}

const MapInner: FC<MapInnerProps> = ({ selectedCountry, countryClicked }) => {
  const map = useMap()

  if (countryClicked == false){
    console.log("FLAPOWFKAPWOFKPAOWFK")
    map.eachLayer(layer => {
        if (!(layer instanceof L.TileLayer)) {
          map.removeLayer(layer);
        }
      });
      var defaultView = {lat: 0, lng: 0, zoom: 2};
      map.setView(defaultView, defaultView.zoom);

}  useEffect(() => {
    if (selectedCountry != null) {
        console.log("mapa:::" + selectedCountry)
      getGeoJSON(selectedCountry.maps.openStreetMaps).then((geojson) => {
        if (geojson !== null) {
            map.eachLayer(layer => {
                if (!(layer instanceof L.TileLayer)) {
                  map.removeLayer(layer);
                }
              });
            
            // add the highlight layer for the country
            L.geoJSON(geojson, {
                filter: function(feature) {
                  return feature.geometry.type !== 'Point';
                },
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