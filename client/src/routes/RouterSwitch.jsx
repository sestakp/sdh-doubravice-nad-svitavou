/*
* Author: Vojtěch Kulíšek
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getRoute } from './routes';
import About from '../pages/About/About';
import CompositionOfTheCommittee from '../pages/CompositionOfTheCommittee/CompositionOfTheCommittee';
import CompositionOfTheUnits from '../pages/CompositionOfTheUnits/CompositionOfTheUnits';
import YoungFirefighters from '../pages/YoungFirefighters/YoungFirefighters';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import News from '../pages/News/News';

const RouterSwitch = () => {
    return (

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
                    <Route
                        element={<YoungFirefighters />}
                        path={getRoute('YoungFirefighters').path}
                        exact
                    />

                    <Route
                        element={<Contact />}
                        path={getRoute('Contact').path}
                        exact
                    />

                    <Route
                        element={<Login />}
                        path={getRoute('Login').path}
                        exact
                    />
                    
                    <Route
                        element={<News />}
                        path={getRoute('News').path}
                        exact
                    />

                    <Route exact path="*" element={<About />} />
                </Routes>
    );
};

export default RouterSwitch;