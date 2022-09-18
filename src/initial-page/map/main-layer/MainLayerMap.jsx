import React, { useRef, useState, useEffect, useMemo } from "react";
import "./MainLayerMap.css";
import MapContext from "../context/MapContext";
import { View, Map } from "ol";
import { fromLonLat } from 'ol/proj';

const MainLayerMap = ({ children, style }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const DEFAULT_CENTER = useMemo(() => ([-52.33199928897088, -31.752645766522427]), []);
  const DEFAULT_ZOOM = 15;

  useEffect(() => {
    let options = {
      view: new View(
        { 
          zoom: DEFAULT_ZOOM, 
          center: fromLonLat(DEFAULT_CENTER)
        }
      )
    };

    let mapObject = new Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    
    return () => mapObject.setTarget(undefined);
  }, [DEFAULT_CENTER]);

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map" style={style}>
        {children}
      </div>
    </MapContext.Provider>
  )
}

export { MainLayerMap };