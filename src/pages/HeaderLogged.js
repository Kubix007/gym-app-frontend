import React, { useContext } from 'react';
import {
    Flex,
    Center,
    Grid,
    Stack,
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom'
import authService from '../services/authService';
import { LoggedUserRoleContext } from '../context/LoggedUserRoleContext';
import { LoggedUserIdContext } from '../context/LoggedUserIdContext';



const logout = () => {

    authService.logout();
}

const list = [
    { name: "Aktualności", path: "/aktualnosci" },
    { name: "Kalendarz zajęć", path: "/kalendarz" },
    { name: "Członkowstwo", path: "/czlonkowstwo" },
    { name: "Kup karnet", path: "/karnet" },
    { name: "Wyloguj się", path: "/", logout: { logout } }
]

const HeaderLogged = () => {

    // eslint-disable-next-line no-unused-vars
    const { loggedUserRole, setLoggedUserRole } = useContext(LoggedUserRoleContext);
    // eslint-disable-next-line no-unused-vars
    const { loggedUserId, setLoggedUserId } = useContext(LoggedUserIdContext);


    const menu = list.map(item => (
        <Grid key={item.path} templateColumns="repeat(3, 2fr)" flexBasis="100%" pl="60">
            <Stack>
                <Center w="100%" h="100%">
                    <NavLink to={item.path} onClick={item.logout ? () => { logout(); setLoggedUserRole(null); setLoggedUserId(null) } : null}>{item.name.toUpperCase()}</NavLink>
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
