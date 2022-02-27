import styled from "styled-components";

export const ContCategorias = styled.div`
   justify-content: center;
   align-items: center;
   width: 90%;
   margin: auto;
   margin-top: 15px;
   display: flex;
   flex-direction: column;
   gap: 10px;

   @media screen and (max-width: 850px) {
      width: 80%;
   }

   @media screen and (max-width: 500px) {
      width: 100%;
   }

   .categorias-link {
      background-color: white;
      padding: 2% 5% 1% 2%;
      border-radius: 100%;

      img {
         width: 90%;
         border: 15px solid black;
         border-radius: 100%;
      }
   }
`;
