import styled from 'styled-components';
import { useHolidays } from './useHolidays';
import HolidayRow from './HolidayRow';
import { HolidayInfo } from './type';

const RequestsContainer = styled.div`
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-200);
`;

const RequestScroll = () => {
  const { holidays } = useHolidays();

  console.log(holidays);

  return (
    <RequestsContainer>
      {holidays?.map((holiday: HolidayInfo) => {
        return <HolidayRow key={holiday._id} holiday={holiday} />;
      })}
    </RequestsContainer>
  );
};

export default RequestScroll;
