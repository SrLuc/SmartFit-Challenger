import { useContext } from "react";
import { GymContext } from "../../contexts";

import * as S from "./styles";

import Container from "../UIelements/ContainerFlex";
import Gym from "./Gym";

const Panel = () => {
  const { gymsList } = useContext(GymContext);

  return (
    <Container>
      <S.StyledGymPanel>
        {gymsList.map(({ id, title, content }) => {
          return <Gym key={id} title={title} content={content} />;
        })}
      </S.StyledGymPanel>
    </Container>
  );
};

export default Panel;
