import styled from "styled-components";

export const StyledConductPanel = styled.section`
  margin: 10px 70px;
  border-radius: 8px;
  background-color: var(--light-grey);

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    margin: 10px 70px;
    background-color: transparent;

    section {
      display: flex;
      flex-direction: column;
    }

    div {
      margin: 20px 0;
      width: 100%;
      background-color: var(--light-grey);
      padding: 10px;
      border-radius: 8px;
      
    }
  }
`;
