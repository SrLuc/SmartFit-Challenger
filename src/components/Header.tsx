import smartLogo from "../assets/smart-fit-logo.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <a href="/">
        <img src={smartLogo} alt="Smart Fit" />
      </a>
    </StyledHeader>
  );
};

export default Header;
