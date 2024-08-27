import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useUsers } from './useUser';

const UsersTable = () => {
  const { users, isPending, error } = useUsers();

  console.log(isPending);
  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  console.log(users);

  return (
    <>
      <Table columns="1fr 1fr 1fr 1fr">
        <Table.Header>
          <span>N° Empleado</span>
          <span>Nombre</span>
          <span>Fecha de egreso</span>
          <span>Antiguedad</span>
        </Table.Header>
        <Table.Body
          data={users}
          render={(user: {
            employNumber: string;
            id: string;
            name: string;
            dateHiring: string;
            seniority: number;
          }) => (
            <Table.Row key={user.id}>
              <span>{user.employNumber}</span>
              <span>{user.name}</span>
              <span>{user.dateHiring}</span>
              <span>{user.seniority}</span>
            </Table.Row>
          )}
        ></Table.Body>
      </Table>
    </>
  );
};

export default UsersTable;
