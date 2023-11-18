import * as S from "./styles";
import Options from "../UIelements/Option/Options";
import iconHour from "../../assets/icon-hour.png";
import ClosedGym from "../UIelements/ClosedGym/ClosedGym";
import SearchButton from "../UIelements/Buttons/SearchButton";
import ClearButton from "../UIelements/Buttons/ClearButton";
import Container from "../UIelements/ContainerFlex";

const Panel = () => {
  return (
    <S.StyledMain>
      <section>
        <i>
          <img src={iconHour} alt="Cronogram" />
        </i>
        <h3>Time</h3>
      </section>
      <p>What time do you want to train?</p>
      <Options name="Morning" hour="06:00/12:00" />
      <Options name="Afternoon" hour="12:00/18:00" />
      <Options name="Night" hour="18:00/00:00" />
      <ClosedGym check={false} />
      <Container>
        <SearchButton />
        <ClearButton />
      </Container>
    </S.StyledMain>
  );
};

export default Panel;
