import * as S from "./styles";

interface OptionsProps {
  name: string;
  hour: string;
}

const Options = ({ name, hour }: OptionsProps) => {
  return (
    <S.Nav>
      <span>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">{name}</label>
      </span>
      <span>{hour}</span>
    </S.Nav>
  );
};

export default Options;
