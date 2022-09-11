import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import VectorSource from 'ol/source/Vector';
import OLVectorLayer from "ol/layer/Vector";
import {Icon, Style} from 'ol/style';
import {useGeographic} from 'ol/proj';
import pinoImage from './data/pino.png'

const IconVectorLayer = () => {
    const { map } = useContext(MapContext); 

    useGeographic();

    useEffect(() => {
        if (!map) return;
          
        const iconStyle = new Style({
          image: new Icon({
            src: pinoImage,
          })
        });

        const iconFeature = new Feature({
          geometry: new Point([-52.3396777, -31.7716463])
        });

        const iconFeature2 = new Feature({
          geometry: new Point([-52.3375886, -31.7653989])
        });
        
        iconFeature.setStyle(iconStyle);
        iconFeature2.setStyle(iconStyle);
        
        const vectorSource = new VectorSource({
            features: [iconFeature, iconFeature2],
          });

        let vectorLayer = new OLVectorLayer({
          source: vectorSource,
        });
    
        map.addLayer(vectorLayer);
    
        return () => {
          if (map) {
            map.removeLayer(vectorLayer);
          }
        };
      }, [map]);
    
      return null;
}

export { IconVectorLayer };