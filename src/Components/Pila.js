import React from "react";
import styled from "styled-components";

const Pila = ({ children }) => {
  return <PilaStyle>{children}</PilaStyle>;
};

const PilaStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-width: 170px;

  h3 {
    color: white;
  }
`;

export default React.memo(Pila);
