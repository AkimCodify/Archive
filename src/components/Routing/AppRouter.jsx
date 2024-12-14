import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import QuestionPage from "../../pages/QuestionPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<QuestionPage />} />
    </Routes>
  );
};

export default AppRouter;
