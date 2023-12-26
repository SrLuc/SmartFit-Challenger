import * as S from "./styles";

interface OptionsProps {
  name: string;
  hours: string;
  check?: boolean | undefined;
  onChange?: () => void;
}

const Options = ({ name, hours, check, onChange }: OptionsProps) => {
  return (
    <S.Nav>
      <span>
        <input type="checkbox" checked={check} onChange={onChange} />
        <label htmlFor="">{name}</label>
      </span>
      <span>{hours}</span>
    </S.Nav>
  );
};

export default Options;
