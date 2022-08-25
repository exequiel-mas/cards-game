import React from "react";
import MasoStyle from "../Styled/MasoStyle";

const Maso = ({ startDrawing }) => {
  return (
    <MasoStyle onClick={() => startDrawing()}>
      <img src={require("../Images/naipe-bg.png")} alt="maso" />
    </MasoStyle>
  );
};

export default React.memo(Maso);
