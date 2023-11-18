import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;

    p {
      padding: 0 20px;
      font-weight: bold;
      color: var(--dark-grey);
    }
  }
`;
