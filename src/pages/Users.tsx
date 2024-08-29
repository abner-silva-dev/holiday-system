import CreateUser from '../features/users/createUser';
import UsersTable from '../features/users/UsersTable';
import Row from '../ui/Row';
import Search from '../ui/Search';
import Heading from './../ui/Heading';

const User = () => {
  return (
    <>
      <Row>
        <Heading as="h1">Empleados</Heading>
        <Search
          width="60%"
          placeholder="Buscar por: nombre | N° Empleado"
          onSetQuery={() => {}}
          popUpFilter={<h1>Filtros</h1>}
        />
        <UsersTable />
        <CreateUser />
      </Row>
    </>
  );
};

export default User;
