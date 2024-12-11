import DepartmentOptions from '../../features/departments/components/DepartmentOptions';
import DepartmentTable from '../../features/departments/components/DepartmentTable';
import Heading from '../../shared/ui/Heading';
import Row from '../../shared/ui/Row';
import Search from '../../shared/ui/Search';

import { useStateApp } from '../../context/stateAppContext';

const Departments = () => {
  const { handleSearch } = useStateApp();

  return (
    <>
      <Row>
        <Heading as="h1">Departamentos</Heading>

        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre"
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
