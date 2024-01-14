import * as S from "./styles";

interface BoxConductProps {
  children?: React.ReactNode;
  name?: string;
}

const BoxConduct = ({ children, name }: BoxConductProps) => {
  return (
    <S.StyledBoxConduct>
      <span>{name}</span>
      <div>{children}</div>
    </S.StyledBoxConduct>
  );
};

export default BoxConduct;
