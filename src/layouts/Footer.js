import React from 'react';

import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import {
    Stack,
    Text,
} from '@chakra-ui/react';


const Footer = () => {
    return (
        // bg="green"
        <Stack>
            {/* color="white" */}
            <Text p={2} textAlign="center">FOOTER {<ColorModeSwitcher alignSelf="flex-end" />}</Text>
        </Stack>
    );
}

export default Footer;
