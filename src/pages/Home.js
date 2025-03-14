// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      {/* Logo principal arriba de los botones */}
      <img src="/assets/images/LogoPrincipal.webp" alt="Logo" className="logo" />
      
      <div className="button-container">
        {/* Botón de Trivia */}
        <button className="btn trivia" onClick={() => navigate('/trivia')}>
          <div className="icon-circle">
            <img alt="icono trivia" src="/assets/icons/iconoTrivia.webp" className="iconoTrivia"/>
          </div>
          <p>TRIVIA</p>
        </button>

        {/* Botón de Ofertas (PROMOS) */}
        <button className="btn ofertas" onClick={() => navigate('/promos')}>
          <div className="icon-circle">
            <img alt="icono Promo" src="/assets/icons/iconoPromos.webp" className="iconoOfertas" />
          </div>
          <p>PROMOS</p>
        </button>
      </div>

      <footer className="footer">
        <ul className="RedesSociales">
          <li>
            <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/Facebook.webp" alt="icono facebook" className="iconoFacebook" />
            </a>
          </li>
          <li>
            <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/Instagram.webp" alt="icono instagram" className="iconoInstagram" />
            </a>
          </li>
          <li>
            <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/Linkedin.webp" alt="icono linkedin" className="iconoLinkedin" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
