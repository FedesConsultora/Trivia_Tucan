// src/pages/Question1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { useQuiz } from '../context/QuizContext';

const questionData = {
  question: "¿Cuántos locales tiene TuCan en La Plata?",
  options: [
    "Uno, pero gigante.", 
    "Dos, para que no falte nada.", 
    "Tres, porque el amor por las mascotas debe estar en todos lados."
  ],
  correctIndex: 2, // índice 2 para la tercera opción
};

const Question1 = () => {
  const navigate = useNavigate();
  const { updateResult } = useQuiz();

  const handleAnswer = (isCorrect) => {
    updateResult('question1', isCorrect);
  };

  const handleNext = () => {
    navigate('/question2');
  };

  return (
    <Question 
      questionData={questionData} 
      onNext={handleNext} 
      onAnswer={handleAnswer}
      questionClass="question1-options"
      patitaImage="patita1.webp"
    />
  );
};

export default Question1;
