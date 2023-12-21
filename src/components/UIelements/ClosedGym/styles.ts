import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  
  
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;

    input{
      width: 25px;
      height: 25px;
    }


    p {
      font-weight: bold;
      color: var(--dark-grey);
    }
  }
`;
