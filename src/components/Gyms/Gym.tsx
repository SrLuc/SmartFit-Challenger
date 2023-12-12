import * as S from "./styles";

export interface GymProps {
  id?: number;
  title?: string;
  content: string;
  open?: boolean;
  mask?: MaskAvailability;
  towel?: TowelAvailability;
  fountain?: FountainAvailability;
  lockerRoom?: LockerRoomAvailability;
  schedules?: Schedule[];
}

interface Schedule {
  weekdays: string;
  hour: string;
}

enum MaskAvailability {
  Required = "required",
  Recommended = "recommended",
}

enum TowelAvailability {
  Required = "required",
  Recommended = "recommended",
}

enum FountainAvailability {
  Partial = "partial",
  NotAllowed = "not_allowed",
}

enum LockerRoomAvailability {
  Partial = "partial",
  Allowed = "allowed",
  NotAllowed = "not_allowed",
}

const Gym = ({ id, title, content: contentAdress = "" }: GymProps) => {
  return (
    <S.StyledGymItem key={id}>
      <div className="section1">
        <h2>Aberto/fechado</h2>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentAdress }} />
      </div>
      <hr />
      <div className="section2">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
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
