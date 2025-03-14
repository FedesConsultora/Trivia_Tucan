// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trivia from './pages/Trivia';       // Asegúrate de crear este componente
import Promos from './pages/Promos';       // Y este, si es necesario
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';
import ResultadoExito from './pages/ResultadoExito';
import ResultadoFracaso from './pages/ResultadoFracaso';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trivia" element={<Trivia />} />
      <Route path="/question1" element={<Question1 />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path="/question3" element={<Question3 />} />
      <Route path="/question4" element={<Question4 />} />
      <Route path="/question5" element={<Question5 />} />
      <Route path="/resultado-exito" element={<ResultadoExito />} />
      <Route path="/resultado-fracaso" element={<ResultadoFracaso />} />
      <Route path="/promos" element={<Promos />} />
    </Routes>
  );
}

export default App;
