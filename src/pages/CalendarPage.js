import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {
    Box,
    Button,
    Center,
    Flex,

} from '@chakra-ui/react';

const Calendarpage = () => {
    return (
        <Flex flexBasis="100%">
            <Box w="100%">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    height="100%"
                    events={[
                        { title: 'event 1', date: '2021-04-27' },
                        { title: 'event 2', date: '2021-04-29' }
                    ]}
                />
            </Box>
            <Box w="30%" bg="red.300" h="100%">
                <Center display="grid" padding="10" top="30%" position="absolute" right="2%">
                    <Box paddingBottom="10" w="100%">
                        <Button fontSize="25px" w="30vh">Zapisz się</Button>
                    </Box>
                    <Box paddingBottom="10" w="100%">
                        <Button fontSize="25px" w="30vh">Wypisz się</Button>
                    </Box>
                </Center>
            </Box>
        </Flex>
    );
}

export default Calendarpage;