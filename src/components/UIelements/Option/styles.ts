import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-grey);

  span {
    display: flex;
    align-items: center;
    gap: 10px;

    input {
      appearance: none;
      background-color: #fff;
      border: 1px solid var(--dark-grey);
      border-radius: 50%;
      height: 15px;
      width: 15px;
    }

    input:checked {
      background-color: var(--yellow);
      border-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    label {
      font-weight: 300;
      font-size: 18px;
      color: var(--dark-grey);
    }
  }

  article {
    font-size: 18px;
    font-weight: 300;
    color: var(--dark-grey);
  }
`;