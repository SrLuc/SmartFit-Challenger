import smartLogo from "../../assets/smart-fit-logo.png";
import * as S from "./styles";

const Header = () => {
  return (
    <S.StyledHeader>
      <a href="/">
        <img src={smartLogo} alt="Smart Fit" />
      </a>
    </S.StyledHeader>
  );
};

export default Header;
