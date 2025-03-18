// src/context/SoundContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';

const SoundContext = createContext();

export const useSoundContext = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const [isTriviaActive, setIsTriviaActive] = useState(false);

  // Sonido de fondo para la trivia (NO reiniciar)
  const [playPregunta, { stop: stopPregunta }] = useSound('/assets/audio/PREGUNTAS.mp3', { loop: true, volume: 0.5 });

  const [playInicio, { stop: stopInicio }] = useSound('/assets/audio/INICIO.mp3', { loop: true, volume: 0.5 });
  const [playBoton] = useSound('/assets/audio/CLICK.mp3', { volume: 0.8 });
  const [playRespuestaCorrecta] = useSound('/assets/audio/CORRECTO.mp3', { volume: 0.5 });
  const [playRespuestaIncorrecta] = useSound('/assets/audio/Fallaste.mp3', { volume: 0.5 });
  const [playResultadoExito] = useSound('/assets/audio/ganador_1.mp3', { volume: 0.5 });
  const [playResultadoFracaso] = useSound('/assets/audio/Fallaste.mp3', { volume: 0.5 });

  // Iniciar la música de las preguntas solo UNA VEZ cuando empiece la trivia
  useEffect(() => {
    if (isTriviaActive) {
      playPregunta();
    }

    return () => {
      stopPregunta();
    };
  }, [isTriviaActive, playPregunta, stopPregunta]);

  const stopTriviaMusic = () => {
    stopPregunta();
    setIsTriviaActive(false);
  };

  return (
    <SoundContext.Provider
      value={{
        playInicio,
        stopInicio,
        playBoton,
        playPregunta,
        stopPregunta,
        playRespuestaCorrecta,
        playRespuestaIncorrecta,
        playResultadoExito,
        playResultadoFracaso,
        setIsTriviaActive,
        stopTriviaMusic
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};
