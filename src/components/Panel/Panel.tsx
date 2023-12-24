import * as S from "./styles";
import axios from "axios";

import Options from "../UIelements/Option/Options";
import iconHour from "../../assets/icon-hour.png";
import ClosedGym from "../UIelements/ClosedGym/ClosedGym";
import SearchButton from "../UIelements/Buttons/SearchButton";
import ClearButton from "../UIelements/Buttons/ClearButton";
import Container from "../UIelements/ContainerFlex";

import { useContext } from "react";
import { GymContext } from "../../contexts";

const Panel = () => {
  const { gymsList, setGymsList } = useContext(GymContext);
  const { gymChecks, setGymCheck } = useContext(GymContext);

  const getGyms = () => {
    const url =
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";
    axios.get(url).then((response) => {
      const locations = response.data.locations;
      setGymsList(locations);

       
    });
  };

  const clearGyms = () => {
    setGymsList([]);
  };

  const toggleStatusCheck = () => {
    setGymCheck({
      ...gymChecks,
      status: !gymChecks.status,
    });
  };

  const weekdays = {
    toggleMorningCheck: function () {},

    toggleAfternoonCheck: function () {},

    toggleNightCheck: function () {},
  };

  return (
    <S.StyledMain>
      <section>
        <i>
          <img src={iconHour} alt="Cronogram" />
        </i>
        <h3>Time</h3>
      </section>
      <p>What time do you want to train?</p>
      <Options
        name="Morning"
        hour="06:00/12:00"
        onChange={weekdays.toggleMorningCheck}
      />
      <Options
        name="Afternoon"
        hour="12:00/18:00"
        onChange={weekdays.toggleAfternoonCheck}
      />
      <Options
        name="Night"
        hour="18:00/00:00"
        onChange={weekdays.toggleNightCheck}
      />
      <ClosedGym
        gymAmount={gymsList.length}
        check={gymChecks?.status}
        onChange={toggleStatusCheck}
      />
      <Container>
        <SearchButton onClick={getGyms} />
        <ClearButton onClick={clearGyms} />
      </Container>
    </S.StyledMain>
  );
};

export default Panel;
