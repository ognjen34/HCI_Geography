import React, { FC } from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

interface MapProps {}

const Map: FC<MapProps> = () => {
    return(
        <MapContainer center={[20, 0]} zoom={3} scrollWheelZoom={false} dragging={false} zoomControl={false} doubleClickZoom={false} >
            <MapInner />
        </MapContainer>
    );
}

const MapInner: FC = () => {
    const map = useMap();
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
