// src/pages/Question4.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { useQuiz } from '../context/QuizContext';

const questionData = {
  question: "Si hablamos de TuCan, hablamos de...",
  options: [
    "El petshop que tiene todo lo que necesitás.", // Correcta (índice 0)
    "El supermercado de mascotas más grande de la ciudad.",
    "Una veterinaria que ofrecé atención 24/7."
  ],
  correctIndex: 0,
};

const Question4 = () => {
  const navigate = useNavigate();
  const { updateResult } = useQuiz();

  const handleAnswer = (isCorrect) => {
    updateResult('question4', isCorrect);
  };

  const handleNext = () => {
    navigate('/question5');
  };

  return (
    <Question 
      questionData={questionData} 
      onNext={handleNext} 
      onAnswer={handleAnswer}
      questionClass="question4-options" 
      patitaImage="patita4.webp" 
    />
  );
};

export default Question4;
