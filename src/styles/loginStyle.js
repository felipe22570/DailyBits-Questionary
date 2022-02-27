import styled from "styled-components";

export const ContenedorLogin = styled.div`
   width: 50%;
   margin: auto;
   height: 100vh;
   background-color: black;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media screen and (max-width: 850px) {
      width: 80%;
   }

   @media screen and (max-width: 500px) {
      width: 100%;
   }

   img {
      width: 6rem;
      margin-top: 30px;
      margin-bottom: 30px;
   }

   .google {
      background-color: #ef4565;
      color: white;
      border: none;
      height: 40px;
      width: 90%;
      border-radius: 5px;
      font-size: 0.9rem;
      margin-top: 30px;
      margin-bottom: 20px;
   }

   hr {
      background-color: white;
      color: white;
      margin-bottom: 20px;
      width: 90%;
      opacity: 0.5;
   }

   .correo {
      width: 90%;
   }

   form {
      width: 90%;
      input {
         border: none;
         height: 40px;
         width: 100%;
         padding-left: 10px;
         margin-top: 5px;
         margin-bottom: 30px;
      }
   }

   .forgot {
      color: #2cb67d;
      margin-bottom: 30px;
   }

   .sign {
      color: #2cb67d;
      text-decoration: none;
   }
`;
