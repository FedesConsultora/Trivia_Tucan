// src/pages/Question2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { useQuiz } from '../context/QuizContext';

const questionData = {
  question: "¿De qué signo es Tucanito?",
  options: [
    "Piscis: Es sensible, cariñoso y siempre está dispuesto a ayudar.",
    "Escorpio: Es misterioso, leal y tiene una mirada intensa.", 
    "Sagitario: Es aventurero, terco y tiene energía de sobra."
  ],
  correctIndex: 2,
};

const Question2 = () => {
  const navigate = useNavigate();
  const { updateResult } = useQuiz();

  const handleAnswer = (isCorrect) => {
    updateResult('question2', isCorrect);
  };

  const handleNext = () => {
    navigate('/question3');
  };

  return (
    <Question 
      questionData={questionData} 
      onNext={handleNext} 
      onAnswer={handleAnswer}
      questionClass="question2-options" 
      patitaImage="patita2.webp" 
    />
  );
};

export default Question2;
