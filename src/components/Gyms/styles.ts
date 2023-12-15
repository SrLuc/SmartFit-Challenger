import styled from "styled-components";

export const StyledGymPanel = styled.main`
  width: 100%;
  height: 800px;
  margin: 0 70px;
  padding: 20px;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
  }
`;

export const StyledGymItem = styled.div`
  width: 30%;
  height: 100%;
  margin: 15px ;
  padding: 15px;
  border-radius: 10px;
  background-color: var(--light-grey);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25%;

    h1 {
      color: var(--dark-grey);
      font-size: 2.2rem;
    }

    p {
      color: var(--median-grey);
      text-align: justify;
      font-size: 1.5rem;
    }
  }

  hr {
    border: 1px solid var(--median-grey);
  }

  .section2 {
    height: 45%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    img{
      width: 135px;
      height: 135px;
      margin: 10px;
    }
  }

  .section3 {
    height: 25%;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
    }
  }

  @media (max-width: 1300px) {
    width: 45%;
    height: 100%;
    margin: 15px 0;
  }

  @media (max-width: 1000px) {
    width: 95%;
    height: 100%;
    margin: 15px 0;
  }
`;
