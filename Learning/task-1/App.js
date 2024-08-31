// App.js

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MyComponent from './MyComponent';

function App() {
  return (
    <ChakraProvider>
      <MyComponent />
    </ChakraProvider>
  );
}

export default App;
