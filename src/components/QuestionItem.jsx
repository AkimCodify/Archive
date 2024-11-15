import React, { useState } from 'react';

const QuestionItem = ({question}) => {
    const [error, setError] = useState(0)
    const [questionNumber, setQuestion] = useState(1)
    const [seconds, setSeconds] = useState(00)
    const [minutes, setMinutes] = useState(20)
    const [time, setTime] = useState(minutes * 60)
    setInterval(updateTimer, 2000)
    const updateTimer = () => {
        setMinutes(Math.floor(time / 60))
        setSeconds(time % 60)
        setSeconds(seconds < 10 ? 0 + seconds : seconds)
        setTime(time - 1)
    }
    return (
        <div className='container'>
            <div>
                <ul className='q-list'>
                    <li>Билет 1</li>
                    <li>Ошибки {error}</li>
                    <li>Вопрос {questionNumber}/20</li>
                    <li>Время: {minutes}:{seconds}</li>
                </ul>
                <div>
                    <div>
                        <p>{question.question}</p>
                        <img src={question.image} alt="Question Image" />
                    </div>
                    <div>
                        <input type="radio" />
                        <label></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;