import styled from "styled-components";

export const StyledItemConduct = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    span {
      display: flex;
      justify-content: center;
      text-align: center;
      p {
      }
    }
  }

  article {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      width: 50%;
      background-color: red;
      img {
        height: 50px;
      }

      p {
      }
    }
  }
`;
