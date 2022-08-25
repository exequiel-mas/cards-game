import styled from "styled-components";

const CardStyle = styled.div`
  width: 150px;
  height: 206px;
  border-radius: 10px;
  position: absolute;
  top: ${(props) => `${props.index * 40}px`};
  right: ${(props) => `${props.index * 5}px`};
  margin: 10px;
  box-shadow: 0px -8px 15px -3px rgba(0, 0, 0, 0.2);
  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
`;

export default CardStyle;
