import React from "react";
import { ContenedorEst } from "../styles/estadisticasStyle";
import Footer from "./Footer";

const Estadisticas = () => {
   const user = JSON.parse(localStorage.getItem("user"));

   return (
      <ContenedorEst>
         <h1>Estadisticas</h1>
         <span className="tiempo">Los últimos 7 días</span>
         <div className="box">
            <span>Respuestas contestadas</span>
            <span>{user.estadisticas[0]}</span>
         </div>
         <div className="box">
            <span>Respuestas correctas</span>
            <span>{user.estadisticas[1]}</span>
         </div>
         <div className="box">
            <span>Respuestas incorrectas</span>
            <span>{user.estadisticas[2]}</span>
         </div>
         <Footer />
      </ContenedorEst>
   );
};

export default Estadisticas;
