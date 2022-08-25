import React from "react";
import CardStyle from "../Styled/CardStyle";

const Card = (props) => {
  return <CardStyle found={props.found} src={props.src} index={props.index} />;
};

export default React.memo(Card);
