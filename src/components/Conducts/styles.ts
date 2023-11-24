import styled from "styled-components";

export const styledConductios = styled.main`
  display: flex;
  margin: 20px 105px;
  //alterar dps
  height: 250px;
  padding: 20px;
  border: 4px solid var(--light-grey);
  border-radius: 8px;
  background-color: var(--light-grey);
  flex-wrap: wrap;

  section {
    width: 50%;
    background-color: var(--dark-grey);
    display: flex;
  }

  @media (max-width: 800px) {
    section {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;
