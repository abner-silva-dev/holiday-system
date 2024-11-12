import styled from 'styled-components';
import RequestVacation from '../features/holiday/RequestVacation';
import { useHolidays } from '../features/holiday/useHolidays';
import { HolidayInfo } from '../features/holiday/type';
import { Link } from 'react-router-dom';
import ContentEmpty from './ContentEmpty';
import { getStatusHoliday } from '../utils/holidayUtils';
import { Spinner } from 'react-bootstrap';
import { useOutsideClick } from '../hooks/useOutsideClick';

const FloatFeatStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 2.4rem; */
  position: absolute;
  top: 6.2rem;
  right: 8.5rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
  border-radius: 9px;
  height: 45rem;
  width: 40rem;
  z-index: 999;
  cursor: auto;
`;

const FloatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

const FloatTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
`;

const GoTo = styled.div``;

const Main = styled.main`
  background-color: var(--color-grey-50);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 1.8rem;
  border-top: 1px solid var(--color-grey-300);
  border-bottom: 1px solid var(--color-grey-300);
`;

const LinkShowMore = styled(Link)`
  display: flex;
  justify-content: center;
  transition: all 0.1s;
  margin: 2rem 0;

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-red-800);
    border-radius: var(--border-radius-sm);
  }

  &:hover {
    color: var(--color-red-800);
  }
`;

interface PropsFloatFeat {
  onClose: () => void;
}

const FloatFeat: React.FC<PropsFloatFeat> = ({ onClose }) => {
  const { holidays, isPending } = useHolidays();

  const { pendingHolidays } = getStatusHoliday(holidays);

  const ref = useOutsideClick<HTMLDivElement>(onClose);

  const holidaysFilter = pendingHolidays.sort((a: HolidayInfo, b: HolidayInfo) => {
    if (a.createdAt && b.createdAt)
      if (a?.createdAt > b?.createdAt) return -1;
      else if (a.createdAt < b.createdAt) return 1;
    return 0;
  });

  if (isPending) return <Spinner />;
  const isEmpty = holidaysFilter?.length === 0;

  return (
    <FloatFeatStyled ref={ref}>
      <FloatHeader>
        <FloatTitle>Notificaciones</FloatTitle>
      </FloatHeader>
      <Main>
        {holidaysFilter?.map((holiday: HolidayInfo) => (
          <RequestVacation key={holiday._id} holiday={holiday} onClose={onClose} />
        ))}

        {isEmpty && <ContentEmpty $size="small" />}
      </Main>

      <GoTo>
        <LinkShowMore to="holidays" onClick={onClose}>
          Ver Más
        </LinkShowMore>
      </GoTo>
    </FloatFeatStyled>
  );
};

export default FloatFeat;
