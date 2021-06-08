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
import { LoggedUserRoleContext } from '../context/LoggedUserRoleContext';
import { LoggedUserIdContext } from '../context/LoggedUserIdContext';


function App() {

  // eslint-disable-next-line no-unused-vars
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUserRole, setLoggedUserRole] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(false);


  return (
    <LoggedUserIdContext.Provider value={{ loggedUserId, setLoggedUserId }}>
      <LoggedUserRoleContext.Provider value={{ loggedUserRole, setLoggedUserRole }}>
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
              <Flex flex="1" position="relative" overflow="hidden" justifyContent="center" p={3} overflowY="scroll">
                <Page />
              </Flex>
              <Footer />
            </Flex>
          </ChakraProvider>
        </Router >
      </LoggedUserRoleContext.Provider>
    </LoggedUserIdContext.Provider>
  );
}

export default App;
