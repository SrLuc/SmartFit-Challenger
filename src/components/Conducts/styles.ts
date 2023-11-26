import styled from "styled-components";

export const StyledConductPanel = styled.section`
  height: 200px;
  margin: 10px 70px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: red;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 10px 0;
  }
`;
