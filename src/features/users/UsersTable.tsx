import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useUsers } from './useUser';

import { UserInfo } from './types';
import UserRow from './userRow';
import Menus from '../../ui/Menus';

const UsersTable = () => {
  const { users, isPending, error } = useUsers();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

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
            data={users}
            render={(user: UserInfo) => <UserRow user={user} key={user.id} />}
          ></Table.Body>
        </Table>
      </Menus>
    </>
  );
};

export default UsersTable;
