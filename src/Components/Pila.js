import React from "react";
import PilaStyle from "../Styled/PilaStyle";

const Pila = ({ children }) => {
  return <PilaStyle>{children}</PilaStyle>;
};

export default React.memo(Pila);
