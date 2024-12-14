import React, { useState, useEffect, useContext } from 'react';
import { AutoContext } from '../context/AutoContextProvider';
import '../styles/QuestionPage.css'
import FailImg from '../assets/Frame (3).png'
import Homeimg from '../assets/Frame (4).png'
import RepeatImg from '../assets/Frame (5).png'
import PassImg from '../assets/Smile.png'
import { useNavigate } from 'react-router-dom';



const QuestionPage = () => {
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
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false)
    const Navigate = useNavigate()

    useEffect(() => {
        getQuestion(id);
    }, [id]);

    useEffect(() => {
      if (!stopTimer && !allQuestionsAnswered) {
        checkTimer()
      }
      return () => clearInterval(timer)
    }, [stopTimer, allQuestionsAnswered]);

    useEffect(() => {
      if (error === 2) {
        setStopTimer(true)
      } else if (questionNumber === 20) {
        setAllQuestionsAnswered(true)
      }
    }, [error, questionNumber])
    
    const checkTimer = () => {
      if (!stopTimer && !allQuestionsAnswered) {
        timer = setInterval(() => {
          updateTimer();
        }, 1000);
    } else {
      clearInterval(timer)
    }
    }

    const handleSubmit = () => {
        setAnswered(true)
        setIsNext(true)
        if (selectedAnswer?.correctly) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
        if (questionNumber === 20) {
          setAllQuestionsAnswered(true);
          setStopTimer(true);
        }
    };


    const updateTimer = () => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setStopTimer(true);
          return 0;
        } else if (stopTimer || allQuestionsAnswered) {
          clearInterval(timer);
          return prevTime;
        }
        return prevTime - 1;
      });
    };

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let timer
    const stoppedSeconds = time % 60
    const stoppedMinutes = Math.floor(time / 60);

    return (
      <div className="question-wrap">
        <div className="container">
          <div className="q-upper_info">
            <div className="q-list">
              <p className="q-child">Билет 1</p>
              <div className="q-otherstats">
                <p className="q-child1">Ошибки {error}/2</p>
                <p className="q-child">Вопрос {questionNumber}/20</p>
                <p className="q-child">
                  Время: {""}
                  {stopTimer
                    ? `${
                        stoppedMinutes < 10
                          ? `0${stoppedMinutes}`
                          : stoppedMinutes
                      }:${
                        stoppedSeconds < 10
                          ? `0${stoppedSeconds}`
                          : stoppedSeconds
                      }`
                    : `${minutes < 10 ? `0${minutes}` : minutes}:${
                        seconds < 10 ? `0${seconds}` : seconds
                      }`}
                </p>
              </div>
            </div>
          </div>
          {questionNumber !== 20 && error !== 2 && !stopTimer ? (
            <div className="question-div">
              <div className="q-div">
                <p className="q-question">{question?.question}</p>
                {question?.image &&
                  (questionNumber === 8 ? (
                    <img
                      src={question?.image}
                      alt="Question Image"
                      className="q-img1"
                    />
                  ) : questionNumber === 16 ? (
                    <img
                      src={question?.image}
                      alt="Question Image"
                      className="q-img2"
                    />
                  ) : (
                    <img
                      src={question?.image}
                      alt="Question Image"
                      className="q-img"
                    />
                  ))}
              </div>
              <div className="q-radio_wrap">
                {question?.answers?.map((el, idx) => (
                  <div key={idx} className="q-radio_div">
                    <input
                      type="radio"
                      name={`input-${index}`}
                      className="q-radio"
                      checked={selectedAnswer?.answer === el.answer}
                      onChange={() => {
                        setSelectedAnswer(el);
                        setClickedRadio(true);
                      }}
                    />
                    <label className="q-ans">{el.answer}</label>
                  </div>
                ))}
              </div>
              {isNext && <p className="q-expl">{question?.explanation}</p>}
              <div className="q-btn_wrap">
                {answered && isNext === true && (
                  <div>
                    <div className="q-feedback_wrap">
                      <button
                        className={
                          isCorrect ? "q-feedback_yes" : "q-feedback_no"
                        }
                      >
                        {isCorrect ? "Ответ Верный!" : "Не верный ответ!"}
                      </button>
                      <button
                        className="q-next"
                        onClick={() => {
                          if (questionNumber !== 20) {
                            setId(id + 1);
                            setIndex(index + 1);
                            setIsNext(false);
                            setIsCorrect(null);
                            !isCorrect && setError(error + 1);
                            setSelectedAnswer(null);
                            setClickedRadio(false);
                            setQuestion(questionNumber + 1);
                          } else {
                            setIndex(index + 1);
                            setIsNext(false);
                            setIsCorrect(null);
                            !isCorrect && setError(error + 1);
                            setSelectedAnswer(null);
                            setClickedRadio(false);
                          }
                        }}
                      >
                        Следующий
                      </button>
                    </div>
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  className="q-btn"
                  disabled={clickedRadio && isNext === false ? false : true}
                >
                  Отправить
                </button>
              </div>
            </div>
          ) : error === 2 || stopTimer === true ? (
            <div className="fail-box">
              <div className="f-box_upper">
                <img src={FailImg} alt="fail-img" className="f-fail_img" />
                <h2 className="f-text">Тест не пройден!</h2>
              </div>
              <div className="f-results_box">
                <p className="f-results_child">Билет {""} 1</p>
                <p className="f-results_child">
                  Время: {""}
                  {`${minutes < 10 ? `0${minutes}` : minutes}:${
                    seconds < 10 ? `0${seconds}` : seconds
                  }`}
                </p>
                <p className="f-results_child">Вопрос {questionNumber}/20</p>
                <p className="f-results_child1">Ошибки {error}/2</p>
              </div>
              <div className="btn-box">
                <button
                  className="home-btn"
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  На главную <img src={Homeimg} alt="Home img" />
                </button>
                <button
                  className="tryagain-btn"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Повторить <img src={RepeatImg} alt="repeat img" />
                </button>
              </div>
            </div>
          ) : (
            <div className="pass-box">
              <div className="p-box_upper">
                <img className="p-pass_img" src={PassImg} alt="Smile img" />
                <h2 className="p-text">Тест пройден!</h2>
              </div>
              <div className="p-results_box">
                <p className="p-results_child">Билет 1</p>
                <p className="p-results_child">
                  Время: {""}
                  {`${minutes < 10 ? `0${minutes}` : minutes}:${
                    seconds < 10 ? `0${seconds}` : seconds
                  }`}
                </p>
                <p className="p-results_child">Вопрос 20/20</p>
                <p className="p-results_child1">Ошибки {error}/2</p>
              </div>
              <div className="btn-box">
                <button
                  className="home-btn"
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  На главную <img src={Homeimg} alt="Home img" />
                </button>
                <button
                  className="tryagain-btn"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Повторить <img src={RepeatImg} alt="repeat img" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default QuestionPage;