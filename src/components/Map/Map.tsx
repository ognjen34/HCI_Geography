import React, { FC } from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import {LatLngExpression} from "leaflet";

interface MapProps {
    selectedCountry: string;
}

const Map: FC<MapProps> = ({ selectedCountry }) => {
    console.log(selectedCountry)
    return(
        <MapContainer center={[20, 0]} zoom={3} scrollWheelZoom={false} dragging={false} zoomControl={false} doubleClickZoom={false} >
            <MapInner selectedCountry={selectedCountry} />
        </MapContainer>
    );
}


interface MapInnerProps {
    selectedCountry: string;
}

const MapInner: FC<MapInnerProps> = ({ selectedCountry }) => {
    const map = useMap()
    if (selectedCountry != '') {
        // @ts-ignore
        console.log(selectedCountry)
        // @ts-ignore

        map.setView([selectedCountry[0], selectedCountry[1]],6)
    }

    return(
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
