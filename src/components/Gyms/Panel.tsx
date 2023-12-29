import { useContext } from "react";
import { GymContext } from "../../contexts";
import { GymProps } from "./Gym";

import requiredMask from "../../assets/required-mask.png";
import recommendedMask from "../../assets/recommended-mask.png";
import requiredTowel from "../../assets/required-towel.png";
import recommendedTowel from "../../assets/recommended-towel.png";
import partialFountain from "../../assets/partial-fountain.png";
import forbiddenFountain from "../../assets/forbidden-fountain.png";
import requiredLockerRoom from "../../assets/required-lockerroom.png";
import partialLockerRoom from "../../assets/partial-lockerroom.png";
import forbiddenLockerRoom from "../../assets/forbidden-lockerroom.png";

import * as S from "./styles";

import Container from "../UIelements/ContainerFlex";
import Gym from "./Gym";

const Panel = () => {
  const {
    gymsList,
    gymChecks,
    morningCheckBox,
    afternoonCheckBox,
    nightCheckBox,
  } = useContext(GymContext);

  return (
    <Container>
      <S.StyledGymPanel>
        {gymsList.map(
          ({
            id,
            title,
            content,
            mask,
            towel,
            fountain,
            locker_room,
            opened,
            schedules,
          }: GymProps) => {
            if (opened == true) {
              return (
                <Gym
                  key={id}
                  schedules={schedules}
                  opened={opened}
                  title={title}
                  content={content}
                  mask={mask == "required" ? requiredMask : recommendedMask}
                  towel={towel == "required" ? requiredTowel : recommendedTowel}
                  fountain={
                    fountain == "partial" ? partialFountain : forbiddenFountain
                  }
                  locker_room={
                    locker_room == "allowed"
                      ? requiredLockerRoom
                      : locker_room == "partial"
                      ? partialLockerRoom
                      : forbiddenLockerRoom
                  }
                />
              );
            }
            if (gymChecks.status == true) {
              return (
                <Gym
                  key={id}
                  schedules={schedules}
                  opened={opened}
                  title={title}
                  content={content}
                  mask={mask == "required" ? requiredMask : recommendedMask}
                  towel={towel == "required" ? requiredTowel : recommendedTowel}
                  fountain={
                    fountain == "partial" ? partialFountain : forbiddenFountain
                  }
                  locker_room={
                    locker_room == "allowed"
                      ? requiredLockerRoom
                      : locker_room == "partial"
                      ? partialLockerRoom
                      : forbiddenLockerRoom
                  }
                />
              );
            }
          }
        )}
      </S.StyledGymPanel>
    </Container>
  );
};

export default Panel;
