import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/js/Main';
import NavigationMenu from './components/js/NavigationMenu';
import GetCountryData from './services/addressService';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode><BrowserRouter>
    <NavigationMenu />    
    <Main/>
    </BrowserRouter>  
    <GetCountryData/>
  </React.StrictMode>
);