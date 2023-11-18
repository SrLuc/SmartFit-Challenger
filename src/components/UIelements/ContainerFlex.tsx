import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
`;

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
