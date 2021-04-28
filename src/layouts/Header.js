import React from 'react';

import { Route, Switch } from 'react-router-dom'
import HeaderLoggedOut from '../components/HeaderLoggedOut'
import HeaderLogged from '../components/HeaderLogged'


const Header = () => {
    return (
        <>
            <Route path="/" exact component={HeaderLoggedOut} />
            <Route path="/aktualnosci" component={HeaderLogged} />
            <Route path="/kalendarz" component={HeaderLogged} />
        </>
    );
}

export default Header;
