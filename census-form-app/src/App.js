import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import CensusFormPage from './pages/CensusFormPage'
import CensusResultsPage from './pages/CensusResultsPage'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/baguetteBox.min.css';
import './assets/css/Footer-Dark-icons.css';
import './assets/css/vanilla-zoom.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/census-form" element={<CensusFormPage />} />
        <Route path="/census-results" element={<CensusResultsPage />} />
        <Route path="/acerca-de-nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

