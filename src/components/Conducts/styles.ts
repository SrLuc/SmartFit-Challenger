import styled from "styled-components";

export const StyledConductPanel = styled.section`

  display: flex;
  justify-content: space-around;

  margin: 20px 70px;

  @media screen {
    @media (max-width: 1224px) {
      flex-direction: column;
      display: flex;
      align-items: center;
    }
  }
`;
