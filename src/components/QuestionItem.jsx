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
    const [stopTimer, setStopTimer] = useState(false)
    const [prevvTime, setPrevTime] = useState(null)

    useEffect(() => {
        getQuestion(id);
    }, [id]);

    useEffect(() => {
        checkTimer()
        updateTimer()
    }, [stopTimer]);
    
    const checkTimer = () => {
      if (!stopTimer) {
        return timer = setInterval(() => {
          updateTimer(timer);
        }, 1000);
    } else {
      return timer = 0
    }
    }

    const handleSubmit = () => {
        setAnswered(true)
        setIsNext(true)
        if (selectedAnswer.correctly) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }

        if (error === 2) {
          setStopTimer(true)
        }
    };

    const updateTimer = (timer) => {
        setTime((prevTime) => {
            if (prevTime <= 0) {
                clearInterval(timer);
                setStopTimer(true)
                return 0;
            }
            if (stopTimer === false) {
              return prevTime - 1;
            } else if (stopTimer === true) {
              if (prevTime !== NaN) {
                setPrevTime(prevTime)
              } else {
                return prevvTime
              }
            }
        });
    }

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let timer;

    return (
      <div className="question-wrap">
        <div className="container">
          <div className="q-upper_info">
            <ul className="q-list">
              <li className="q-child">Билет 1</li>
              <div className="q-otherstats">
                <li className="q-child1">Ошибки {error}/2</li>
                <li className="q-child">Вопрос {questionNumber}/20</li>
                <li className="q-child">
                  Время: {stopTimer ? `${Math.floor(prevvTime / 60)}:${prevvTime % 60}` : `${minutes}:${seconds}`}
                </li>
              </div>
            </ul>
          </div>
          {questionNumber !== 20 && error !== 2 && !stopTimer ? <div className="question-div">
            <div className="q-div">
              <p className="q-question">{question?.question}</p>
              {question?.image && (
                <img
                  src={question?.image}
                  alt="Question Image"
                  className="q-img"
                />
              )}
            </div>
            <div className="q-radio_wrap">
              {question?.answers?.map((el, idx) => (
                <div key={idx} className="q-radio_div">
                  <input
                    type="radio"
                    name={`input-${index}`}
                    checked={selectedAnswer?.answer === el.answer}
                    onChange={() => {
                      setSelectedAnswer(el);
                      setClickedRadio(true);
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
                                            <button className={isCorrect ? "q-feedback_yes" : "q-feedback_no"}>{isCorrect ? "Ответ Верный!" : "Не верный ответ!"}</button>
                                            <button className='q-next' onClick={(e) => {
                                                setQuestion(questionNumber + 1);
                                                setIndex(index + 1);
                                                setId(id + 1);
                                                setIsNext(false);
                                                !isCorrect && setError(error + 1);
                                                setSelectedAnswer(null);
                                                setClickedRadio(false)
                                                if (questionNumber === 19 || error === 1) {
                                                  console.log('q #20');
                                                  
                                                    setStopTimer(true)
                                                }
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
            : <div className='res-box'>
                
              </div>} </div>
        </div>
    );
};

export default QuestionItem;