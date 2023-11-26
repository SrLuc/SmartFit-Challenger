import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 70px;
  padding: 20px;
  border: 4px solid var(--light-grey);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    gap: 24px;

    h3 {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    padding: 5px 10px;
  }
`;
