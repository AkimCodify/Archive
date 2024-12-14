import axios from "axios";
import { createContext, useReducer } from "react";
import React from "react";

export const AutoContext = createContext(null);

const INITIAL_STATE = {
  question: {},
  news: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TEST_DATA":
      return {...state, question: action.payload}
    case "GET_USEFUL_ARTICLES_DATA":
      return {...state, news: action.payload}
    default:
      return state;
  }
};

const AutoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const getQuestion = async (id) => {
    const {data} = await axios.get(`https://codify-graduation-project.vercel.app/test/${id}`)    
    dispatch({
      type: "GET_TEST_DATA",
      payload: data
    })
  }
  const getUsefulArticles = async () => {
    const { data } = await axios.get(
      `https://codify-graduation-project.vercel.app/news`
    );
    dispatch({
      type: "GET_USEFUL_ARTICLES_DATA",
      payload: data
    })
  }
  return (
    <AutoContext.Provider
      value={{
        question: state.question,
        news: state.news,
        getUsefulArticles: getUsefulArticles,
        getQuestion: getQuestion
      }}
    >
      {children}
    </AutoContext.Provider>
  );
};

export default AutoContextProvider;
