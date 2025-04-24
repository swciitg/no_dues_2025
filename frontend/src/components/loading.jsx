import React from 'react';
import '../styles/loader.css';

const Loader = () => {
  return (
    <div className="fullscreen-loader">
      <div className="spinner">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="spinner-line" style={{ transform: `rotate(${i*30}deg)` }} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
