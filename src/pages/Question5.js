// src/pages/Question5.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { useQuiz } from '../context/QuizContext';

const questionData = {
  question: "¿Cómo llegó Tucanito a TuCan?",
  options: [
    "Fue rescatado y encontró su hogar en TuCan.", // Correcta
    "Es un misterio… sólo los verdaderos tucaneros lo saben.",
    "Lo adoptó un cliente muy especial y se convirtió en parte de la familia."
  ],
  correctIndex: 0,
};

const Question5 = () => {
  const navigate = useNavigate();
  const { updateResult, results } = useQuiz();

  const handleAnswer = (isCorrect) => {
    updateResult('question5', isCorrect);
  };

  const handleNext = () => {
    // Aseguramos que la respuesta de la pregunta 5 esté actualizada
    const allResults = { ...results, question5: results.question5 !== null ? results.question5 : false };
    const allCorrect = Object.values(allResults).every(val => val === true);
    if (allCorrect) {
      navigate('/resultado-exito');
    } else {
      navigate('/resultado-fracaso');
    }
  };

  return (
    <Question 
      questionData={questionData} 
      onNext={handleNext} 
      onAnswer={handleAnswer}
      questionClass="question5-options" 
      patitaImage="patita5.webp" 
    />
  );
};

export default Question5;