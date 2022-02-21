import styled from "styled-components";

export const ContCategorias = styled.div`
   justify-content: center;
   align-items: center;
   width: 90%;
   margin: auto;
   margin-top: 150px;
   display: flex;
   gap: 5%;

   .categorias-link {
      background-color: white;
      padding: 10px;
      padding-bottom: 5px;
      border-radius: 100%;

      img {
         width: 100px;
         border: 15px solid black;
         border-radius: 100%;
         padding: 0;
         margin: 0;
      }
   }
`;
