import React, { useState, useEffect, useContext } from 'react';
import { AutoContext } from '../context/AutoContextProvider';

const QuestionItem = () => {
    const { getQuestion, question } = useContext(AutoContext);
    const [error, setError] = useState(0);
    const [questionNumber, setQuestion] = useState(1);
    const [time, setTime] = useState(20 * 60);
    const [index, setIndex] = useState(0);
    const [id, setId] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);  // Для хранения выбранного ответа
    const [isCorrect, setIsCorrect] = useState(null);  // Для проверки правильности ответа
    const [answered, setAnswered] = useState(false);  // Флаг, чтобы показать результат только после нажатия кнопки

    // Загружаем вопрос
    useEffect(() => {
        getQuestion(id);
    }, [id]);

    // Таймер
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

    // Функция для обработки выбора ответа
    const handleAnswerChange = (answer) => {
        setSelectedAnswer(answer);
    };

    // Функция для обработки нажатия кнопки "Отправить"
    const handleSubmit = () => {
        setAnswered(true);
        // Проверяем правильность ответа
        if (selectedAnswer && selectedAnswer.correctly) {
            setIsCorrect(true);  // Ответ правильный
        } else {
            setIsCorrect(false);  // Ответ неправильный
        }
    };

    // Минуты и секунды для отображения таймера
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
                                    checked={selectedAnswer?.answer === el.answer}  // Устанавливаем checked, если выбранный ответ совпадает с текущим
                                    onChange={() => handleAnswerChange(el)}  // Обрабатываем выбор ответа
                                />
                                <label>{el.answer}</label>
                            </div>
                        ))}
                    </div>
                    {answered && (
                        <div className="answer-feedback">
                            {isCorrect ? (
                                <div className='q-feedback_wrap'>
                                    <button className='q-feedback_yes'>Ответ Верный!</button>
                                    <button className='q-next' onClick={(e) => {
                                        setQuestion(questionNumber + 1)
                                        setIndex(index + 1)
                                        setId(id + 1)
                                        setSelectedAnswer(null)
                                    }}>Следующий</button>
                                </div>
                            ) : (
                                <div className='q-feedback_wrap'>
                                    <button className='q-feedback_no'>Не верный ответ!</button>
                                    <button className='q-next' onClick={(e) => {
                                        setQuestion(questionNumber + 1)
                                        setIndex(index + 1)
                                        setId(id + 1)
                                        setError(error + 1)
                                    }}>Следующий</button>
                                </div>
                            )}
                        </div>
                    )}
                    <button 
                        onClick={handleSubmit} 
                        className='q-btn' 
                        disabled={!selectedAnswer}  // Если ответ не выбран, кнопка будет отключена
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;
