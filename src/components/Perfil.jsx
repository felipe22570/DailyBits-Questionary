import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContenedorPerfil } from "../styles/perfilStyle";
import Footer from "./Footer";

const Perfil = () => {
   const navigate = useNavigate();
   const [usuario, setUsuario] = useState({
      imagen: "",
      nombre: "",
      apellido: "",
      correo: "",
      estadisticas: [],
   });

   const getUser = () => {
      const buscado = JSON.parse(localStorage.getItem("user"));
      setUsuario(buscado);
   };

   const { imagen, nombre, apellido, correo } = usuario;

   const clearLocal = () => {
      localStorage.clear();
      navigate("/login");
   };

   useEffect(() => {
      getUser();
   }, []);

   return (
      <ContenedorPerfil>
         <h1>Perfil</h1>
         <div className="user">
            <img src={imagen} alt="" />
            <h3>
               {nombre} {apellido}
            </h3>
            <span>{correo}</span>
            <span className="link" onClick={clearLocal}>
               Cerrar sesión
            </span>
         </div>
         <Footer />
      </ContenedorPerfil>
   );
};

export default Perfil;
