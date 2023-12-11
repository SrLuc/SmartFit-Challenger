import * as S from "./styles";

const Gym = ({}) => {
  return (
    <S.StyledGymItem>
      <div className="section1">
        <h2>Aberto/fechado</h2>
        <h1>Nome da Academia</h1>
        <p>Descrição do Endereço</p>
        <p>Cidade/Estado</p>
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
