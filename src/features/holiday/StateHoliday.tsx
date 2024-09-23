import styled from 'styled-components';
import { StateAutorization } from './type';

const colors = {
  rejected: '#f03e3e',
  approved: '#37b24d',
  pending: '#868e96',
};

const stateNames = {
  rejected: 'Rechazado',
  approved: 'Aprobado',
  pending: 'Pendiente',
};

interface PropsStateColor {
  $state: StateAutorization;
}

const StateColor = styled.div<PropsStateColor>`
  background-color: ${(props) => colors[props.$state]};
  padding: 1.6rem;
  height: 0.6rem;
  width: 0.6rem;
  align-self: center;
  border-radius: 3px;
`;

const StateHolidayStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StateHoliday = ({ state = 'pending' }: { state: StateAutorization }) => {
  return (
    <StateHolidayStyled>
      <StateColor $state={state} />
      <span>{stateNames[state]}</span>
    </StateHolidayStyled>
  );
};

export default StateHoliday;
