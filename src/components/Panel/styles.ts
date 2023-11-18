import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 70px 30px 70px;
  padding: 10px;
  border: 4px solid var(--light-grey);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    padding: 25px;
    align-items: center;
    gap: 24px;

    h3 {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    padding: 0 5px;
    padding-bottom: 10px;
  }
`;
