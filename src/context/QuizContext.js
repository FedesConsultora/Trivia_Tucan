import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [user, setUser] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
  });

  const [results, setResults] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });

  const updateResult = (question, isCorrect) => {
    setResults(prev => ({ ...prev, [question]: isCorrect }));
  };

  const updateUser = (userData) => {
    setUser(userData);
  };

  const resetTrivia = () => {
    setResults({
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
    });
    setUser({ nombreCompleto: "", email: "", telefono: "" });
  };

  return (
    <QuizContext.Provider value={{ results, updateResult, user, updateUser, reset: updateUser }}>
      {children}
    </QuizContext.Provider>
  );
};
