import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContResult, Correct, Incorrect } from "../styles/resutlsStyle";

const Results = () => {
   const userLocal = JSON.parse(localStorage.getItem("user"));
   const correctas = localStorage.getItem("correctas");
   const incorrectas = localStorage.getItem("incorrectas");
   const [nuevoUser] = useState({
      id: userLocal.id,
      imagen: userLocal.imagen,
      nombre: userLocal.nombre,
      apellido: userLocal.apellido,
      correo: userLocal.correo,
      estadisticas: [
         Number(userLocal.estadisticas[0]) + (Number(correctas) + Number(incorrectas)),
         Number(userLocal.estadisticas[1]) + Number(correctas),
         Number(userLocal.estadisticas[2]) + Number(incorrectas),
      ],
   });

   const actualizar = () => {
      localStorage.setItem("user", JSON.stringify(nuevoUser));
   };

   return (
      <ContResult>
         <h1>Muchas gracias por responder!</h1>
         <div className="results-info">
            <h2>Tus resultados fueron:</h2>
            <div className="results-score">
               <span>Respuestas correctas: </span>
               <Correct>{correctas}</Correct>
            </div>
            <div className="results-score">
               <span>Respuestas incorrectas: </span>
               <Incorrect>{incorrectas}</Incorrect>
            </div>
         </div>
         <Link to="/main" className="boton" onClick={actualizar}>
            Ir a inicio
         </Link>
      </ContResult>
   );
};

export default Results;
