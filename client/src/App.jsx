import React from "react";
import './App.css';
import videoBackground from "./assets/fire_background.mp4";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBackground} autoPlay loop muted />
        <div className="content">
          <Layout />
        </div>
    </div>
  );
}

export default App;
