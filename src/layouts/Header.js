import React from 'react';
import {
    Image,
    Flex,
    Button,
    Text,
    Center,
} from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex bg="green" flexBasis="100%" direction="row" alignItems="center">
            <Center w="100%">
                <Text fontSize="4xl" paddingRight="70%" color="white" >SportSystem</Text>
                <Button size="lg">Zaloguj się</Button>
            </Center>
        </Flex>
    );
}

export default Header;
