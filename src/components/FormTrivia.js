import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSoundContext } from '../context/SoundContext';
import { useQuiz } from '../context/QuizContext';

const FormTrivia = ({onStartTrivia }) => {
  const navigate = useNavigate();
  const { playBoton, stopInicio } = useSoundContext();
  const { updateUser, user } = useQuiz();

  const [formData, setFormData] = useState({
    nombreCompleto: user.nombreCompleto || '',
    email: user.email || '',
    telefono: user.telefono || '',
  });

  const [errors, setErrors] = useState({
    email: '',
    telefono: '',
  });

  // Actualizar `formData` cuando `user` cambie
  useEffect(() => {
    setFormData({
      nombreCompleto: user.nombreCompleto || '',
      email: user.email || '',
      telefono: user.telefono || '',
    });
  }, [user]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateTelefono = (telefono) => /^[0-9]*$/.test(telefono); // Solo números

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefono" && !validateTelefono(value)) {
      setErrors((prev) => ({ ...prev, telefono: "Solo se permiten números" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, telefono: "" }));
    }

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

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Formato de email no válido" }));
      return;
    }

    if (!validateTelefono(formData.telefono)) {
      setErrors((prev) => ({ ...prev, telefono: "Solo se permiten números" }));
      return;
    }

    playBoton();
    stopInicio();

    updateUser({
      nombreCompleto: formData.nombreCompleto,
      email: formData.email,
      telefono: formData.telefono,
    });
    onStartTrivia();
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
        {errors.email && <p className="error-message">{errors.email}</p>}
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
        {errors.telefono && <p className="error-message">{errors.telefono}</p>}
      </div>

      <div className="contenedorBotonStart">
        <button type="submit" className="btn-start" disabled={errors.email || errors.telefono}>
          ¡Empecemos! <img src="/assets/images/flechaDerecha.webp" alt="flecha derecha" />
        </button>
      </div>
    </form>
  );
};

export default FormTrivia;
