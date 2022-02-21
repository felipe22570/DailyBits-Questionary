import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { fileUpload } from "../helpers/fileUpload";
import { urlUser } from "../helpers/url";
import { ContenedorSign } from "../styles/signupStyle";

const SignUp = () => {
   const [user, setUser] = useState({
      id: "",
      imagen: "",
      nombre: "",
      apellido: "",
      correo: "",
      estadisticas: [],
   });

   const { imagen, nombre, apellido, correo } = user;

   const handleOnchange = ({ target }) => {
      setUser({
         ...user,
         [target.name]: target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      fileUpload(file)
         .then((response) => {
            user.imagen = response;
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const postData = () => {
      axios
         .post(urlUser, user)
         .then((response) => {
            console.log(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <ContenedorSign>
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1645149281/images-sprint2/daily-bits_jkomlx.png"
            alt=""
         />
         <h1>Registrate</h1>
         <Form className="formulario" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 opcion" controlId="formBasicEmail">
               <Form.Label>Correo:</Form.Label>
               <Form.Control
                  className="input"
                  type="email"
                  name="correo"
                  onChange={handleOnchange}
                  value={correo}
                  placeholder="Ingresa tu correo"
               />
            </Form.Group>
            <Form.Group className="mb-3 opcion" controlId="formBasicEmail">
               <Form.Label>Nombre:</Form.Label>
               <Form.Control
                  className="input"
                  type="text"
                  name="nombre"
                  onChange={handleOnchange}
                  value={nombre}
                  placeholder="Ingresa tu nombre"
               />
            </Form.Group>
            <Form.Group className="mb-3 opcion" controlId="formBasicEmail">
               <Form.Label>Apellido:</Form.Label>
               <Form.Control
                  className="input"
                  type="text"
                  name="apellido"
                  onChange={handleOnchange}
                  value={apellido}
                  placeholder="Ingresa tu apellido"
               />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 opcion">
               <Form.Label>Imagen:</Form.Label>
               <Form.Control name="imagen" onChange={handleFileChange} value={imagen} type="file" />
            </Form.Group>

            <Button className="submitBoton" onClick={postData}>
               Enviar
            </Button>
         </Form>
      </ContenedorSign>
   );
};

export default SignUp;
