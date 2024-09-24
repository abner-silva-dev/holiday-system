import styled from 'styled-components';
import HolidayRow from './HolidayRow';
import { useUsers } from '../users/useUsers';
import { UserInfo } from '../users/types';
import { useStateApp } from '../../context/stateAppContext';
import Spinner from '../../ui/Spinner';
import { formatText } from '../../utils/helpers';
// import { HolidayInfo } from './type';
// import { useHolidays } from './useHolidays';

const HolidayTableStyled = styled.div`
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-200);
`;

const HolidayTable = () => {
  const { users, isPending, error } = useUsers();
  const {
    state: { queryHoliday },
  } = useStateApp();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // DATA SEARCH
  const dataSearch = users.filter((user: UserInfo) => {
    return (
      formatText(`${user.name} ${user.paternSurname} ${user.motherSurname}`).includes(
        queryHoliday
      ) || user.employNumber.includes(queryHoliday)
    );
  });

  return (
    <HolidayTableStyled>
      {dataSearch?.map((user: UserInfo) => {
        return <HolidayRow key={user.id} user={user} />;
      })}
    </HolidayTableStyled>
  );
};

export default HolidayTable;
