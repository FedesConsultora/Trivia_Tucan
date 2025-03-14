// src/pages/Question3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { useQuiz } from '../context/QuizContext';

const questionData = {
  question: "¿Cuál de los locales de TuCan es el más grande?",
  options: [
    "Camino Belgrano y 516.", // Correcta
    "32 entre 6 y 7.",
    "18 esquina 50."
  ],
  correctIndex: 0,
};

const Question3 = () => {
  const navigate = useNavigate();
  const { updateResult } = useQuiz();

  const handleAnswer = (isCorrect) => {
    updateResult('question3', isCorrect);
  };

  const handleNext = () => {
    navigate('/question4');
  };

  return (
    <Question 
      questionData={questionData} 
      onNext={handleNext} 
      onAnswer={handleAnswer}
      questionClass="question3-options" 
      patitaImage="patita3.webp" 
    />
  );
};

export default Question3;
