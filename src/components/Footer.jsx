import { Link } from "react-router-dom";
import { ContFooter } from "../styles/footerStyle";
import "../styles/footer.css";

import React, { Component } from "react";

export default class Footer extends Component {
   render() {
      return (
         <ContFooter>
            <Link to="/main" className="footer-link">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1645060659/images-sprint2/Union_xxeci0.svg"
                  alt=""
               />
               <span>Home</span>
            </Link>
            <Link to="/estadisticas" className="footer-link">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1645060660/images-sprint2/estadisticas_v2ehaf.svg"
                  alt=""
               />
               <span>Estadisticas</span>
            </Link>
            <Link to="/perfil" className="footer-link">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1645060659/images-sprint2/perfil_pbg04u.svg"
                  alt=""
               />
               <span>Perfil</span>
            </Link>
         </ContFooter>
      );
   }
}
