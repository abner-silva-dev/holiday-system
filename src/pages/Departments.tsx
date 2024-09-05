import DepartmentOptions from '../features/departments/DepartmentOptions';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Search from '../ui/Search';

const Departments = () => {
  return (
    <>
      <Row>
        <Heading as="h1">Empleados</Heading>

        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre | N° Empleado"
            onSetQuery={handleSearch}
            popUpFilter={<FilterUser />}
          />
          <DepartmentOptions />
        </Row>
        <UsersTable />
      </Row>
    </>
  );
};

export default Departments;
