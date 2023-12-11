import * as S from "./styles";
import Container from "../UIelements/ContainerFlex";
import Gym from "./Gym";

const Panel = ({}) => {
  return (
    <Container>
      <S.StyledGymPanel>
        <Gym />
        <Gym />
        <Gym />
      </S.StyledGymPanel>
    </Container>
  );
};

export default Panel;
