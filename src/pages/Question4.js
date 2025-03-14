// src/pages/Question4.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';

const questionData = {
  question: "Si hablamos de TuCan, hablamos de...",
  options: [
    "El petshop que tiene todo lo que necesitás.", // Opción correcta
    "El supermercado de mascotas más grande de la ciudad.",
    "Una veterinaria que ofrecé atención 24/7."
  ],
  correctIndex: 1, // La opción A es la correcta (índice 0)
};

const Question4 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navega a la siguiente pregunta, por ejemplo: /question5
    navigate('/question5');
  };

  return <Question questionData={questionData} onNext={handleNext} questionClass="question4-options" patitaImage="patita1.webp" />;
};

export default Question4;
