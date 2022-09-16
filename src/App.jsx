import React from 'react';
import './App.css';
import { MainLayerMap } from './Map/MainLayerMap';
import { Layers } from './Layers/Layers';
import { TileLayer } from './Layers/TileLayer';
import { IconVectorLayer } from './Layers/IconVectorLayer';

const App = () => {

  return (
    <div className="App">
      <MainLayerMap>
        <Layers>
          <TileLayer/>
          <IconVectorLayer />
        </Layers>
      </MainLayerMap>
    </div>
  );
}

export default App;
