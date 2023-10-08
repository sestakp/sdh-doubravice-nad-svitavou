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
import Cas20t815 from '../pages/Equipment/CAS20T815/Cas20t815';
import Cas25 from '../pages/Equipment/CAS25/Cas25';
import Pps8 from '../pages/Equipment/PPS8/Pps8';
import Pps12 from '../pages/Equipment/PPS12/Pps12';
import GuestBook from '../pages/guestBook/GuestBook';
import YoungFirefightersQuiz from '../pages/Quiz/Quiz';


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
                        element={<YoungFirefightersQuiz />}
                        path={getRoute('YoungFirefightersQuiz').path}
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
                    
                    <Route
                        element={<Cas20t815 />}
                        path={getRoute('Cas20t815').path}
                        exact
                    />

                    
                    <Route
                        element={<Cas25 />}
                        path={getRoute('Cas25').path}
                        exact
                    />
                    
                    <Route
                        element={<Pps8 />}
                        path={getRoute('Pps8').path}
                        exact
                    />

                    <Route
                        element={<Pps12 />}
                        path={getRoute('Pps12').path}
                        exact
                    />

                    <Route
                        element={<GuestBook />}
                        path={getRoute('GuestBook').path}
                        exact
                    />

                    <Route exact path="*" element={<About />} />
                </Routes>
    );
};

export default RouterSwitch;