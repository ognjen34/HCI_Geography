import { LatLngExpression } from 'leaflet';
import { useMap } from 'react-leaflet';

const useMapService = () => {
    const map = useMap();

    const zoomTo = (coords: LatLngExpression) => {
        map.setView(coords);
    };

    return { zoomTo };
};

export default useMapService;
