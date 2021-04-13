import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'

import {
    Stack,
    Text,
} from '@chakra-ui/react';

const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
        </>
    );
}

export default Page;