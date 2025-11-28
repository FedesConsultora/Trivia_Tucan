// src/pages/Ofertas.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  { link: '', img: '/assets/images/ofertas/of-ban-1.png', alt: 'Oferta 1' },
  { link: '', img: '/assets/images/ofertas/of-ban-2.png', alt: 'Oferta 2' },
  { link: '', img: '/assets/images/ofertas/of-ban-3.png', alt: 'Oferta 3' },
  { link: '', img: '/assets/images/ofertas/of-ban-4.png', alt: 'Oferta 4' },
  { link: '', img: '/assets/images/ofertas/of-ban-5.png', alt: 'Oferta 5' },
  { link: '', img: '/assets/images/ofertas/of-ban-6.png', alt: 'Oferta 6' },
  { link: '', img: '/assets/images/ofertas/of-1.png', alt: 'Oferta 7' },
  { link: '', img: '/assets/images/ofertas/of-2.png', alt: 'Oferta 8' },
  { link: '', img: '/assets/images/ofertas/of-3.png', alt: 'Oferta 9' },
  { link: '', img: '/assets/images/ofertas/of-4.png', alt: 'Oferta 10' },
];

const Ofertas = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <main className="ofertas-container">
      <section className="navContainer">
        <div className='flechaYtitulo'>
            <button className="btnBack" onClick={handleBack}>
            <img src="/assets/icons/iconoAtras.png" alt="Flecha atrás" />
            </button>
            <h1>Ofertas <span>TuCan</span></h1>
        </div>
        
        
        <div className="carousel">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10} 
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="carousel-item">
                <a href={slide.link} target="_blank" rel="noreferrer">
                  <img src={slide.img} alt={slide.alt} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </section>

      {/* Footer similar al Home */}
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
    </main>
  );
};

export default Ofertas;