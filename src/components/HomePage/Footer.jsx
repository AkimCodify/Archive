import React from 'react';
import Instagram from '../../assets/Social media.png'
import Whatsapp from '../../assets/Social media (1).png'
import Telegram from '../../assets/Social media (2).png'
import Logo from '../../assets/Logo (4).png'
import Phone from '../../assets/Phone.png'
import '../../styles/Footer.css'

const Footer = () => {
    return (
      <footer>
          <div className="f-div">
            <img src={Instagram} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Telegram} alt="" />
          </div>
          <div className="f-div">
            <img src={Logo} alt="" className="f-logo" />
          </div>
          <div className="f-div">
            <div>
              <img src={Phone} alt="" />
              <p className="f-phone">0552 209 809</p>
            </div>
            <p className="f-phone">0552 209 809</p>
          </div>
      </footer>
    );
};

export default Footer;