import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import IntroText from './components/IntroText';
import Presentation from './components/Presentation';

import RegisterButton from './components/RegisterButton';
import Popup from "./components/Popup";

import EarningsProofs from './components/EarningsProofs';
import LegalCertificates from './components/LegalCertificates';
import Packages from './components/Packages';
import Calculations from './components/Calculations';
import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Context
import { ReferralProvider } from './contexts/ReferralContext';

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <ReferralProvider>
      <Router>
        <Navbar />
        <Announcement />
        <IntroText />
        <Presentation />
        <RegisterButton onClick={handlePopupOpen} />
        <EarningsProofs />
        <RegisterButton onClick={handlePopupOpen} />
        <LegalCertificates />
        <RegisterButton onClick={handlePopupOpen} />
        <Packages />
        <RegisterButton onClick={handlePopupOpen} />
        <Calculations />
        <RegisterButton onClick={handlePopupOpen} />
        <AboutMe />
        <FAQ />
        <ScrollToTopButton />
        

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Popup isVisible={isPopupVisible} onClose={handlePopupClose} />
      </Router>
      <Footer />
    </ReferralProvider>
  );
};

export default App;
