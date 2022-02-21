import styled from "styled-components";

export const ContenedorHead = styled.div`
   width: 50%;
   margin: auto;
   height: 617px;
   background-color: black;
   color: white;
   display: flex;
   flex-direction: column;
`;

export const Head = styled.div`
   display: flex;
   width: 90%;
   margin: auto;
   gap: 7%;

   .head-bar {
      background-color: white;
      width: 80%;
      height: 20px;
      border-radius: 25px;
   }
`;

export const QuestionStyle = styled.div`
   display: flex;
   width: 90%;
   margin: auto;
   gap: 10px;
   align-items: center;

   img {
      width: 15%;
   }

   span {
      font-size: 1.5rem;
   }
`;

export const Options = styled.form`
   display: flex;
   flex-direction: column;
   width: 90%;
   margin: auto;
   gap: 10px;

   input {
      background-color: #72757e;
      border: 3px solid white;
      border-radius: 5px;
      height: 40px;
      color: white;
      font-size: 1rem;
      text-align: start;
      padding-left: 3%;
      font-weight: 200;
      cursor: pointer;

      &:focus {
         border: 3px solid #2cb67d;
      }
   }
`;

export const Submit = styled.button`
   margin-top: 40px;
   background-color: #7f5af0;
   border: none;
   height: 50px;
   color: white;
   border-radius: 15px;
   cursor: pointer;
`;
