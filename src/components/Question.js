// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ questionData, onNext, onAnswer, questionClass = "", patitaImage = 'patita1.webp' }) => {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (index) => {
    if (answered) return; 
    setSelected(index);
    setAnswered(true);
    if (onAnswer) {
      onAnswer(index === questionData.correctIndex);
    }
  };

  const getOptionClass = (index) => {
    if (!answered) return "option";

    if (index === selected) {
      return index === questionData.correctIndex ? "option correct" : "option wrong";
    }

    if (selected !== null && index === questionData.correctIndex) {
      return "option correct faded";
    }

    return "option";
  };

  return (
    <div className={`question-container ${questionClass}`}>
      <div className='tuCanHeader'>
        <img className='miniLogo' src='/assets/images/logoMini.webp' alt='Mini Logo Tucan' />
        <hr className="line" />
        <img className='miniLogo' src={`/assets/icons/${patitaImage}`} alt='Patita Tucan' />
      </div>
      <h2 className="question-text">{questionData.question}</h2>
      <div className="divider">
        <hr className="line left" />
        <img src="/assets/images/flechaAbajo.webp" alt="Flecha" className="arrow" />
        <hr className="line right" />
      </div>
      <div className={`options ${questionClass}`}>
        {questionData.options.map((option, index) => (
          <button 
            key={index} 
            className={getOptionClass(index)}
            onClick={() => handleOptionClick(index)}
            disabled={answered}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}. </span>
            <span className='optionText'>{option}</span>
          </button>
        ))}
      </div>
      {answered && (
        <div className='botonContainer'>
          <button className="next-btn" onClick={onNext}>
            Siguiente <img src="/assets/images/flechaDerecha.webp" alt="flecha derecha" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;