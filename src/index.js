import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/js/Main';
import NavigationMenu from './components/js/NavigationMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationMenu />
    <Main />
  </React.StrictMode>
);