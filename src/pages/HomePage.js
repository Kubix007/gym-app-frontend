import React from 'react';
import {
    Image,
    Flex
} from '@chakra-ui/react';

import headerImage from '../images/header.jpg'


const HomePage = () => {
    return (
        <Flex>
            <Image
                position="absolute"
                top="50%"
                left="50%"
                minWidth="100%"
                minHeight="100%"
                transform="translate(-50%,-50%)"
                src={headerImage}
                alt="headerImage"
            />
        </Flex>
    );
}

export default HomePage;