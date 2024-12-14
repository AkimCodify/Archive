import React from 'react';
import '../../styles/DrivingSchool.css';
import img1 from "../../assets/Group 33.png";
import img2 from "../../assets/Group 34.png";
import img5 from "../../assets/Vector.png";
import { useNavigate } from 'react-router-dom';

const DrivingSchool = () => {
    const Navigate = useNavigate()
    return (
        <section className='DrivingSchool'>
            <h1>Жакшы Жол</h1>
            <p className='safeToDrive'>Научитесь водить правильно и безопасно вместе с опытным <br /> <span>инструктором по вождению</span></p>
            <div className='practice'>
                <h2>Практическое вождение авто с инструктором:</h2>
                <div className='school'>
                <img src={img1} alt="" />
                <div>
                <p>Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола Бишкека обучают вождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz
                (коробка автомат). </p>
                <br />
                <p className='buy'>Стоимость практики можно узнать у инструктора по телефону или по <br />
                    <a href="https://Wa.me/+996552209809" className='whatsapp-link'><img src={img5} alt="" className='whatsapp-img'/>WhatsApp</a>
                </p>
                </div>
                </div>
            </div>

            <div className='practiceTest' id='test'>
                <h2>Пройти пробный тест</h2>
                <div className='test'>
                <img src={img2} alt="" />
                <div>
                <p>Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД </p> 
                <button onClick={() => {
                    Navigate('/test')
                }}>Пройти тест</button> 
                </div>              
                </div>
            </div>
        </section>
    );
};

export default DrivingSchool;