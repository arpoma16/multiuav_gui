import maplibregl from 'maplibre-gl';
import { useEffect, useMemo } from 'react';
import { map } from './MapView';

const MapScale = () => {
  const distanceUnit = 'km';

  const control = useMemo(() => new maplibregl.ScaleControl(), []);

  useEffect(() => {
    map.addControl(control, 'bottom-right');
    return () => map.removeControl(control);
  }, [control]);

  useEffect(() => {
    switch (distanceUnit) {
      case 'mi':
        control.setUnit('imperial');
        break;
      case 'nmi':
        control.setUnit('nautical');
        break;
      case 'km':
      default:
        control.setUnit('metric');
        break;
    }
  }, [control, distanceUnit]);

  return null;
};

export default MapScale;
