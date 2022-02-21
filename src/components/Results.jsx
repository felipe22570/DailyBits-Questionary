import React from "react";
import { Link } from "react-router-dom";
import { ContResult, Correct, Incorrect } from "../styles/resutlsStyle";

const Results = ({ respcorrect, respincorrect }) => {
   console.log(respcorrect);
   return (
      <ContResult>
         <h1>Muchas gracias por responder!</h1>
         <div className="results-info">
            <h2>Tus resultados fueron:</h2>
            <div className="results-score">
               <span>Respuestas correctas: </span>
               <Correct>{respcorrect}</Correct>
            </div>
            <div className="results-score">
               <span>Respuestas incorrectas: </span>
               <Incorrect>{respincorrect}</Incorrect>
            </div>
         </div>
         <Link to="/main" className="boton">
            Ir a inicio
         </Link>
      </ContResult>
   );
};

export default Results;
