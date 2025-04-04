import React from 'react';

const FloatingWhatsapp = () => {
  const handleClick = () => {
    const phone = "54221154544119"; // Asegurate del formato correcto
    const message = encodeURIComponent("Hola estoy interesado/a en sus productos");
    window.location.href = `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <button className="floating-whatsapp" onClick={handleClick}>
      <img src="/assets/images/whatsapp.png" alt="WhatsApp" />
    </button>
  );
};

export default FloatingWhatsapp;
