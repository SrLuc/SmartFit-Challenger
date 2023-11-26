import * as S from "./styles";
import ElementConduct from "./ElementConduct";
import requiredMask from "../../../assets/required-mask.png";
import recommendedMask from "../../../assets/recommended-mask.png";
import requiredTowel from "../../../assets/required-towel.png";
import recommendedTowel from "../../../assets/recommended-towel.png";
import partialWaterFoutain from "../../../assets/partial-fountain.png";
import forbiddenWaterFoutain from "../../../assets/forbidden-fountain.png";
import requiredLockerRoom from "../../../assets/required-lockerroom.png";
import partialLockerRoom from "../../../assets/partial-lockerroom.png";
import forbiddenLockerRoom from "../../../assets/forbidden-lockerroom.png";

const ItemConduct = ({}) => {
  return (
    <S.StyledItemConduct>
      <ElementConduct textConduct="Required" imageConduct={requiredMask} />

      <ElementConduct
        textConduct="Recommended"
        imageConduct={recommendedMask}
      />

      <ElementConduct textConduct="Required" imageConduct={requiredTowel} />

      <ElementConduct
        textConduct="Recommended"
        imageConduct={recommendedTowel}
      />

      <ElementConduct
        textConduct="Partial"
        imageConduct={partialWaterFoutain}
      />
      <ElementConduct
        textConduct="Forbidden"
        imageConduct={forbiddenWaterFoutain}
      />

      <ElementConduct
        textConduct="Required"
        imageConduct={requiredLockerRoom}
      />

      <ElementConduct textConduct="Partial" imageConduct={partialLockerRoom} />

      <ElementConduct
        textConduct="Forbidden"
        imageConduct={forbiddenLockerRoom}
      />
    </S.StyledItemConduct>
  );
};

export default ItemConduct;
