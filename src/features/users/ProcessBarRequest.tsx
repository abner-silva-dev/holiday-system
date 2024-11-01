import { HiCheckCircle } from 'react-icons/hi2';
import styled from 'styled-components';

const StyledProcessBar = styled.ul`
  background-color: #dee2e6;
  width: 100%;
  height: 4px;

  display: flex;
  justify-content: space-between;

  position: relative;
`;

const Process = styled.div<{ $state: number }>`
  background-color: #40c057;
  height: 4px;
  width: ${(props) => props.$state}%;
  position: absolute;

  transition: all 0.4s ease-in-out;
`;

interface PropsPoint {
  $position: number;
  $state: number;
}

const PointStyled = styled.div<PropsPoint>`
  width: ${(props) => (props.$state >= props.$position ? '3rem' : '2.5rem')};
  height: ${(props) => (props.$state >= props.$position ? '3rem' : '2.5rem')};
  background-color: ${(props) => (props.$state >= props.$position ? '#fff' : '#ced4da')};

  margin-top: -1.1rem;
  margin-right: -0.2rem;
  border-radius: 50%;
  z-index: 99;
  position: relative;

  transition: all 0.4s ease-in-out;

  & svg {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    color: #087f5b;

    transition: all 0.4s ease-in-out;
  }
`;

const Point: React.FC<PropsPoint> = ({ $position, $state }) => {
  return (
    <PointStyled $position={$position} $state={$state}>
      {$state >= $position && <HiCheckCircle />}
    </PointStyled>
  );
};

interface PropsProcess {
  numStates: number;
  progress: number;
}

const ProcessBarRequest: React.FC<PropsProcess> = ({ numStates = 1, progress = 0 }) => {
  if (progress > numStates) throw new Error('progress must be less than numstates');
  if (progress < 0) throw new Error('progress must be greater than numstates');

  const chunkOfProgress = 100 / numStates;
  const progressBar = chunkOfProgress * progress;

  return (
    <StyledProcessBar>
      <Process $state={progressBar} />
      {[...new Array(numStates + 1).fill(0)].map((_, i) =>
        i === 0 ? (
          <div></div>
        ) : (
          <Point key={i} $position={i * chunkOfProgress} $state={progressBar} />
        )
      )}
    </StyledProcessBar>
  );
};

export default ProcessBarRequest;
