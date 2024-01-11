import * as S from "./styles";

interface ClearButtonProps {
  onClick?: () => void;
}

const ClearButton = ({ onClick }: ClearButtonProps) => {
  return <S.StyledClearButton onClick={onClick}>LIMPAR</S.StyledClearButton>;
};

export default ClearButton;
