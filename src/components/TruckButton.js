// src/components/TruckButton.js
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

const TruckButton = () => {
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Inicia la animación del camión
    playerRef.current.play();
  };

  const handleAnimationComplete = () => {
    // Al finalizar la animación, redirige a WhatsApp con el mensaje predefinido
    const phone = "54221154544119"; 
    const message = encodeURIComponent("Hola estoy interesado/a en sus productos");
    window.location.href = `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <button className="truck-button-container" onClick={handleClick}>
      <Player
        ref={playerRef}
        src="/assets/videos/truckPackage.json"  // Coloca tu animación JSON aquí
        style={{ height: '80px', width: '80px' }}
        loop={true}
        autoplay={true}
        onEvent={(event) => {
          if (event === 'complete') {
            handleAnimationComplete();
          }
        }}
        className="truck-button-player"
      />
    </button>
  );
};

export default TruckButton;
