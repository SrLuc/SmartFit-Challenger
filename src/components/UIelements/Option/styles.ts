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
    font-size: 24px;
    color: var(--median-grey);

    input {
      appearance: none;
      background-color: #fff;
      border: 3px solid var(--median-grey);
      border-radius: 50%;
      height: 25px;
      width:25px;
    }

    input:checked {
      background-color: var(--yellow);
      border-color: var(--median-grey);
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    label {
      font-weight: 300;
      font-size: 24px;
      color: var(--median-grey);
    }
  }

  article {
    font-size: 18px;
    font-weight: 300;
    color: var(--dark-grey);
  }
`;