import React from 'react';
import '../../styles/Header.css';
import img from "../../assets/Frame 26.png";

const Header = () => {
  return (
    <header className="header">
      <img src={img} alt="" />
      <nav className="navigation">
        <a href="#test">Тест</a>   
        <a href="#stata">Статьи</a>
        <a href="#posobie">Методическое пособие</a>
        <a href="#oboMne">Обо мне</a>
      </nav>
    </header>
  );
};

export default Header;
