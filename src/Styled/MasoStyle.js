import styled from "styled-components";

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
  &:hover {
    box-shadow: 0px 8px 15px -3px rgba(255, 255, 255, 0.5);
  }
`;

export default MasoStyle;
