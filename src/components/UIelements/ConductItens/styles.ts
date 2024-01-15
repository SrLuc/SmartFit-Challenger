import styled from "styled-components";

export const StyledBoxConduct = styled.section`
  width: 25%;
  display: flex;
  flex-direction: column;

  @media screen {
    @media (max-width: 1500px) {
      width: 85%;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    @media screen {
      @media (max-width: 1224px) {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        border-radius: 10px;
        padding: 10px;
      }
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 10px;
    color: var(--dark-grey);
  }
`;

export const StyledItemConduct = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90px;

    @media screen {
      @media (max-width: 1224px) {
        width: 75%;
        margin: 0 10px;
      }
    }
  }

  p {
    text-align: center;
    font-size: 1.2rem;

    @media screen {
      @media (max-width: 1224px) {
        font-size: 1rem;
      }
    }
  }
`;
