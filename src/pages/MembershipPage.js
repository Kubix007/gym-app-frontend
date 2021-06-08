import React, { useContext, useState } from 'react';
import { LoggedUserIdContext } from '../context/LoggedUserIdContext';
import { LoggedUserRoleContext } from '../context/LoggedUserRoleContext';
import MembershipForUser from '../components/MembershipForUser';
import AllMembershipOrders from '../components/AllMembershipOrders';
import {
    Flex,
    Button,
    Center,
} from "@chakra-ui/react"


const MembershipPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { loggedUserId, setLoggedUserId } = useContext(LoggedUserIdContext);
    // eslint-disable-next-line no-unused-vars
    const { loggedUserRole, setLoggedUserRole } = useContext(LoggedUserRoleContext);
    const [allMembershipOrders, setAllMembershipOrders] = useState(false);
    const [currentUserMembershipOrders, setCurrentUserMembershipOrders] = useState(false);

    const handleClick = (e) => {
        const id = e.target.id;
        if (id === "allOrders") {
            setAllMembershipOrders(true);
            setCurrentUserMembershipOrders(false);
        }
        else if (id === "currentUserOrders") {
            setAllMembershipOrders(false);
            setCurrentUserMembershipOrders(true);
        }
        else if (id === "back") {
            setAllMembershipOrders(false);
            setCurrentUserMembershipOrders(false);
        }
    }

    return (
        <Center>
            <Flex direction="column" alignItems="center" >
                {loggedUserRole === "ROLE_USER" ? <MembershipForUser /> :
                    <Flex direction="column" justifyItems="center">
                        {!allMembershipOrders && !currentUserMembershipOrders ? <Button id="allOrders" onClick={handleClick} colorScheme="purple" marginBottom={3}>Wyświetl wszystkie zamówienia</Button> : null}
                        {!allMembershipOrders && !currentUserMembershipOrders ? <Button id="currentUserOrders" onClick={handleClick} colorScheme="purple">Wyświetl swoje zamówienia</Button> : null}
                        {currentUserMembershipOrders ?
                            <Flex direction="column" justifyItems="center">
                                <Button id="back" onClick={handleClick} colorScheme="purple">Wróć</Button>
                                <MembershipForUser />
                            </Flex> : null}
                        {allMembershipOrders ?
                            <Flex direction="column" justifyItems="center">
                                <Button id="back" onClick={handleClick} colorScheme="purple">Wróć</Button>
                                <AllMembershipOrders />
                            </Flex> : null}
                    </Flex>}
            </Flex>
        </Center>
    );
}

export default MembershipPage;