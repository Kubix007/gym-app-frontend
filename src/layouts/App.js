import React, { useState } from 'react';
import {
  Center,
  ChakraProvider,
  Flex,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../layouts/Header'
import Navigation from '../layouts/Navigation'
import Page from '../layouts/Page'
import Footer from '../layouts/Footer'


function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Flex minH="100vh" direction="column" >
          <Flex minH="7vh" maxH="7vh" borderBottom="1px">
            <Header />
          </Flex>
          {isLogged && <Center>
            <Flex w="100%" direction="row" >
              <Navigation />
            </Flex>
          </Center>}
          <Flex flex="1" position="relative" overflow="hidden">
            <Page />
          </Flex>
          <Footer />
        </Flex>
      </ChakraProvider>
    </Router >
  );
}

export default App;
