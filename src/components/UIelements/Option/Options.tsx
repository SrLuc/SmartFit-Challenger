import * as S from "./styles";

interface OptionsProps {
  name: string;
  hour: string;
  check?: boolean | undefined;
  onChange?: () => void;
}

const Options = ({ name, hour, check, onChange }: OptionsProps) => {
  return (
    <S.Nav>
      <span>
        <input type="checkbox" checked={check} onChange={onChange} />
        <label htmlFor="">{name}</label>
      </span>
      <span>{hour}</span>
    </S.Nav>
  );
};

export default Options;
