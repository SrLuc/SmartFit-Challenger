import styled from "styled-components";

export const StyledSearchButton = styled.button`
  width: 50%;
  background-color: #f1f1f1;
  color: #000;
  border: none;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #ffff;
  }
`;

export const StyledClearButton = styled.button`
  width: 50%;

  background-color: #f7bc05;
  color: #000;
  border: none;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f7aa01;
  }
`;
