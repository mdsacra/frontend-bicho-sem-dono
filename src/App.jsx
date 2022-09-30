import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import { InitialPage } from './initial-page/InitialPage';
import { BichoSemDonoTheme } from './theme/bicho-sem-dono-theme/BichoSemDonoTheme';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider theme={BichoSemDonoTheme} >
        <InitialPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
