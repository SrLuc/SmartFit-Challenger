import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 20px;
  padding: 20px;
  border: 6px solid var(--light-grey);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    gap: 10px;

    img{
      width: 40px;
    }

    h3 {
      font-size: 20px;
      color: var(--median-grey);
      font-weight: 400;
    }
  }

  p {
    font-size: 30px;
    font-weight: 300;
    color: var(--median-grey);
    margin: 20px;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  };
`;
