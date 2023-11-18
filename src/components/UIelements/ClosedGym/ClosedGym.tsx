import * as S from "./styles";

interface ClosedGymProps {
  check?: boolean;
}

const ClosedGym = ({ check }: ClosedGymProps) => {
  return (
    <S.Section>
      <div>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">View Closed Units</label>
      </div>
      <div>
        <p>Results Found:0</p>
      </div>
    </S.Section>
  );
};

export default ClosedGym;
