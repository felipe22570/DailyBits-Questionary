import styled from "styled-components";

export const ContResult = styled.div`
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

   h1 {
      margin: 50px auto 10px;
      text-align: center;
   }

   .results-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 1.2rem;
      margin-top: 100px;

      margin-bottom: 100px;
      text-align: center;

      h2 {
         margin-bottom: 20px;
      }
   }

   .boton {
      color: white;
      background-color: #6b47dc;
      width: 50%;
      text-align: center;
      text-decoration: none;
      padding: 15px;
      border-radius: 10px;
   }
`;

export const Correct = styled.span`
   font-weight: 700;
   color: #2cb67d;
`;

export const Incorrect = styled.span`
   font-weight: 700;
   color: #ef4565;
`;
