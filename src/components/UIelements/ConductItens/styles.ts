import styled from "styled-components";

export const StyledBoxConduct = styled.section`
  width: 25%;
  display: flex;
  flex-direction: column;

  @media screen {
    @media (max-width: 1550px) {
      width: 75%;
    }
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledItemConduct = styled.section`
  img {
    width: 105px;

    @media screen {
      @media (max-width: 1224px) {
        width: 100%;
      }
    }
  }
`;

export const EspecialStyledBoxConduct = styled.section``;
