import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useDepartments } from './useDepartment';

import { DepartmentInfo } from './types';
import DepartmentRow from './DepartmentRow';

import Menus from '../../ui/Menus';
import { useStateApp } from '../../context/stateAppContext';

const DepartmentTable = () => {
  const { departments, isPending, error } = useDepartments();
  const {
    state: { filterDepartment },
  } = useStateApp();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // Filter
  const dataFilters = departments.filter((department: DepartmentInfo) => {
    return (
      department.name.toLowerCase().includes(filterDepartment) ||
      department.nameAbreviate.includes(filterDepartment)
    );
  });

  return (
    <>
      <Menus>
        <Table columns="1fr 1fr 1fr .2fr">
          <Table.Header>
            <span>Nombre</span>
            <span>Abreviación</span>
            <span>Empresa Asociada</span>
            <span></span>
          </Table.Header>
          <Table.Body
            data={dataFilters}
            render={(department: DepartmentInfo) => (
              <DepartmentRow department={department} key={department.id} />
            )}
          ></Table.Body>
        </Table>
      </Menus>
    </>
  );
};

export default DepartmentTable;
