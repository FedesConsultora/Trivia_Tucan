// src/pages/Question3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';

const questionData = {
  question: "¿Cuál de los locales de TuCan es el más grande?",
  options: [
    "Camino Belgrano y 516.", // Correcta
    "32 entre 6 y 7.",
    "18 esquina 50."
  ],
  correctIndex: 0, // La opción A es la correcta (índice 0)
};

const Question3 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navega a la siguiente pregunta, por ejemplo: /question4
    navigate('/question4');
  };

  return <Question questionData={questionData} onNext={handleNext} questionClass="question3-options" patitaImage="patita3.webp" />;
};

export default Question3;
