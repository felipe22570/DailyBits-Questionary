import styled from "styled-components";

export const ContenedorSign = styled.div`
   width: 50%;
   margin: auto;
   height: 617px;
   background-color: black;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;

   img {
      width: 6rem;
      margin-top: 30px;
      margin-bottom: 20px;
   }

   .formulario {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 30px auto auto auto;
      gap: 20px;
   }

   .opcion {
      display: flex;
      flex-direction: column;
   }

   .input {
      border: none;
      height: 25px;
      border-radius: 5px;
      padding-left: 1rem;
   }

   .submitBoton {
      border: none;
      margin-top: 30px;
      height: 40px;
      color: white;
      background-color: #2cb67d;
      border-radius: 5px;
      cursor: pointer;
   }
`;
