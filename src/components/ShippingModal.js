import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShippingModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 🔹 Este bloque controla que el modal solo se muestre una vez
    const hasSeenModal = localStorage.getItem('hasSeenShippingModal');

    if (!hasSeenModal) {
      // 🔸 Pequeño delay para que aparezca con más naturalidad
      setTimeout(() => setShowModal(true), 800);
      localStorage.setItem('hasSeenShippingModal', 'true');
    }
  }, []);

  const handleClose = () => {
    // 🔹 Al hacer click en cerrar, se oculta el modal
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        // 🔸 Capa de fondo con animación de entrada/salida de opacidad
        <motion.div
          className="shipping-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.6 } }} // 💡 Fade out después de la animación del modal
        >
          {/* 🔹 Contenedor del modal animado */}
          <motion.div
            className="shipping-modal-content"
            initial={{
              scale: 0,     // Comienza desde tamaño cero (efecto de expansión)
              x: 0,         // Posición horizontal inicial (desde el borde inferior)
              y: 240,       // Posición vertical inicial (abajo, cerca del botón flotante)
              opacity: 0,   // Comienza invisible
              transition: { duration: 0.6 }
            }}
            animate={{
              scale: 1,
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // curva suave de entrada
              }
            }}
            exit={{
              scale: 0,
              x: 70,       // Se va hacia la derecha
              y: 240,       // Se va hacia abajo (efecto "hacia el botón")
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: [0.55, 0.085, 0.68, 0.53] // curva natural de salida
              }
            }}
            style={{
              transformOrigin: 'bottom right' // 📍 Punto de transformación del modal
            }}
          >
            {/* 🔺 Botón de cerrar */}
            <button className="shipping-modal-close" onClick={handleClose}>×</button>

            {/* 🔺 Contenido del modal */}
            <h2>¡Envíos <br />gratis a La Plata <br />y alrededores!</h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShippingModal;
