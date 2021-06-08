import React, { useContext, useEffect, useState } from 'react';
import { LoggedUserIdContext } from '../context/LoggedUserIdContext';
import UserService from '../services/userService';
import {
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Center,
    Skeleton,
} from "@chakra-ui/react"


const MembershipForUser = () => {
    // eslint-disable-next-line no-unused-vars
    const { loggedUserId, setLoggedUserId } = useContext(LoggedUserIdContext);
    const [membershipOrdersForCurrentUser, setMembershipOrdersForCurrentUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    let membershipOrdersUserLogged = null

    useEffect(() => {
        UserService.getMembershipCurrentUser(loggedUserId).then(
            (data) => {
                console.log(data.data);
                setTimeout(() => {
                    setMembershipOrdersForCurrentUser(data.data);
                    setIsLoaded(true)
                }, 1000)
            },
            (error) => {
                console.log(error);
            }
        )
    }, [loggedUserId]);

    if (membershipOrdersForCurrentUser) {
        membershipOrdersUserLogged = membershipOrdersForCurrentUser.map(item => (
            <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.surname}</Td>
                <Td>{item.email}</Td>
                <Td>{item.membership}zł</Td>
                <Td>{item.startDate}</Td>
                <Td>{item.expirationDate}</Td>
                <Td>{item.status}</Td>

            </Tr>
        ))
    }

    return (
        <Flex direction="column" alignItems="center" >
            <Skeleton h="5vh" w="100vh" p={5} isLoaded={isLoaded}>
                <Center>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>ID Zamówienia: </Th>
                                <Th>Imię: </Th>
                                <Th>Nazwisko </Th>
                                <Th>Email: </Th>
                                <Th>Cena: </Th>
                                <Th>Data rozpoczęcia: </Th>
                                <Th>Data zakończenia: </Th>
                                <Th>Status: </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {membershipOrdersForCurrentUser && membershipOrdersUserLogged}
                        </Tbody>
                    </Table>
                </Center>
            </Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
        </Flex>
    );
}

export default MembershipForUser;