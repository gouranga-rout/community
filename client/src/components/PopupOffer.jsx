import React from "react";
import offer from '../offer/Lucknow_meetup.jpg';

const PopupOffer = ({ isVisible, onClose }) => {
  return (
    <>
      <div className={`place ${isVisible ? "visible" : ""}`} onClick={onClose}></div>
      <div className={`popupOffer ${isVisible ? "visible" : ""}`}>
        <img
          src={offer}
          alt="Lucknow Meet-up Details"
        />
        <p className="popupOffer-status"> Offer Expired,<br /> Please wait for new offer</p>
        <button className="offerclose-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default PopupOffer;

