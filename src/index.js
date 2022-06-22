import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/colorpalette.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);