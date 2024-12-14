import React from 'react';
import img from "../../assets/Rectangle 23.png";
import "../../styles/insruktorProfile.css";

const InstructorProfile = () => {
  return (
    <section id='oboMne' className="instructor-profile">
      <img src={img} alt="Instructor" className="instructor-photo" />
      <div className="profile-info">
        <h2>Руслан Жакшылыкович</h2>
        <br />
        <p>Инструктор по вождению более 5 лет.</p>
        <br />
        <p>
          Омурбеков Руслан Жакшылыкович. Водительский стаж более 25 лет. Опыт
          преподавания и инструкторский стаж более 12 лет. Индивидуально
          подготовил практическому вождению 1500+ за 6 лет преподавания в
          автошколе выпустил более 1600+ студентов. Во время преподавания ПДД в
          автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана
          от 5.02.2022 года. Отталкиваясь от этих ошибок, составил свою
          методическое пособие по ПДД.
        </p>
      </div>
    </section>
  );
};

export default InstructorProfile;
