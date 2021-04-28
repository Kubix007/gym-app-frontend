import React from 'react';
import {
    Flex,
    Button,
    Text,
    Center,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const HeaderLoggedOut = () => {


    return (
        // bg="green"
        <Flex flexBasis="100%" direction="row" alignItems="center">
            <Center w="100%">
                <Text fontSize="4xl" paddingRight="70%" >SportSystem</Text>
                <NavLink to="/login"><Button colorScheme="purple" variant="solid" size="lg">Zaloguj się</Button></NavLink>
            </Center>
        </Flex>
    );
}

export default HeaderLoggedOut;
