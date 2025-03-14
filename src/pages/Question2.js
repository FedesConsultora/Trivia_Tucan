// src/pages/Question2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';

const questionData = {
  question: "¿De qué signo es Tucanito?",
  options: [
    "Piscis: Es sensible, cariñoso y siempre está dispuesto a ayudar.",
    "Escorpio: Es misterioso, leal y tiene una mirada intensa.", // Opción correcta
    "Sagitario: Es aventurero, terco y tiene energía de sobra."
  ],
  correctIndex: 1, // Escorpio es la correcta (índice 1)
};

const Question2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navega a la siguiente pregunta, por ejemplo: /question3
    navigate('/question3');
  };

  return <Question questionData={questionData} onNext={handleNext} questionClass="question2-options" patitaImage="patita2.webp" />;
};

export default Question2;
