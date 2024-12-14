import React from 'react';
import '../../styles/HeroSection.css';
import carPhoto from "../../assets/image 5.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Персональные уроки по вождению</h1>
        <p>
          Практические занятия дают 80% результата в обучении. Обучайтесь
          правильно и выгодно!
        </p>
        <p>Получите полную консультацию по звонку!</p>
        <div className="contact-options">
          <button className="whatsapp-button">
            <a href="https://Wa.me/+996552209809" target='blank' className='hero-link'>Whatsapp</a>
          </button>
          <span className="phone-number">0552 209 809</span>
        </div>
        <div className="work-schedule">
          <p>График работы: ПН-ВС; 09:00-18:00</p>
          <p></p>
        </div>
      </div>
      <div className="hero-image">
        <img src={carPhoto} alt="Учебный автомобиль" />
      </div>
    </section>
  );
};

export default HeroSection;
