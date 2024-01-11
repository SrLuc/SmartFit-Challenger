import * as S from "./styles";

interface SearchButtonProps {
  onClick?: () => void;
}

const SearchButton = ({onClick}: SearchButtonProps) => {
  return <S.StyledSearchButton onClick={onClick}>ENCONTRAR UNIDADE</S.StyledSearchButton>;
};

export default SearchButton;
