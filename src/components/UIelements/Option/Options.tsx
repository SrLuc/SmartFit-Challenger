import * as S from "./styles";

interface OptionsProps {
  name: string;
  hours: string;
  check?: boolean;
  filterGymHours?: () => void;
}

const Options = ({ name, hours, check, filterGymHours }: OptionsProps) => {


  return (
    <S.Nav>
      <span>
        <input type="checkbox" checked={check} onChange={filterGymHours} />
        <label htmlFor="">{name}</label>
      </span>
      <span>{hours}</span>
    </S.Nav>
  );
};

export default Options;
