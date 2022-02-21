import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estadisticas from "../components/Estadisticas";
import Login from "../components/Login";
import Main from "../components/Main";
import Perfil from "../components/Perfil";
import QuizCSS from "../components/quiz/QuizCSS";
import QuizHTML from "../components/quiz/QuizHTML";
import QuizJavascript from "../components/quiz/QuizJavascript";
import Results from "../components/Results";
import SignUp from "../components/SignUp";
import "../styles/app.css";

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/html" element={<QuizHTML />} />
            <Route path="/css" element={<QuizCSS />} />
            <Route path="/javascript" element={<QuizJavascript />} />
            <Route path="/main" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/results" element={<Results />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
