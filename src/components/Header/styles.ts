import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #000;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  
  img {
    width: 250px;
  }

  @media (max-width: 1000px) {
    padding: 20px 0;
  }
`;
