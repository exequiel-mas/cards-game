import styled from "styled-components";

const PilaStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-width: 170px;
  color: white;
  h3 {
    font-size: 2rem;
    margin: 10px 0px;
  }
  p {
    font-size: 1.3rem;
    margin: 10px 0px 20px;
  }
  @media (max-width: 1200px) {
    min-width: 100px;
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default PilaStyle;
