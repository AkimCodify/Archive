import React, { useState, useEffect, useContext } from 'react';
import { AutoContext } from '../context/AutoContextProvider';
import '../styles/QuestionItem.css'

const QuestionItem = () => {
    const { getQuestion, question } = useContext(AutoContext);
    const [error, setError] = useState(0);
    const [questionNumber, setQuestion] = useState(1);
    const [time, setTime] = useState(20 * 60);
    const [index, setIndex] = useState(0);
    const [id, setId] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [clickedRadio, setClickedRadio] = useState(false);
    const [isNext, setIsNext] = useState(false)
    const [answered, setAnswered] = useState(false)

    useEffect(() => {
        getQuestion(id);
    }, [id]);

    useEffect(() => {
        const timer = setInterval(() => {
            updateTimer(timer)
        }, 1000);
    }, []);
    

    const handleSubmit = () => {
        setAnswered(true)
        setIsNext(true)
        if (selectedAnswer.correctly) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    };

    const updateTimer = (timer) => {
        setTime((prevTime) => {
            if (prevTime <= 0) {
                clearInterval(timer);
                return 0;
            }
            return prevTime - 1;
        });
        return () => clearInterval(timer);
    }

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className='question-wrap'>
            <div className='container'>
                <div className='q-upper_info'>
                    <ul className='q-list'>
                        <li className='q-child'>Билет 1</li>
                        <div className='q-otherstats'>
                            <li className='q-child1'>Ошибки {error}</li>
                            <li className='q-child'>Вопрос {questionNumber}/20</li>
                            <li className='q-child'>Время: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</li>
                        </div>
                    </ul>
                </div>
                <div className='question-div'>
                    <div className='q-div'>
                        <p className='q-question'>{question?.question}</p>
                        {question?.image && <img src={question?.image} alt="Question Image" className='q-img' />}
                    </div>
                    <div className='q-radio_wrap'>
                        {question?.answers?.map((el, idx) => (
                            <div key={idx} className='q-radio_div'>
                                <input
                                    type="radio"
                                    name={`input-${index}`}
                                    checked={selectedAnswer?.answer === el.answer}
                                    onChange={() => {
                                        setSelectedAnswer(el)
                                        setClickedRadio(true)
                                        
                                    }}
                                />
                                <label>{el.answer}</label>
                            </div>
                        ))}
                    </div>
                        <div className="q-btn_wrap">
                            {
                                answered && isNext === true && <div>
                                        <div className='q-feedback_wrap'>
                                            <button className={selectedAnswer?.correctly ? "q-feedback_yes" : "q-feedback_no"}>{selectedAnswer?.correctly ? "Ответ Верный!" : "Не верный ответ!"}</button>
                                            <button className='q-next' onClick={(e) => {
                                                setQuestion(questionNumber + 1);
                                                setIndex(index + 1);
                                                setId(id + 1);
                                                setIsNext(false);
                                                !selectedAnswer?.correctly && setError(error + 1);
                                                setSelectedAnswer(null);
                                                setClickedRadio(false)
                                            }}>Следующий</button>
                                        </div>
                                    </div>
                            } 
                            <button 
                                onClick={handleSubmit} 
                                className='q-btn' 
                                disabled={clickedRadio && isNext === false ? false : true}
                            >
                                Отправить
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;