// src/App.js

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ClassLifecycleComponent from './ClassLifecycleComponent';  // Ensure this path is correct
import FunctionalLifecycleComponent from './FunctionalLifecycleComponent';  // Ensure this path is correct

function App() {
  return (
    <ChakraProvider>
      <ClassLifecycleComponent />
      <FunctionalLifecycleComponent />
    </ChakraProvider>
  );
}

export default App;
