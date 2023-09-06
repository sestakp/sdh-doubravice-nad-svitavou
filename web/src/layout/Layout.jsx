import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RouterSwitch from "../routes/RouterSwitch";
import Container from '@mui/material/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import "./Layout.scss";
import { Grid } from "@mui/material";
import InfoSidePanel from "../components/InfoSidePanel/InfoSidePanel";

function Layout() {


    return (
        <div>
            <Router>
                <Navbar />
                <Container className="p-5 container" maxWidth="xl">
                    <Grid container>
                        <Grid item md={9}>
                            <RouterSwitch />
                        </Grid>
                        <Grid item md={3}>
                            <InfoSidePanel />
                        </Grid>
                    </Grid>
                </Container>
            </Router>
        </div>
    )
}

export default Layout;