import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
    Box,
    Text,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react"
import OrderPassForm from '../OrderPassForm';

const PassPageForUser = () => {
    const [price, setPrice] = useState("");
    const [numberOfMonths, setNumberOfMonths] = useState("");


    return (
        <Flex direction="column" alignItems="center" >
            <Text fontWeight="bold" fontSize="3xl" p={4}>Wybierz karnet</Text>
            <Box>
                <Accordion w="40vh">
                    <AccordionItem id="149,00">
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "purple", color: "white", }}>
                                        <Box flex="1" textAlign="left" fontWeight="bold">
                                            BASIC - 1M
                             </Box>
                                        <AccordionIcon />
                                        {isExpanded ? (setPrice("149,00"), setNumberOfMonths(1)) : null}

                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} maxW="40vh" maxH="16vh" >
                                    <Text fontWeight="bold" fontSize="large" >Cena: 149,00 zł</Text>
                                    <Text fontWeight="bold" fontSize="large" >Członkowstwo: 1 miesiąc</Text>
                                    <UnorderedList>
                                        <ListItem>0 zł opłata wpisowa</ListItem>
                                        <ListItem>karnet na 1 miesiąc</ListItem>
                                        <ListItem>Szeroka oferta grupowych zajęć fitness</ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem id="399,00">
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "purple", color: "white" }}>
                                        <Box flex="1" textAlign="left" fontWeight="bold">
                                            BASIC - 6M
                            </Box>
                                        <AccordionIcon />
                                        {isExpanded ? (setPrice("399,00"), setNumberOfMonths(6)) : null}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text fontWeight="bold" fontSize="large" >Cena: 399,00 zł</Text>
                                    <Text fontWeight="bold" fontSize="large" >Członkowstwo: 6 miesięcy</Text>
                                    <ListItem>0 zł opłata wpisowa</ListItem>
                                    <ListItem>karnet na 6 miesięcy</ListItem>
                                    <ListItem>Szeroka oferta grupowych zajęć fitness</ListItem>
                                    <ListItem>10% rabatu na zakupy w sklepie na siłowni</ListItem>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem id="699,00">
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "purple", color: "white" }}>
                                        <Box flex="1" textAlign="left" fontWeight="bold">
                                            BASIC - 12M
                            </Box>
                                        <AccordionIcon />
                                        {isExpanded ? (setPrice("699,00"), setNumberOfMonths(12)) : null}

                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text fontWeight="bold" fontSize="large" >Cena: 699,00 zł</Text>
                                    <Text fontWeight="bold" fontSize="large" >Członkowstwo: 12 miesięcy</Text>
                                    <ListItem>0 zł opłata wpisowa</ListItem>
                                    <ListItem>karnet na 6 miesięcy</ListItem>
                                    <ListItem>Szeroka oferta grupowych zajęć fitness</ListItem>
                                    <ListItem>10% rabatu na zakupy w sklepie na siłowni</ListItem>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
            </Box >
            <OrderPassForm price={price} numberOfMonths={numberOfMonths} />
        </Flex >
    )
}

export default PassPageForUser;