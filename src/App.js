import React, { useState } from 'react';
import './App.css';
import Map from './Map/Map.js';
import { Layers } from './Layers/Layers';
import { TileLayer } from './Layers/TileLayer';
import { OSM } from "ol/source";
import { IconVectorLayer } from './Features/IconVectorLayer';

import { fromLonLat } from 'ol/proj';

const App = () => {
  const [center, setCenter] = useState([-52.33151, -31.76970]);
  const [zoom, setZoom] = useState(13); 

  return (
    <div className="App">
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer
            source={new OSM()}
            zIndex={0}
          />
          <IconVectorLayer />
        </Layers>
      </Map>
    </div>
  );
}

export default App;
