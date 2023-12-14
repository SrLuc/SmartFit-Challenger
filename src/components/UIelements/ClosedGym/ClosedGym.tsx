import * as S from "./styles";

interface ClosedGymProps {
  check?: boolean;
  gymsNumber?: number;
}

const ClosedGym = ({ check, gymsNumber }: ClosedGymProps) => {
  return (
    <S.Section>
      <div>
        <input type="checkbox" />
        <label htmlFor="">View Closed Units</label>
      </div>
      <div>
        <p>Results Found:{gymsNumber}</p>
      </div>
    </S.Section>
  );
};

export default ClosedGym;
