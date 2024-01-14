import * as S from "./styles";
import smarfitlogo from "../../assets/smart-fit-logo.png";
interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <S.StyledFooter>
      <img src={smarfitlogo} alt="" />
      <p>© 2023. Todos os direitos reservados.</p>
    </S.StyledFooter>
  );
};

export default Footer;
