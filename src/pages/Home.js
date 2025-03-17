// src/pages/Home.js
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { saveUTMs } from '../services/api';

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');
    const utm_term = searchParams.get('utm_term');
    const utm_content = searchParams.get('utm_content');

    if (utm_source && utm_medium && utm_campaign) {
      const utms = { utm_source, utm_medium, utm_campaign, utm_term, utm_content };
      saveUTMs(utms)
        .then(res => console.log("UTMs guardados:", res))
        .catch(err => console.error("Error guardando UTMs:", err));
    }
  }, [searchParams]);

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
            <a href="https://www.facebook.com/tucansuperdemascotas" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/Facebook.webp" alt="icono facebook" className="iconoFacebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tucansuperdemascotas/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/Instagram.webp" alt="icono instagram" className="iconoInstagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/tucan-super-de-mascotas/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/LinkedIn.webp" alt="icono linkedin" className="iconoLinkedin" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
