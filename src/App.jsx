import React from 'react';
import './App.css';
import { MainLayerMap } from './Map/MainLayerMap';
import { Layers } from './Layers/Layers';
import { TileLayer } from './Layers/TileLayer';
import { IconVectorLayer } from './Layers/IconVectorLayer';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {

  return (
    <div className="App">
      <ChakraProvider>
        <MainLayerMap>
          <Layers>
            <TileLayer/>
            <IconVectorLayer />
          </Layers>
        </MainLayerMap>
      </ChakraProvider>
    </div>
  );
}

export default App;
