import React from 'react';
import { ColorModeSwitcher } from '../pages/ColorModeSwitcher';
import {
    Stack,
    Text,
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Stack>
            <Text p={2} textAlign="center">FOOTER {<ColorModeSwitcher alignSelf="flex-end" />}</Text>
        </Stack>
    );
}

export default Footer;
