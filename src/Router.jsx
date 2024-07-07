import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FicheLogement from './pages/Fiche_logement';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';

function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement" element={<FicheLogement />} /> {/* Nouvelle route pour la page de détails */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
