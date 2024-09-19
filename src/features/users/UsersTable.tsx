import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useUsers } from './useUsers';

import { UserInfo } from './types';
import UserRow from './userRow';
import Menus from '../../ui/Menus';
import { useStateApp } from '../../context/stateAppContext';
import { formatText } from '../../utils/helpers';

const UsersTable = () => {
  const { users, isPending, error } = useUsers();
  const {
    state: { queryUser, filterDepartment, filterEnterprise },
  } = useStateApp();

  // console.log(filterDepartment, filterEnterprise);

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // DATA SEARCH
  const dataSearch = users.filter((user: UserInfo) => {
    return (
      formatText(`${user.name} ${user.paternSurname} ${user.motherSurname}`).includes(
        queryUser
      ) || user.employNumber.includes(queryUser)
    );
  });

  // DATA FILTER
  const dataFilters = dataSearch
    .filter((user: UserInfo) => {
      const departmentId =
        typeof user.department === 'object' && user.department
          ? user.department._id || ''
          : '';

      return departmentId.includes(filterDepartment) || filterDepartment === 'all';
    })
    .filter((user: UserInfo) => {
      const enterpriseId =
        typeof user.enterprise === 'object' && user.enterprise
          ? user.enterprise._id || ''
          : '';

      return enterpriseId.includes(filterEnterprise) || filterEnterprise === 'all';
    });

  return (
    <>
      <Menus>
        <Table columns="1fr 1fr 1fr 1fr  1fr .2fr">
          <Table.Header>
            <span>N° Empleado</span>
            <span>Nombre</span>
            <span>Fecha de egreso</span>
            <span>Antiguedad</span>
            <span>Area</span>
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

export default UsersTable;
