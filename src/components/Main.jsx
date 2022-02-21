import React from "react";
import { Contenedor, Titulo } from "../styles/mainStyle";
import Categorias from "./Categorias";
import Footer from "./Footer";

const Main = () => {
   return (
      <Contenedor>
         <Titulo>Practica tus conocimientos en la categoría que prefieras</Titulo>
         <Categorias />
         <Footer />
      </Contenedor>
   );
};

export default Main;
