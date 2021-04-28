import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import NewsPage from '../components/NewsPage';
import CalendarPage from '../components/CalendarPage';
import LoginPage from '../components/LoginPage';


const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/aktualnosci" component={NewsPage} />
            <Route path="/kalendarz" component={CalendarPage} />
            <Route path="/login" component={LoginPage} />
        </>
    );
}

export default Page;