import * as S from "./styles";
import ItemConduct from "../UIelements/ConductItens/ItemConduct";

const Conducts = () => {
  return (
    <S.StyledConductPanel>
      <S.StyledConductTitle>
        <p>Mask</p>
        <p>Towel</p>
        <p>Water Foutain</p>
        <p>Locker Room</p>
      </S.StyledConductTitle>
      <ItemConduct />
    </S.StyledConductPanel>
  );
};

export default Conducts;
