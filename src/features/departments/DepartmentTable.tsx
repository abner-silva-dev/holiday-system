import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useDepartment } from './useDepartment';

import { DepartmentInfo } from './types';
import UserRow from './userRow';
import Menus from '../../ui/Menus';
import { useStateApp } from '../../context/stateAppContext';

const DepartmentTable = () => {
  const { department, isPending, error } = useDepartment();
  const {
    state: { filterDepartment },
  } = useStateApp();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // Filter
  const dataFilters = department.filter((department: DepartmentInfo) => {
    return (
      department.name.toLowerCase().includes(filterDepartment) ||
      department.nameAbreviate.includes(filterDepartment)
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

export default DepartmentTable;
