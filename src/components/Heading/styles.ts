import styled from "styled-components";

export const StyledHeading = styled.div`
  padding: 30px 0;
  margin: 0 20px;

  @media (max-width: 1000px) {
    margin: 10px;
    padding: 5px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--dark-grey);

    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }

  hr {
    width: 10%;
    height: 15px;
    background-color: var(--dark-grey);
    border: none;
    margin-bottom: 1rem;

    @media (max-width: 1000px) {
      width: 40%;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
    margin: 25px 0;

    @media (max-width: 1000px) {
      font-size: 1.2rem;
    }
  }
`;
