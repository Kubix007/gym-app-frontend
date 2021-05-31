import React from 'react';

import { Route } from 'react-router-dom'
import HeaderLoggedOut from '../pages/HeaderLoggedOut'
import HeaderLogged from '../pages/HeaderLogged'


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
