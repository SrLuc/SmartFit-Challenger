import * as S from "./styles";

export interface GymProps {
  id?: number;
  title?: string;
  content: string;
  open?: boolean;
  mask?: string | undefined;
  towel?: string | undefined;
  fountain?: string | undefined;
  locker_room?: string | undefined;
  schedules?: Schedule[];
}

interface Schedule {
  weekdays: string;
  hour: string;
}

const Gym = ({
  id,
  title,
  content: contentAdress = "",
  mask,
  towel,
  fountain,
  locker_room,
}: GymProps) => {
  return (
    <S.StyledGymItem key={id}>
      <div className="section1">
        <h2>Aberto/fechado</h2>
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
          <li>
            <h3>Dia</h3>
            <p>Horário</p>
          </li>
          <li>
            <h3>Dia</h3>
            <p>Horário</p>
          </li>
          <li>
            <h3>Dia</h3>
            <p>Horário</p>
          </li>
        </ul>
      </div>
    </S.StyledGymItem>
  );
};

export default Gym;
