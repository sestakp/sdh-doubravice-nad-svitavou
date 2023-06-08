import React from "react";
import './App.css';
import videoBackground from "./assets/fire_background.mp4";
import Layout from "./layout/Layout";

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider, createTheme } from "@mui/material";
import { grey, orange } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: orange[500], // Custom primary color
      },
      text: {
        primary: grey[300], // Custom text color
      },
    },
  });


  return (
    <div className='main'>
      <ThemeProvider theme={theme}>
        <div className="overlay"></div>
        <video src={videoBackground} autoPlay loop muted style={{position: 'fixed'}}/>
        <div className="content">
          <AuthProvider>
            <Layout />
          </AuthProvider>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
