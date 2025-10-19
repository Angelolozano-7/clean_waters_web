import React from 'react';
import './Arrow.css'; // Asegúrate de tener tu CSS correctamente referenciado
import ArrowDown from '../../images/Arrow_down.svg'; // Asegúrate de que la ruta es correcta

const Arrow = () => {
  return (
    <div className="arrow-container">
      <img src={ArrowDown} className='arrow-img' alt="Scroll down" ></img>
    </div>
  );
};

export default Arrow;
