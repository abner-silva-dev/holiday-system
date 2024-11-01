import styled from 'styled-components';

const StyledProcessBar = styled.ul`
  background-color: #dee2e6;
  width: 100%;
  height: 4px;

  display: flex;
  justify-content: space-between;

  position: relative;
`;

const Process = styled.div`
  background-color: red;
  height: 2px;
  width: 33%;
  position: absolute;
`;

const Point = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #ced4da;

  margin-top: -1rem;
  border-radius: 50%;
  z-index: 99;
`;

interface PropsProcess {
  numStates: number;
}

const ProcessBarRequest: React.FC<PropsProcess> = ({ numStates = 2 }) => {
  return (
    <StyledProcessBar>
      <Process />
      {[...new Array(numStates + 1).fill(0)].map(() => (
        <Point />
      ))}
      {/* <Point></Point>
      <Point></Point>
      <Point></Point>
      <Point></Point> */}
    </StyledProcessBar>
  );
};

export default ProcessBarRequest;
