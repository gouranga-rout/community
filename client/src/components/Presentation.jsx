// components/Presentarion.jsx
import React from 'react';
import video from '../assets/presentation.mp4';

const Presentation = () => {
  return (
    <div className="video-frame">
      <video width="100%" controls>
        <source src={video} type="video/mp4" />
      </video>
  </div>

  );
};

export default Presentation;
