import * as S from "./styles";

interface ElementConductProps {
  imageConduct?: string;
  textConduct?: string;
}

const ElementConduct = ({ imageConduct, textConduct }: ElementConductProps) => {
  return (
    <S.StyledElementConduct>
      <img src={imageConduct} alt="" />
      <p>{textConduct}</p>
    </S.StyledElementConduct>
  );
};

export default ElementConduct;
