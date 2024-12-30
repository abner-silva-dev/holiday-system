import Spinner from '../../../shared/ui/Spinner';
import Table from '../../../shared/ui/Table';
import { useUsers } from '../hooks/useUsers';

import { UserInfo } from '../types';
import UserRow from './userRow';
import Menus from '../../../shared/ui/Menus';
import { formatText } from '../../../shared/utils/helpers';
import { useStateApp } from '../../../context/stateAppContext';
import { useEffect } from 'react';

const UsersTable = () => {
  const { users, isPending, error } = useUsers();
  const {
    state: { queryUser, filterDepartment, filterEnterprise },
    handleFilter,
  } = useStateApp();

  useEffect(() => {
    handleFilter('department', 'all');
    handleFilter('enterprise', 'all');
  }, []);

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;
  // DATA SEARCH
  const dataSearch = users.filter((user: UserInfo) => {
    return (
      formatText(`${user.name} ${user.paternSurname} ${user.motherSurname}`).includes(
        queryUser
      ) || user?.employNumber?.includes(queryUser)
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
            <span>Fecha de ingreso</span>
            <span>Antigüedad</span>
            <span>Departamento</span>
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
