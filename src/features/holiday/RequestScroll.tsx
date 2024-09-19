import styled from 'styled-components';
import HolidayRow from './HolidayRow';
import { useUsers } from '../users/useUsers';
import { UserInfo } from '../users/types';
import { useStateApp } from '../../context/stateAppContext';
import Spinner from '../../ui/Spinner';
import { formatText } from '../../utils/helpers';
// import { HolidayInfo } from './type';
// import { useHolidays } from './useHolidays';

const RequestsContainer = styled.div`
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-200);
`;

const RequestScroll = () => {
  const { users, isPending, error } = useUsers();
  const {
    state: { queryUser },
  } = useStateApp();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // DATA SEARCH
  const dataSearch = users.filter((user: UserInfo) => {
    return (
      formatText(`${user.name} ${user.paternSurname} ${user.motherSurname}`).includes(
        queryUser
      ) || user.employNumber.includes(queryUser)
    );
  });

  return (
    <RequestsContainer>
      {dataSearch?.map((user: UserInfo) => {
        return <HolidayRow key={user.id} user={user} />;
      })}
    </RequestsContainer>
  );
};

export default RequestScroll;
