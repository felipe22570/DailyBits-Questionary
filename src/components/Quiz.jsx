import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Head, Options, QuestionStyle, Submit } from "../styles/quizStyles";
import { ContenedorHead } from "../styles/quizStyles";
import "../styles/quiz.css";
import { urlCSS, urlHTML, urlJavascript } from "../helpers/url";

const Quiz = () => {
   const navigate = useNavigate();
   const { category } = useParams();
   let url = {};

   if (category === ":html") {
      url = urlHTML;
   } else if (category === ":css") {
      url = urlCSS;
   } else if (category === ":javascript") {
      url = urlJavascript;
   }

   let [respuesta, setRespuesta] = useState();
   let [actual, setActual] = useState(0);

   const [correct, setCorrect] = useState(0);
   const [incorrect, setIncorrect] = useState(0);
   const [preguntas, setPreguntas] = useState({});
   let [pregActual, setPregActual] = useState([]);
   let [detalleResp, setDetalleResp] = useState("");

   let [colorDiv, setColorDiv] = useState("");
   let [colorText, setColorText] = useState("");
   let [colorButton, setColorButton] = useState("");
   const [mostrar, setMostrar] = useState("hidden");

   let [progreso, setProgreso] = useState();

   const actualizar = () => {};

   const { question, a, b, c, answer } = pregActual;

   const getData = () => {
      axios
         .get(url)
         .then((response) => {
            setPreguntas(response.data);
            setPregActual(response.data[actual]);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const progress = () => {
      setProgreso((correct * 100) / preguntas.length);
   };

   const comprobar = (e) => {
      e.preventDefault();

      setMostrar("resultado");
      if (respuesta === answer) {
         setCorrect((score) => score + 1);
         setDetalleResp("¡Buen trabajo!");
         setColorDiv("#acffcf");
         setColorButton("#2cb67d");
         setColorText("black");
      } else {
         setIncorrect((score) => score + 1);
         setDetalleResp("La respuesta correcta es " + answer);
         setColorDiv("#F9CFD7");
         setColorButton("#EF4565");
         setColorText("#B81E3B");
      }
      progress();
   };

   const resultados = () => {
      localStorage.setItem("correctas", correct);
      localStorage.setItem("incorrectas", incorrect);
   };

   const sumar = (e) => {
      e.preventDefault();
      progress();
      setMostrar("hidden");

      actualizar();
      if (actual < preguntas.length - 1) {
         setActual((actual) => actual + 1);
      } else {
         resultados();
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
            <div className="head-bar">
               <div className="progreso" style={{ width: `${progreso}%` }}></div>
            </div>
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1645577203/images-sprint2/Union_fc5cij.svg"
               alt=""
            />
            <span>{correct}</span>
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

            <Submit onClick={comprobar}>COMPROBAR</Submit>
         </Options>
         <div className={mostrar} style={{ backgroundColor: colorDiv }}>
            <span style={{ color: colorText }}>{detalleResp}</span>
            <button style={{ backgroundColor: colorButton }} onClick={sumar}>
               CONTINUAR
            </button>
         </div>
      </ContenedorHead>
   );
};

export default Quiz;
