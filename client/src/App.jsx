import React from "react";
import './App.css';
import videoBackground from "./assets/fire_background.mp4";
import Layout from "./layout/Layout";

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider, createTheme } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

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
  
  if (process.env.NODE_ENV === 'production') {
    console.log = () => {};
    console.error = () => {};
    console.warn = () => {};
  }

  return (
    <div className='main'>
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <div className="overlay"></div>
        <video src={videoBackground} autoPlay loop muted/>
        <div className="content">
          <AuthProvider>
            <Layout />
          </AuthProvider>
        </div>
      </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
