import styled from "styled-components";

export const StyledConductPanel = styled.section`
  margin: 30px 70px;
  border-radius: 8px;
  background-color: var(--light-grey);
  padding: 10px;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    background-color: transparent;

    section {
      display: flex;
      flex-direction: column;
    }

    div {
      margin: 5px 0;
      width: 100%;
      background-color: var(--light-grey);
      padding: 20px;
      border-radius: 8px;
      font-size: 18px;
    }
  }
`;

export const StyledConductTitle = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    font-size: 18px;
    font-weight: 700;
    color: var(--dark-grey);
    text-align: center;
  }

`;
