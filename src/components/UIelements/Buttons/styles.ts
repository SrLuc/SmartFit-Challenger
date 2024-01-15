import styled from "styled-components";

export const StyledSearchButton = styled.button`
  width: 35%;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 9px;
  color: #000;
  background-color: #f7bc05;
  cursor: pointer;

  &:hover {
    background-color: #e7ac0f;
    transition: all 0.2s ease-in-out;
  }

  @media screen {
    @media (max-width: 768px) {
      width: 70%;
      font-size: 15px;
      padding: 20px;
    }
  }
`;

export const StyledClearButton = styled.button`
  width: 35%;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid var(--median-grey);
  border-radius: 9px;
  color: #000;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--median-grey);
    color: #fff;
    transition: all 0.1s ease-in-out;
  }

  @media screen {
    @media (max-width: 768px) {
      width: 30%;
      font-size: 15px;
      padding: 20px;
    }
  }
`;
