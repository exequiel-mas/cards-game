import React from "react";
import CardStyle from "../Styled/CardStyle";

const Card = (props) => {
  return (
    <CardStyle index={props.index}>
      <img src={props.src} alt={props.alt} />
    </CardStyle>
  );
};

export default React.memo(Card);
