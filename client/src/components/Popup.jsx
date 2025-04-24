// components/Popup.jsx
import React from "react";
import starter from '../packages-list/STARTER_PKG.png';
import intermediate from '../packages-list/INTERMEDIATE_PKG.png';
import expert from '../packages-list/EXPERT_PKG.png';
import master from '../packages-list/MASTER_PKG.png';                                                     
import bramhastra from '../packages-list/BRAMHASTRA_PKG.png';
import premiumPro from '../packages-list/PREMIUM-PRO_PKG.png';

const Popup = ({ isVisible, onClose }) => {
  return (
    isVisible && (
      <div id="popupForm" className="popup" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="popup-content">
          <span className="close" onClick={onClose}>&times;</span>
          <div className="popup-pkg">
            <h1>
              PLEASE <span>SELECT</span> THE <span>PACKAGE</span> YOU
              <span> CHOOSE</span> TO <span>JOIN</span>
            </h1>
            <div className="popup-pkg-container">
              <div className="pkg_with_price">
                <a href="https://richind.org/checkout?slug=starter-package&referrer_code=RINDQMB1KG">
                  <img src={starter} alt="Starter Package" />
                </a>
                <h1>PRICE : ₹260.00</h1>
              </div>
              <div className="pkg_with_price">
                <a href="https://richind.org/checkout?slug=intermediate&referrer_code=RINDQMB1KG">
                  <img src={intermediate} alt="Intermediate Package" />
                </a>
                <h1>PRICE : ₹512.00</h1>
              </div>
              <div className="pkg_with_price">
                <a href="https://richind.org/checkout?slug=expert&referrer_code=RINDQMB1KG">
                  <img src={expert}  alt="Expert Package" />
                </a>
                <h1>PRICE : ₹1050.00</h1>
              </div>
              <div className="pkg_with_price">
                <a href="https://richind.org/checkout?slug=master&referrer_code=RINDQMB1KG">
                  <img src={master} alt="Master Package" />
                </a>
                <h1>PRICE : ₹2299.00</h1>
              </div>
              <div className="pkg_with_price">
                <a href="https://richind.org/checkout?slug=brahmastra&referrer_code=RINDQMB1KG">
                  <img src={bramhastra}  alt="Brahmastra Package" />
                </a>
                <h1>PRICE : ₹4999.00</h1>
              </div>
              <div className="pkg_with_price">
                <a href="https://richind.org/checkout?slug=premium-pro&referrer_code=RINDQMB1KG">
                  <img src={premiumPro} alt="Premium Pro Package" />
                </a>
                <h1>PRICE : ₹9998.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;

