// Quiz.jsx
import React, { useState, useEffect  } from 'react';
import "./Quiz.css";

const Quiz = ({ question, options, onAnswer, resetSelection  }) => {
  const [selectedOption, setSelectedOption] = useState(null);  // Cambio: usar null inicialmente

  useEffect(() => {
    if (resetSelection) {
      setSelectedOption(null); // Reset cuando el padre lo indique
    }
  }, [resetSelection]);


  const handleOptionClick = (index) => {
    setSelectedOption(index); // Guardar el índice de la opción seleccionada
    const answer = {
      question: question,
      selectedOption: index,
      description: options[index].description
    };
    onAnswer(answer);
    window.scrollBy({ top: 60 * window.innerHeight * 0.01, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="quiz-container">
      <div className="question">{question}</div>
      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            <div className="circle"></div>
            <div className="description">{option.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
