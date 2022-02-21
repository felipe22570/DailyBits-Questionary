import React from "react";
import { Link } from "react-router-dom";
import { ContCategorias } from "../styles/categoriasStyle";

const Categorias = () => {
   return (
      <ContCategorias>
         <Link to="/html" className="categorias-link">
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1645064319/images-sprint2/html_brbvka.png"
               alt=""
            />
         </Link>
         <Link to="/css" className="categorias-link">
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1645064319/images-sprint2/css_xn7itj.png"
               alt=""
            />
         </Link>
         <Link to="/javascript" className="categorias-link">
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1645064319/images-sprint2/javascript_v2lnyn.png"
               alt=""
            />
         </Link>
      </ContCategorias>
   );
};

export default Categorias;
