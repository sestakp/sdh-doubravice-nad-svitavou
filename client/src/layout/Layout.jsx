import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RouterSwitch from "../routes/RouterSwitch";
import Container from '@mui/material/Container';
import "./Layout.scss";

function Layout() {
    return (
        <div>
            <Navbar />
            <Container className="p-5 container" >
                <RouterSwitch />
            </Container>
        </div>
    )
}

export default Layout;