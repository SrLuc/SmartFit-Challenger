import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    gap: 10px;

    label {
      font-size: 17px;
      font-weight: 400;
      color: var(--dark-grey);
    }

    input {
      width: 35px;
      height: 35px;
    }

    p {
      font-size: 18px;
      color: var(--dark-grey);

      span {
        font-weight: bold;
        margin: 6px;
      }
    }

    @media screen {
      @media (max-width: 768px) {
        label {
          font-size: 15px;
        }
        input {
          width: 40px;
          height: 40px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;
