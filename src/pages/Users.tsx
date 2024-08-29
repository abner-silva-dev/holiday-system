import CreateUser from '../features/users/createUser';
import UserOptions from '../features/users/userOptions';
import UsersTable from '../features/users/UsersTable';
import Row from '../ui/Row';
import Search from '../ui/Search';
import Heading from './../ui/Heading';

const User = () => {
  return (
    <>
      <Row>
        <Heading as="h1">Empleados</Heading>

        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre | N° Empleado"
            onSetQuery={() => {}}
            popUpFilter={<h1>Filtros</h1>}
          />
          <UserOptions />
        </Row>
        <UsersTable />
      </Row>
    </>
  );
};

export default User;
