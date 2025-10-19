import React from 'react';
import './DividedScreenIzq.css'; // Asegúrate de importar el CSS

const DividedScreenIzq = ({ title, content,imageUrl, extra}) => {
  return (
    <div className="container_t">    
     {imageUrl ? (
        <div className="imagen">
          <img src={imageUrl} alt="Descripción" /> 
        </div>
      ) : (
        <div className="texto_w" >
            <h1>{extra}</h1>
        </div>
      )}
      <div className="texto_t">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DividedScreenIzq;
