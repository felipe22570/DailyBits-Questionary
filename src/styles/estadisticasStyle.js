import styled from "styled-components";

export const ContenedorEst = styled.div`
   width: 50%;
   margin: auto;
   height: 100vh;
   background-color: black;
   color: white;
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 850px) {
      width: 80%;
   }

   @media screen and (max-width: 500px) {
      width: 100%;
   }

   h1 {
      margin: 15px 0 20px 5%;
   }

   .tiempo {
      width: 90%;
      margin: 0 auto 30px auto;
   }

   .box {
      display: flex;
      justify-content: space-around;
      width: 80%;
      margin: 10px auto 0 auto;
      border: 2px solid white;
      padding: 10px;
      border-radius: 10px;
   }
`;
