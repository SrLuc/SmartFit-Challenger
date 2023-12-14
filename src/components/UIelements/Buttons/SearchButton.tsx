import * as S from "./styles";

interface SearchButtonProps {
  onClick?: () => void;
}

const SearchButton = ({onClick}: SearchButtonProps) => {
  return <S.StyledSearchButton onClick={onClick}>Search Gyns</S.StyledSearchButton>;
};

export default SearchButton;
