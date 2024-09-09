import DepartmentOptions from '../features/departments/DepartmentOptions';
import DepartmentTable from '../features/departments/DepartmentTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Search from '../ui/Search';

import { useStateApp } from '../context/stateAppContext';

const Departments = () => {
  const { handleSearch } = useStateApp();

  return (
    <>
      <Row>
        <Heading as="h1">Departamentos</Heading>

        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre | Abreviación"
            onSetQuery={(query) => handleSearch('department', query)}
          />
          <DepartmentOptions />
        </Row>
        <DepartmentTable />
      </Row>
    </>
  );
};

export default Departments;
