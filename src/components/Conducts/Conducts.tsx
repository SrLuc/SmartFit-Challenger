import ItemConduct from "../UIelements/ItemConduct/ItemConduct";
import * as S from "./styles";

const Conducts = () => {
  return (
    <S.styledConductios>
      <section>
        <ItemConduct />
        <ItemConduct />
      </section>
      <section>
        <ItemConduct />
        <ItemConduct />
      </section>
    </S.styledConductios>
  );
};

export default Conducts;
