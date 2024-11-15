import React, { useState, useEffect, useContext } from 'react';
import { AutoContext } from '../context/AutoContextProvider';

const QuestionItem = () => {
    const { questions } = useContext(AutoContext);
    const [error, setError] = useState(0);
    const [questionNumber, setQuestion] = useState(1);
    const [time, setTime] = useState(20 * 60);
    const [index, setIndex] = useState(0);

    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer); 
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className='question-wrap'>
            <div className='container'>
                <div className='q-upper_info'>
                    <ul className='q-list'>
                        <li>Билет 1</li>
                        <li>Ошибки {error}</li>
                        <li>Вопрос {questionNumber}/20</li>
                        <li>Время: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</li>
                    </ul>
                    <div>
                        <div>
                            <p>{questions[index].question}</p>
                            <img src={questions[index].image} alt="Question Image" />
                        </div>
                        <div>
                            <input type="radio" name={`input-${index}`} onChange={(e) => {
                                
                            }}/>
                            <label>{questions[index].answer1}</label>
                            <br /><br />
                            <input type="radio" name={`input-${index}`}/>
                            <label>{questions[index].answer2}</label>
                            <br /><br />
                            <input type="radio" name={`input-${index}`}/>
                            <label>{questions[index].answer3}</label>
                        </div>
                        <button onClick={() => {
                            setIndex((prevIndex) => prevIndex + 1);
                            setQuestion(questionNumber + 1)
                        }}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;
