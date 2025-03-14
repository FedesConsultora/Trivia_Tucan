// src/context/QuizContext.js
import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // Guardamos el resultado de cada pregunta (inicialmente null)
  const [results, setResults] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });

  const updateResult = (question, isCorrect) => {
    setResults(prev => ({
      ...prev,
      [question]: isCorrect,
    }));
  };

  return (
    <QuizContext.Provider value={{ results, updateResult }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
