import React from "react";
import styled from "styled-components";
const Maso = ({ startDrawing }) => {
  return (
    <MasoStyle onClick={() => startDrawing()}>
      <img src={require("../Images/naipe-bg.png")} alt="maso" />
    </MasoStyle>
  );
};

const MasoStyle = styled.div`
  width: 150px;
  height: 206px;
  border-radius: 10px;
  position: relative;
  margin: 10px;
  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
`;

export default Maso;
