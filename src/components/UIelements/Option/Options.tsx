import * as S from "./styles";

interface OptionsProps {
  name: string;
  hour: string;
  check?: boolean | undefined;
  onclick?: () => void;
}

const Options = ({ name, hour, check, onclick }: OptionsProps) => {
  return (
    <S.Nav>
      <span>
        <input type="checkbox" checked={check} onClick={onclick} />
        <label htmlFor="">{name}</label>
      </span>
      <span>{hour}</span>
    </S.Nav>
  );
};

export default Options;
