import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import './styles/css/main.css';
import { SoundProvider } from './context/SoundContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <SoundProvider>
      <QuizProvider>
          <App />
      </QuizProvider>
    </SoundProvider>
  </BrowserRouter>
);

