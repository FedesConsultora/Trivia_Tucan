import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSoundContext } from '../context/SoundContext';
import { useQuiz } from '../context/QuizContext';

const FormTrivia = () => {
  const navigate = useNavigate();
  const { playBoton, stopInicio } = useSoundContext();
  const { updateUser } = useQuiz();

  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    telefono: '',
  });

  // Función para validar el email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Función para validar el teléfono
  const validateTelefono = (telefono) => {
    return /^[0-9]*$/.test(telefono); // Solo permite números
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validación en tiempo real para teléfono
    if (name === "telefono" && !validateTelefono(value)) {
      setErrors((prev) => ({ ...prev, telefono: "Solo se permiten números" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, telefono: "" }));
    }

    // Validación en tiempo real para email
    if (name === "email" && value.length > 0) {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Formato de email no válido",
      }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación final antes de enviar
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Formato de email no válido" }));
      return;
    }
    
    if (!validateTelefono(formData.telefono)) {
      setErrors((prev) => ({ ...prev, telefono: "Solo se permiten números" }));
      return;
    }

    playBoton();   // Sonido del click
    stopInicio();  // Detiene el sonido de fondo al salir de la pantalla inicial

    updateUser({
      nombre_completo: formData.nombreCompleto,
      email: formData.email,
      telefono: formData.telefono
    });

    navigate('/question1'); // Navegamos a la primera pregunta
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
          placeholder='Nombre completo'
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
          placeholder='Correo electrónico'
          required
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder='Teléfono'
          required
        />
        {errors.telefono && <p className="error-message">{errors.telefono}</p>}
      </div>

      <div className='contenedorBotonStart'>
        <button type="submit" className="btn-start" disabled={errors.email || errors.telefono}>
          ¡Empecemos! <img src="/assets/images/flechaDerecha.webp" alt="flecha derecha"/>
        </button>
      </div>
    </form>
  );
};

export default FormTrivia;