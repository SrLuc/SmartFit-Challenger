import * as S from "./styles";

interface ClosedGymProps {
  check?: boolean;
  gymAmount?: number;
  onChange?: () => void;
}

const ClosedGym = ({ check, gymAmount, onChange }: ClosedGymProps) => {
  return (
    <S.Section>
      <div>
        <input type="checkbox" checked={check} onChange={onChange} />
        <label htmlFor="">View Closed Units</label>
      </div>
      <div>
        <p>Results Found:{gymAmount}</p>
      </div>
    </S.Section>
  );
};

export default ClosedGym;
