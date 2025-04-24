// components/RegisterButton.jsx
import React from "react";

const RegisterButton = ({ onClick }) => {
  return (
    <div className="start-btn">
      <button onClick={onClick}>
        Register Now
      </button>
    </div>
  );
};

export default RegisterButton;
