import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import Router from './Router';

// wrapper function
// naming it Main is what most devs do
 // Brower router is a tool watching the url to see if it changes
const Main = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

// replace app with Main
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);