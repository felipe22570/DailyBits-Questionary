import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlUser } from "../helpers/url";
import { ContenedorLogin } from "../styles/loginStyle";

import "../styles/app.css";

const Login = () => {
   const navigate = useNavigate();
   const [intro, setIntro] = useState("mostrarIntro");
   const [email, setEmail] = useState({
      id: "",
      correo: "",
   });
   const [datos, setDatos] = useState([]);

   const { correo } = email;

   const getData = () => {
      axios
         .get(urlUser)
         .then((response) => {
            setDatos(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleOnchange = ({ target }) => {
      setEmail({
         ...email,
         [target.name]: target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const [buscado] = datos.filter((u) => u.correo === correo);

      if (buscado !== undefined) {
         localStorage.setItem("user", JSON.stringify(buscado));
         navigate("/main");
      } else {
         alert("Usuario no encontrado");
      }
   };

   useEffect(() => {
      getData();
      setTimeout(() => {
         setIntro("ocultarIntro");
      }, 3000);
   }, []);

   return (
      <ContenedorLogin>
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1645149281/images-sprint2/daily-bits_jkomlx.png"
            alt=""
         />
         <h1>Iniciar sesión</h1>
         <button className="google">Continuar con Google</button>
         <hr />
         <span className="correo">Correo electrónico</span>
         <form onSubmit={handleSubmit}>
            <input
               type="email"
               name="correo"
               id=""
               onChange={handleOnchange}
               value={correo}
               placeholder="Ingrese su correo electrónico"
            />
         </form>
         <Link to="/" className="forgot">
            ¿Se te olvidó tu contraseña?
         </Link>
         <span>
            Aún no tienes una cuenta?{" "}
            <Link to="/signup" className="sign">
               Inscribirse
            </Link>
         </span>

         <div className={intro}>
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1645149281/images-sprint2/daily-bits_jkomlx.png"
               alt=""
            />
         </div>
      </ContenedorLogin>
   );
};

export default Login;
