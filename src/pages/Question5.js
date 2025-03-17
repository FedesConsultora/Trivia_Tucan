// src/pages/Question5.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { useQuiz } from '../context/QuizContext';
import { saveTriviaResult } from '../services/api';

const questionData = {
  question: "¿Cómo llegó Tucanito a TuCan?",
  options: [
    "Fue rescatado y encontró su hogar en TuCan.", 
    "Es un misterio… sólo los verdaderos tucaneros lo saben.",
    "Lo adoptó un cliente muy especial y se convirtió en parte de la familia."
  ],
  correctIndex: 0,
};

const Question5 = () => {
  const navigate = useNavigate();
  const { updateResult, results, user } = useQuiz();
  const [loading, setLoading] = useState(false); // Estado de carga
  const handleAnswer = (isCorrect) => {
    updateResult('question5', isCorrect);
  };

  const handleNext = async () => {
    if (loading) return; // Evita llamadas múltiples
    setLoading(true); // Bloquea el botón
    // Aseguramos que la respuesta de la pregunta 5 esté actualizada
    const allResults = { ...results, question5: results.question5 !== null ? results.question5 : false };
    const allCorrect = Object.values(allResults).every(val => val === true);
    const ganador = allCorrect ? 'Si' : 'No';
    try {
      const res = await saveTriviaResult({ ...user, ganador });
      console.log("Resultado guardado:", res);
      navigate(allCorrect ? '/resultado-exito' : '/resultado-fracaso');
    } catch (err) {
      console.error("Error al guardar resultado trivia:", err);
    } finally {
      setLoading(false); // Desbloquea el botón (opcional)
    }
  };

  return (
    <Question 
      questionData={questionData} 
      onNext={handleNext} 
      onAnswer={handleAnswer}
      questionClass="question5-options" 
      patitaImage="patita5.webp"
      loading={loading}
    />
  );
};

export default Question5;