import * as S from "./styles";

interface OptionsProps {
  name: string;
  hour: string;
  check?: boolean | undefined;
}

const Options = ({ name, hour, check }: OptionsProps) => {
  return (
    <S.Nav>
      <span>
        <input type="checkbox" checked={check} />
        <label htmlFor="">{name}</label>
      </span>
      <span>{hour}</span>
    </S.Nav>
  );
};

export default Options;
