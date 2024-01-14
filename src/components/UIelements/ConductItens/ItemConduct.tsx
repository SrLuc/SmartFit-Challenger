import * as S from "./styles";

interface ItemConductProps {
  image?: string;
  title?: string;
}

export const ItemConduct = ({ image, title }: ItemConductProps) => {
  return (
    <S.StyledItemConduct>
      <img src={image} alt="" />
      <span>{title}</span>
    </S.StyledItemConduct>
  );
};
