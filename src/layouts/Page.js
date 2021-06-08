import React from 'react';
import HomePage from '../pages/HomePage'
import NewsPage from '../pages/NewsPage';
import CalendarPage from '../pages/CalendarPage';
import LoginPage from '../pages/LoginPage';
import MembershipPage from '../pages/MembershipPage';
import PassPage from '../pages/PassPage';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { IsLogged } from '../services/IsLogged';

const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
        if (IsLogged()) {
            next();
        }
        next.redirect('/login');
    } else if (to.meta.guestOnly) {
        if (!IsLogged()) {
            next();
        }
        next.redirect('/aktualnosci');
    } else {
        next();
    }

};

const Page = () => {
    return (
        <>
            <GuardProvider guards={[requireLogin]}>
                <GuardedRoute path="/" exact component={HomePage} meta={{ guestOnly: true }} />
                <GuardedRoute path="/aktualnosci" component={NewsPage} meta={{ auth: true }} />
                <GuardedRoute path="/kalendarz" component={CalendarPage} meta={{ auth: true }} />
                <GuardedRoute path="/czlonkowstwo" component={MembershipPage} meta={{ auth: true }} />
                <GuardedRoute path="/karnet" component={PassPage} meta={{ auth: true }} />
                <GuardedRoute path="/login" component={LoginPage} meta={{ guestOnly: true }} />
            </GuardProvider>

        </>
    );
}

export default Page;