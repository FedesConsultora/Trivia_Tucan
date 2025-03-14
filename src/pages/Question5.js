// src/pages/Question5.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';

const questionData = {
  question: "¿Cómo llegó Tucanito a TuCan?",
  options: [
    "Fue rescatado y encontró su hogar en TuCan.", // Correcta
    "Es un misterio… sólo los verdaderos tucaneros lo saben.",
    "Lo adoptó un cliente muy especial y se convirtió en parte de la familia."
  ],
  correctIndex: 0, // La opción A es la correcta (índice 0)
};

const Question5 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navega a la pantalla final o resultados; ajusta la ruta según tu flujo
    navigate('/resultados');
  };

  return <Question questionData={questionData} onNext={handleNext} questionClass="question5-options" patitaImage="patita5.webp" />;
};

export default Question5;
