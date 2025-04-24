import React, { useState } from 'react';
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

const App = () => {
const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };
  
return (
 <>
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
    <Footer />

    <Popup isVisible={isPopupVisible} onClose={handlePopupClose} />
 </>
  )
}

export default App
