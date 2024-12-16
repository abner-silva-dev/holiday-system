import Spinner from '../../../shared/ui/Spinner';
import Table from '../../../shared/ui/Table';
import { useDepartments } from './../hooks/useDepartment';

import { DepartmentInfo } from './../types';
import DepartmentRow from './DepartmentRow';

import Menus from '../../../shared/ui/Menus';
import { useStateApp } from '../../../context/stateAppContext';
import { formatText } from '../../../shared/utils/helpers';

const DepartmentTable = () => {
  const { departments, isPending, error } = useDepartments();
  const {
    state: { queryDepartment },
  } = useStateApp();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // SEARCH
  // DATA SEARCH
  const dataSearch = departments.filter((department: DepartmentInfo) => {
    return formatText(`${department.name}`).includes(queryDepartment);
  });

  return (
    <>
      <Menus>
        <Table columns="1fr 1fr 1fr .2fr">
          <Table.Header>
            <span>Nombre</span>
            <span>Abreviatura</span>
            <span>Empresa Asociada</span>
            <span></span>
          </Table.Header>
          <Table.Body
            data={dataSearch}
            render={(department: DepartmentInfo) => (
              <DepartmentRow department={department} key={department._id} />
            )}
          ></Table.Body>
        </Table>
      </Menus>
    </>
  );
};

export default DepartmentTable;
