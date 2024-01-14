import * as S from "./styles";
import BoxConduct from "../UIelements/ConductItens/BoxConduct";
import { ItemConduct } from "../UIelements/ConductItens/ItemConduct";

//assets
import RequiredMask from "../../assets/required-mask.png";
import RecommendedMask from "../../assets/recommended-mask.png";
import RequiredTowel from "../../assets/required-towel.png";
import RecommendedTowel from "../../assets/recommended-towel.png";
import PartialFountain from "../../assets/partial-fountain.png";
import ForbiddenFountain from "../../assets/forbidden-fountain.png";
import RequiredLockerRoom from "../../assets/required-lockerroom.png";
import PartialLockerRoom from "../../assets/partial-lockerroom.png";
import ForbiddenLockerRoom from "../../assets/forbidden-lockerroom.png";

const Conducts = () => {
  return (
    <S.StyledConductPanel>
      <BoxConduct name="Máscara">
        <ItemConduct image={RequiredMask} title="Obrigatório" />
        <ItemConduct image={RecommendedMask} title="Recomendado" />
      </BoxConduct>
      <BoxConduct name="Toalha">
        <ItemConduct image={RequiredTowel} title="Obrigatório" />
        <ItemConduct image={RecommendedTowel} title="Recomendado" />
      </BoxConduct>
      <BoxConduct name="Bebedouro">
        <ItemConduct image={PartialFountain} title="Parcial" />
        <ItemConduct image={ForbiddenFountain} title="Proibido" />
      </BoxConduct>
      <BoxConduct name="Vestiário">
        <ItemConduct image={RequiredLockerRoom} title="Obrigatório" />
        <ItemConduct image={PartialLockerRoom} title="Parcial" />
        <ItemConduct image={ForbiddenLockerRoom} title="Proibido" />
      </BoxConduct>
    </S.StyledConductPanel>
  );
};

export default Conducts;
