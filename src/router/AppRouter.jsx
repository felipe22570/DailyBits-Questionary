import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estadisticas from "../components/Estadisticas";
import Login from "../components/Login";
import Main from "../components/Main";
import Perfil from "../components/Perfil";
import Quiz from "../components/Quiz";
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
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/main" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/results" element={<Results />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
