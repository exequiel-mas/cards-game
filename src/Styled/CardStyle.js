import styled from "styled-components";

const CardStyle = styled.div`
  width: 137px;
  height: 190px;
  border-radius: 8px;
  position: absolute;
  top: ${(props) => `${props.index * 35}px`};
  right: ${(props) => `${props.index * 5}px`};
  margin: 10px;
  box-shadow: 0px -8px 15px -3px rgba(0, 0, 0, 0.2);
  background: ${(props) =>
    props.found
      ? `linear-gradient(
    0deg,
    rgba(66, 179, 245, 0.5) 0%,
    rgba(66, 179, 245, 0.5) 100%),url('${props.src}')`
      : "url('" + props.src + "')"};

  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1200px) {
    transform: scale(0.8);
  }
`;

export default CardStyle;
