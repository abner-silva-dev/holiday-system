import HolidayRow from './HolidayRow';
import { useUsers } from '../users/useUsers';
import { UserInfo } from '../users/types';
import { useStateApp } from '../../context/stateAppContext';
import Spinner from '../../ui/Spinner';
import { formatText } from '../../utils/helpers';
import Table from '../../ui/Table';

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
    <Table columns=".4fr .7fr 1fr 1fr  1fr 1.2fr">
      <Table.Header>
        <span></span>
        <span>N° Empleado</span>
        <span>Nombre</span>
        <span>Puesto</span>
        <span>Departamento</span>
        <span>Solicitudes</span>
      </Table.Header>
      <Table.Body
        data={dataSearch}
        render={(user: UserInfo) => <HolidayRow user={user} key={user.id} />}
      />
    </Table>
  );
};

export default HolidayTable;
