import styled from "styled-components";

export const Contenedor = styled.div`
   width: 50%;
   margin: auto;
   height: 100vh;
   background-color: black;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;

   @media screen and (max-width: 850px) {
      width: 80%;
   }

   @media screen and (max-width: 500px) {
      width: 100%;
   }
`;

export const Titulo = styled.span`
   font-size: 1.3rem;
   margin-top: 20px;
`;
