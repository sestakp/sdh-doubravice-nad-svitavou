/*
* Author: Vojtěch Kulíšek
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getRoute } from './routes';
import About from '../pages/About/About';

const RouterSwitch = () => {
    return (
        <Router>
        <Routes>
            <Route
                element={<About />}
                path={getRoute('home').path}
                exact
            />
            <Route exact path="*" element={<About />} />
        </Routes>
        </Router>
    );
};

export default RouterSwitch;