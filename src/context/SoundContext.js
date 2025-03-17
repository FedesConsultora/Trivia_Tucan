// src/context/SoundContext.js
import React, { createContext, useContext } from 'react';
import useSound from 'use-sound';

const SoundContext = createContext();

export const useSoundContext = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const [playInicio, { stop: stopInicio }] = useSound('/assets/audio/INICIO.mp3', { loop: true, volume: 0.5 });
  const [playBoton] = useSound('/assets/audio/CLICK.mp3', { volume: 0.5 });
  const [playPregunta, { stop: stopPregunta }] = useSound('/assets/audio/PREGUNTAS.mp3', { loop: true, volume: 0.5 });
  const [playRespuestaCorrecta] = useSound('/assets/audio/CORRECTO.mp3', { volume: 0.5 });
  const [playRespuestaIncorrecta] = useSound('/assets/audio/Fallaste.mp3', { volume: 0.5 });
  const [playResultadoExito] = useSound('/assets/audio/ganador_1.mp3', { volume: 0.5 });
  const [playResultadoFracaso] = useSound('/assets/audio/Fallaste.mp3', { volume: 0.5 });

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
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};
