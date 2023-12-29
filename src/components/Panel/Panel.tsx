import * as S from "./styles";
import axios from "axios";

import Options from "../UIelements/Option/Options";
import iconHour from "../../assets/icon-hour.png";
import ClosedGym from "../UIelements/ClosedGym/ClosedGym";
import SearchButton from "../UIelements/Buttons/SearchButton";
import ClearButton from "../UIelements/Buttons/ClearButton";
import Container from "../UIelements/ContainerFlex";

import { useContext, useState } from "react";
import { GymContext } from "../../contexts";

const Panel = () => {
  const {
    gymsList,
    setGymsList,
    gymChecks,
    setGymCheck,
    morningCheckBox,
    setMorningCheckBox,
    afternoonCheckBox,
    setAfternoonCheckBox,
    nightCheckBox,
    setNightCheckBox
  } = useContext(GymContext);

  const getGyms = () => {
    const url =
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";
    axios.get(url).then((response) => {
      const locations = response.data.locations;
      setGymsList(locations);

      for (const { schedules } of gymsList) {
        if (schedules) {
          for (const { hour, weekdays } of schedules) {
            if (hour === "Fechada") {
              console.log("Fechada nos dias: " + weekdays);
            } else {
              const scheduleTimeString = hour;
              const cleanedSchedule = scheduleTimeString.replace(/\D/g, "");
              const initialHour = parseInt(cleanedSchedule.substring(0, 2), 10);
              const finalHour = parseInt(cleanedSchedule.substring(2, 4), 10);

              console.log(`${initialHour} - ${finalHour}`);

              if (
                (morningCheckBox && initialHour >= 6 && finalHour < 12) ||
                (afternoonCheckBox && initialHour >= 11 && finalHour < 19) ||
                (nightCheckBox && initialHour >= 18 && finalHour < 24)
              ) {
              }
            }
          }
        }
      }

      return false;
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
        hours="06:00/12:00"
        check={morningCheckBox}
        filterGymHours={() => setMorningCheckBox(!morningCheckBox)}
      />
      <Options
        name="Afternoon"
        hours="12:00/18:00"
        check={afternoonCheckBox}
        filterGymHours={() => setAfternoonCheckBox(!afternoonCheckBox)}
      />
      <Options
        name="Night"
        hours="18:00/00:00"
        check={nightCheckBox}
        filterGymHours={() => setNightCheckBox(!nightCheckBox)}
      />
      <ClosedGym gymAmount={gymsList.length} onChange={toggleStatusCheck} />
      <Container>
        <SearchButton onClick={getGyms} />
        <ClearButton onClick={clearGyms} />
      </Container>
    </S.StyledMain>
  );
};

export default Panel;
