import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlCSS } from "../../helpers/url";
import { Head, Options, QuestionStyle, Submit } from "../../styles/quizStyles";
import { ContenedorHead } from "../../styles/quizStyles";

const QuizCSS = () => {
   const navigate = useNavigate();

   const copiaLocal = JSON.parse(localStorage.getItem("user"));

   let [respuesta, setRespuesta] = useState();
   let [actual, setActual] = useState(0);

   const [correct, setCorrect] = useState(0);
   const [incorrect, setIncorrect] = useState(0);
   const [preguntas, setPreguntas] = useState({});
   let [pregActual, setPregActual] = useState([]);

   const [nuevoUser, setNuevoUser] = useState({
      id: copiaLocal.id,
      imagen: copiaLocal.imagen,
      nombre: copiaLocal.nombre,
      apellido: copiaLocal.apellido,
      correo: copiaLocal.correo,
      estadisticas: copiaLocal.estadisticas,
   });

   const actualizar = () => {
      setNuevoUser({
         id: copiaLocal.id,
         imagen: copiaLocal.imagen,
         nombre: copiaLocal.nombre,
         apellido: copiaLocal.apellido,
         correo: copiaLocal.correo,
         estadisticas: [correct + incorrect, correct, incorrect],
      });
   };

   const { question, a, b, c, answer } = pregActual;

   const getData = () => {
      axios
         .get(urlCSS)
         .then((response) => {
            setPreguntas(response.data);
            setPregActual(response.data[actual]);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const sumarScore = () => {
      if (respuesta === answer) {
         setCorrect((score) => score + 1);
      } else {
         setIncorrect((score) => score + 1);
      }
      setNuevoUser({
         estadisticas: [correct + incorrect, correct, incorrect],
      });
   };

   const sumar = (e) => {
      e.preventDefault();
      sumarScore();
      actualizar();
      if (actual < preguntas.length - 1) {
         setActual((actual) => actual + 1);
      } else {
         localStorage.setItem("estadisticas", nuevoUser.estadisticas);
         navigate("/results");
      }
   };

   const handleOnchange = (e) => {
      e.preventDefault();
      setRespuesta(e.target.value);
   };

   useEffect(() => {
      getData();
   }, [actual]);

   return (
      <ContenedorHead>
         <Head>
            <div className="head-bar"></div>
            <span>{incorrect}</span>
         </Head>
         <QuestionStyle>
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1645149281/images-sprint2/ni%C3%B1o_kbqsxj.png"
               alt=""
            />
            <span>{question}</span>
         </QuestionStyle>
         <Options>
            <input type="button" value={a} onClick={handleOnchange} />
            <input type="button" value={b} onClick={handleOnchange} />
            <input type="button" value={c} onClick={handleOnchange} />

            <Submit onClick={sumar}>COMPROBAR</Submit>
         </Options>
      </ContenedorHead>
   );
};

export default QuizCSS;
