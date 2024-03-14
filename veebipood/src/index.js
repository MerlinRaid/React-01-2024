import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import './index.css'; //minu .css fail võiks jääda allapoole, sest minu oma on muudetav
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// Navigeerimiseks (route-mine) ehk URLi vahetuseks ja seoses sellega ka koodi vahetuseks
// 1. npm install react-router-dom <-- uue mooduli (koodilõikude panemine node_modules sisse)
// 2. import <BrowserRouter>
// 3. ümbritseme <App /> tagi (element) BrowserRouter tagiga
// 4. App.js sees teeme seosed URLi ja koodi vahel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
