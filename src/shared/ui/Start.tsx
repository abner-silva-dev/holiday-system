import styled from 'styled-components';
import { useStateApp } from '../../context/stateAppContext';
import { HolidayInfo } from '../../features/holiday/type';
import { UserInfo } from '../../features/users/types';

interface PropsStats {
  $selected: boolean;
}

const StyledStat = styled.div<PropsStats>`
  /* Box */
  position: relative;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  ${(props) =>
    props.$selected
      ? 'border-bottom: 3px solid #862e9c;'
      : 'border-bottom: 3px solid transparent;'};
  border-radius: var(--border-radius-md);
  padding: 2rem 1.6rem;
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
  font-size: 1.2rem;
  border-bottom-left-radius: 9px;
  border-top-right-radius: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  user-select: none;
`;

const Expiration = styled.span`
  font-size: 1.3rem;
  color: var(--color-redesp);
  display: flex;
  gap: 0.7rem;
  grid-column: 2/-1;
  font-weight: 600;

  & span {
    font-weight: 700;
  }
`;

interface Props {
  icon: JSX.Element;
  title: string;
  value: string;
  color: string;
  periodName?: 'past' | 'present' | 'future';
  expiration?: string;
}

function Stat({ icon, title, value, color, periodName, expiration }: Props) {
  const {
    state: { period },
  } = useStateApp();

  const hasPeriod = periodName === period;

  const formatExpirationDate = new Date(expiration + '');
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <StyledStat $selected={hasPeriod}>
      {hasPeriod && <Tag>Actual</Tag>}
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
      {periodName === 'past' && (
        <Expiration>
          Expiración: <span>{formatDate(formatExpirationDate) + ''}</span>
        </Expiration>
      )}
    </StyledStat>
  );
}

export default Stat;
