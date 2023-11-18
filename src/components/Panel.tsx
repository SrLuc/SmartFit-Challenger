import styled from "styled-components";
import Options from "./UIelements/Options";
import iconHour from "../assets/icon-hour.png";

const Main = styled.main`
  margin: 0 70px 30px 70px;
  padding: 10px;
  border: 4px solid var(--light-grey);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    padding: 25px;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    h3 {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    border-bottom: 1px solid var(--light-grey);
    padding: 0 5px;
    padding-bottom: 10px;
  }
`;

const Panel = () => {
  return (
    <Main>
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
    </Main>
  );
};

export default Panel;
