import styled from "styled-components";

const MasoStyle = styled.div`
  width: 137px;
  height: 190px;
  border-radius: 8px;
  position: relative;
  margin: 10px;
  cursor: pointer;
  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  &:hover {
    box-shadow: 0px 8px 15px -3px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 1200px) {
    transform: scale(0.8);
  }
`;

export default MasoStyle;
