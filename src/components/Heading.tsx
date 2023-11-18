import styled from "styled-components";

const Section = styled.section`
  padding: 70px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--dark-grey);
  }

  hr {
    width: 30%;
    height: 15px;
    background-color: var(--dark-grey);
    border: none;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Heading = () => {
  return (
    <Section>
      <h1>
        REABERTURA <br /> SMART FIT
      </h1>

      <hr />

      <p>
        O horário de funcionamento das nossas unidades está seguindo os decretos
        de cada município. Por isso, confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo.
      </p>
    </Section>
  );
};

export default Heading;
