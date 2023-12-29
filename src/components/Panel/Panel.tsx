import * as S from "./styles";
import axios from "axios";

import Options from "../UIelements/Option/Options";
import iconHour from "../../assets/icon-hour.png";
import ClosedGym from "../UIelements/ClosedGym/ClosedGym";
import SearchButton from "../UIelements/Buttons/SearchButton";
import ClearButton from "../UIelements/Buttons/ClearButton";
import Container from "../UIelements/ContainerFlex";

import { useContext, useEffect, useState } from "react";
import { GymContext } from "../../contexts";
import { GymProps } from "../Gyms/Gym";

const Panel = () => {
  const { gymsList, setGymsList, gymChecks, setGymCheck } =
    useContext(GymContext);

  const [morningCheckBox, setMorningCheckBox] = useState(false);
  const [afternoonCheckBox, setAfternoonCheckBox] = useState(false);
  const [nightCheckBox, setNightCheckBox] = useState(false);

  const getGyms = () => {
    const url =
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";
    axios.get(url).then((response) => {
      const locations = response.data.locations;
      setGymsList(locations);
    });
  };

  function teste() {
    for (const { schedules } of gymsList) {
      if (schedules) {
        for (const { hour } of schedules) {
          console.log(hour);
        }
      }
    }
  }

  useEffect(() => {
    teste();
  }, []);

  const clearGyms = () => {
    setGymsList([]);
  };

  const toggleStatusCheck = () => {
    setGymCheck({
      ...gymChecks,
      status: !gymChecks.status,
    });
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
      <Options name="Morning" hours="06:00/12:00" check={morningCheckBox} />
      <Options name="Afternoon" hours="12:00/18:00" check={afternoonCheckBox} />
      <Options name="Night" hours="18:00/00:00" check={nightCheckBox} />
      <ClosedGym gymAmount={gymsList.length} onChange={toggleStatusCheck} />
      <Container>
        <SearchButton onClick={getGyms} />
        <ClearButton onClick={clearGyms} />
      </Container>
    </S.StyledMain>
  );
};

export default Panel;
