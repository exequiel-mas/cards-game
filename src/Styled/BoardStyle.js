import styled from "styled-components";

const Board = styled.div`
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  padding: 2rem;
  background-color: #4075bf;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

export default Board;
