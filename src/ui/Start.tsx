import styled from 'styled-components';
import { useStateApp } from '../context/stateAppContext';

interface PropsStats {
  $selected: boolean;
}

const StyledStat = styled.div<PropsStats>`
  /* Box */
  position: relative;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  ${(props) => (props.$selected ? 'border-bottom: 3px solid #862e9c;' : '')};
  border-radius: var(--border-radius-md);
  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const Value = styled.p`
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 500;
`;

const Tag = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #862e9c;
  color: #fff;
  padding: 0.2rem 0.6rem;
  font-size: 1.4rem;
  border-bottom-left-radius: 9px;
  border-top-right-radius: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  user-select: none;
`;

interface Props {
  icon: JSX.Element;
  title: string;
  value: string;
  color: string;
  periodName?: 'past' | 'present' | 'future';
}

function Stat({ icon, title, value, color, periodName }: Props) {
  const {
    state: { period },
  } = useStateApp();

  const hasPeriod = periodName === period;

  return (
    <StyledStat $selected={hasPeriod}>
      {hasPeriod && <Tag>Actual</Tag>}
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
