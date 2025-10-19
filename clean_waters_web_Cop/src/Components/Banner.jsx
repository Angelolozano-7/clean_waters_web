import React, { useState } from 'react';
import './Banner.css';

const Banner = ({ wAnswers }) => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent(prev => (prev + 1) % wAnswers.length); // Cicla a través del arreglo
    };

    return (
        <div className="cards-container">
            <div className="card-izq">
                <h1>QUESTION</h1>
                <h2>{wAnswers[current].question}</h2>
                <button onClick={handleNext}>Next</button>
            </div>
            <div className="card-der">
                <h1>RIGHT ANSWER</h1>
                <h2>{wAnswers[current].correct}</h2>
            </div>
        </div>
    );
};

export default Banner;
