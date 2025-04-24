import React, { useState, useEffect } from "react";
import PopupOffer from "./PopupOffer";

const Announcement = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Show popup on page load after 3 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDetailsClick = (event) => {
    event.preventDefault();
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="announcement">
      <div className="offer-txt">Offer</div>
      <marquee className="offer" behavior="scroll" direction="left" scrollAmount="5">
        <a href="/" id="details-link" onClick={handleDetailsClick}>
          🎉 2 Night's 3 Day's Lucknow Meet-up 2025 🎉{" "}
          <span className="green">Get Details</span>
        </a>
      </marquee>
      <PopupOffer isVisible={isPopupVisible} onClose={handleClosePopup} />
    </div>
  );
};

export default Announcement;







