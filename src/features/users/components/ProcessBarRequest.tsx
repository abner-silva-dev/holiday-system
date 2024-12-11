import React from 'react';
import styled from 'styled-components';
import { HiCheckCircle } from 'react-icons/hi2';
import { Tooltip } from 'react-tooltip'; // Ajuste de la importación

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
  $state: boolean;
  onClick: () => void;
  tooltipContent: string;
}

const PointStyled = styled.div<PropsPoint>`
  width: ${(props) => (props.$state ? '3rem' : '2.5rem')};
  height: ${(props) => (props.$state ? '3rem' : '2.5rem')};
  background-color: ${(props) => (props.$state ? '#fff' : '#ced4da')};
  margin-top: -1.1rem;
  margin-right: -0.2rem;
  border-radius: 50%;
  z-index: 99;
  position: relative;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  & svg {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    color: #087f5b;
    transition: all 0.4s ease-in-out;
  }
`;

const Point: React.FC<PropsPoint> = ({ $position, $state, onClick, tooltipContent }) => {
  return (
    <>
      <PointStyled
        $position={$position}
        $state={$state}
        onClick={onClick}
        data-tooltip-id={`tooltip-${$position}`} // Identificador único para cada tooltip
        data-tooltip-content={tooltipContent} // Texto del tooltip
      >
        {$state && <HiCheckCircle />}
      </PointStyled>
      {/* Tooltip para este punto específico */}
      <Tooltip id={`tooltip-${$position}`} place="top" content={tooltipContent} />
    </>
  );
};

type IPoint = {
  textTooltip: string;
  state: boolean;
};

interface PropsProcess {
  progress: number;
  setPage: (num: number) => void;
  points: IPoint[];
}

const ProcessBarRequest: React.FC<PropsProcess> = ({ points, progress = 1, setPage }) => {
  if (progress > points.length) throw new Error('progress must be less than numstates');
  if (progress < 0) throw new Error('progress must be greater than numstates');

  const chunkOfProgress = 100 / points.length;
  const progressBar = chunkOfProgress * progress;

  return (
    <StyledProcessBar>
      <div></div>
      <Process $state={progressBar} />
      {points.map((point, index) => {
        const i = index + 1;

        return (
          <div key={i}>
            <Point
              $position={i * chunkOfProgress}
              $state={point.state}
              onClick={() => setPage(i)}
              tooltipContent={point.textTooltip}
            />
          </div>
        );
      })}
    </StyledProcessBar>
  );
};

export default ProcessBarRequest;
