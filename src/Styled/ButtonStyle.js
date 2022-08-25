import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: whitesmoke;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff1754;
    color: white;
    box-shadow: none;
  }
`;

export default Button;
