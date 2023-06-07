/*
* Author: Vojtěch Kulíšek
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getRoute } from './routes';
import About from '../pages/About/About';
import CompositionOfTheCommittee from '../pages/CompositionOfTheCommittee/CompositionOfTheCommittee';
import CompositionOfTheUnits from '../pages/CompositionOfTheUnits/CompositionOfTheUnits';

const RouterSwitch = () => {
    return (
        <Router>
        <Routes>
            <Route
                element={<About />}
                path={getRoute('home').path}
                exact
            />
             <Route
                element={<CompositionOfTheCommittee />}
                path={getRoute('CompositionOfTheCommittee').path}
                exact
            />
             <Route
                element={<CompositionOfTheUnits />}
                path={getRoute('CompositionOfTheUnits').path}
                exact
            />

            <Route exact path="*" element={<About />} />
        </Routes>
        </Router>
    );
};

export default RouterSwitch;