import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useUsers } from './useUser';

import { UserInfo } from './types';
import UserRow from './userRow';
import Menus from '../../ui/Menus';
import { useStateApp } from '../../context/stateAppContext';

const UsersTable = () => {
  const { users, isPending, error } = useUsers();
  const {
    state: { filterUser },
  } = useStateApp();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // Filter
  const dataFilters = users.filter((user: UserInfo) => {
    return (
      user.name.toLowerCase().includes(filterUser) ||
      user.employNumber.includes(filterUser)
    );
  });

  return (
    <>
      <Menus>
        <Table columns="1fr 1fr 1fr 1fr  1fr .2fr">
          <Table.Header>
            <span>Status</span>
            <span>N° Empleado</span>
            <span>Nombre</span>
            <span>Fecha de egreso</span>
            <span>Antiguedad</span>
            <span></span>
          </Table.Header>
          <Table.Body
            data={dataFilters}
            render={(user: UserInfo) => <UserRow user={user} key={user.id} />}
          ></Table.Body>
        </Table>
      </Menus>
    </>
  );
};

export default UsersTable;
