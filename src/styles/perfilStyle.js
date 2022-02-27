import styled from "styled-components";

export const ContenedorPerfil = styled.div`
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
      margin: 15px 0 0 10px;
   }

   .user {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 30px auto 0 auto;
      align-items: center;
      gap: 10px;

      img {
         width: 5rem;
      }

      .link {
         margin-top: 20px;
         text-decoration: none;
         color: #ef4565;
         cursor: pointer;
      }
   }
`;
