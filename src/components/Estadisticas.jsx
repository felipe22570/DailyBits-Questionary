import React from "react";
import { ContenedorEst } from "../styles/estadisticasStyle";
import Footer from "./Footer";

const Estadisticas = () => {
   return (
      <ContenedorEst>
         <h1>Estadisticas</h1>
         <span className="tiempo">Los últimos 7 días</span>
         <div className="box">
            <span>Tiempo de estudio (horas)</span>
            <span>1</span>
         </div>
         <div className="box">
            <span>Respuestas contestadas</span>
            <span>40</span>
         </div>
         <div className="box">
            <span>Respuestas correctas</span>
            <span>20</span>
         </div>
         <div className="box">
            <span>Respuestas incorrectas</span>
            <span>20</span>
         </div>
         <Footer />
      </ContenedorEst>
   );
};

export default Estadisticas;
