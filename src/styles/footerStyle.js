import styled from "styled-components";

export const ContFooter = styled.div`
   background-color: #232e35;
   width: 50%;
   margin: auto;
   height: 70px;
   position: absolute;
   bottom: 0;
   display: flex;
   justify-content: space-around;
   align-items: center;

   @media screen and (max-width: 850px) {
      width: 80%;
   }

   @media screen and (max-width: 500px) {
      width: 100%;
   }
`;
