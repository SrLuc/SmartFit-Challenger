import * as S from "./styles";

export interface GymProps {
  id?: number;
  opened?: boolean | undefined;
  title?: string;
  content: string;
  open?: boolean;
  mask?: string | undefined;
  towel?: string | undefined;
  fountain?: string | undefined;
  locker_room?: string | undefined;
  schedules?: Schedule[] | undefined;
}

interface Schedule {
  weekdays: string;
  hour: string;
}

const Gym = ({
  id,
  opened,
  title,
  content: contentAdress = "",
  mask,
  towel,
  fountain,
  locker_room,
  schedules,
}: GymProps) => {
  return (
    <S.StyledGymItem key={id}>
      <div className="section1">
        <S.StyledGymStatus text={opened}>
          {opened == true ? "Aberto" : "Fechado"}
        </S.StyledGymStatus>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: contentAdress }}></p>
      </div>
      <hr />
      <div className="section2">
        <img src={mask} alt="Mask" />
        <img src={towel} alt="Towel" />
        <img src={fountain} alt="Water Fountain" />
        <img src={locker_room} alt="Locker Room" />
      </div>
      <div className="section3">
        <ul>
          {schedules?.map(({ weekdays, hour }) => {
            return (
              <S.StyledGymSchedule>
                <h3>{weekdays}</h3>
                <p>{hour}</p>
              </S.StyledGymSchedule>
            );
          })}
        </ul>
      </div>
    </S.StyledGymItem>
  );
};

export default Gym;
