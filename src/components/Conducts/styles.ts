import styled from "styled-components";

export const StyledConductPanel = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 0px 20px;
  margin-top: 20px;
  padding: 10px;
  background-color: var(--light-grey);
  border-radius: 8px;

  @media screen {
    @media (max-width: 1224px) {
      flex-direction: column;
      display: flex;
      align-items: center;
    }
  }
`;
