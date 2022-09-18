import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import { InitialPage } from './initial-page/InitialPage';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <InitialPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
