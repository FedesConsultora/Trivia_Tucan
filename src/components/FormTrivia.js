// src/components/FormTrivia.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormTrivia = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de envío del formulario
    console.log('Datos del formulario:', formData);
    // Redirige a la primera pregunta
    navigate('/question1');
  };

  return (
    <form className="form-trivia" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          placeholder="Nombre completo"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
      </div>
      <div className="contenedorBotonStart">
        <button type="submit" className="btn-start">
          ¡Empecemos! <img src="/assets/images/flechaDerecha.webp" alt="flecha derecha" />
        </button>
      </div>
    </form>
  );
};

export default FormTrivia;
