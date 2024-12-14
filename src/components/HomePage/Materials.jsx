import React, { useState } from 'react';
import "../../styles/Materials.css";
import img from "../../assets/image 57.png"; 
import callImg from "../../assets/Call.png"; 

import { motion } from "framer-motion";

const Materials = () => {
 
  const [showCard, setShowCard] = useState(false);
  const handleBuyClick = () => {
    setShowCard(prevState => !prevState); 
  };

  return (
    <section id='posobie' className="materials">
      <div className="material-card">
        <img className='Uchebnoe' src={img} alt="Учебное пособие" />
        <div>
          <h1 className='posobie'>Методическое Пособие</h1>
          <p className='met'>Методическое пособие по правилам дорожного движения (ПДД) с иллюстрациями и комментариями. Методическое пособие составлено с дополнениями и пояснениями к дорожным знакам и разметкам.</p>
          
          <p className='optom'>При покупке оптом возможны скидки. За более подробной информацией обращаться к Руслану Жакшылыковичу по телефону или WhatsApp.</p>
          
          <p className='mozhete'>Вы можете приобрести данное пособие по адресу либо по звонку.</p>
          
          <div className="Adres-wrap">
            <p className='Adres'>Сухе Батора 26/1</p>
            <button 
              className='Buy' 
              onClick={handleBuyClick}
              aria-label="Купить методическое пособие"
            >
              {showCard ? 'КУПИТЬ' : 'КУПИТЬ'}
            </button>
          </div>
        </div>
      </div>

      {showCard && (
        <motion.div
          className="card-container"
          initial={{ opacity: 0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="card">
            <img className="card-image" src={callImg} alt="Изображение карточки"/>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Materials;
