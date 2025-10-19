import React from 'react';
import './DividedScreenDer.css'; // Asegúrate de importar el CSS

const DividedScreenDer = ({ title, content, imageUrl }) => {
  return (
    <div className="container">
      <div className="texto">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className="imagen">
        <img src={imageUrl} alt="Descripción" />
      </div>
    </div>
  );
};

export default DividedScreenDer;