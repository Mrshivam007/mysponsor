import React, { useEffect } from 'react';
import './PopUp.css';

const PopUp = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleBackgroundClick = () => {
    onClose();
  };

  return (
    <div className="popup-container" onClick={handleBackgroundClick}>
      <div className="sparks-container">
        {[...Array(20)].map((_, index) => (
          <div className="sparkle" key={index}></div>
        ))}
        {[...Array(10)].map((_, index) => (
          <div className="star" key={index}></div>
        ))}
      </div>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-message">
          <div className="cheers-animation">🎉</div>
          <div className="message">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
