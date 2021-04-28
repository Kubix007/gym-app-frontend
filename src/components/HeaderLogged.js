import React from 'react';
import {
    Flex,
    Center,
    Grid,
    Stack,
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom'

const list = [
    { name: "Aktualności", path: "/aktualnosci" },
    { name: "Kalendarz zajęć", path: "/kalendarz" },
    { name: "Członkowstwo", path: "/czlonkowstwo" },
    { name: "Kup karnet", path: "/karnet" },
]

const HeaderLogged = () => {

    const menu = list.map(item => (
        <Grid templateColumns="repeat(3, 2fr)" flexBasis="100%" pl="60">
            <Stack>
                <Center w="100%" h="100%">
                    <NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
                </Center>
            </Stack>
        </Grid>
    ))

    return (
        <Flex flexBasis="100%" direction="row" alignItems="center">
            <Center w="100%">
                <Flex direction="row" alignItems="center" w="100%">
                    {menu}
                </Flex>
            </Center>
        </Flex>
    );
}

export default HeaderLogged;
