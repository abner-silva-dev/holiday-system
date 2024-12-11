import UserOptions from '../../features/users/components/UserOptions';
import UsersTable from '../../features/users/components/UsersTable';
import Row from '../../shared/ui/Row';
import Search from '../../shared/ui/Search';
import Heading from '../../shared/ui/Heading';

import { useStateApp } from '../../context/stateAppContext';
import FilterUser from '../../features/users/components/FiltersUser';
import { formatText } from '../../shared/utils/helpers';

const User = () => {
  const { handleSearch } = useStateApp();

  return (
    <>
      <Row>
        <Heading as="h1">Empleados</Heading>

        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre | N° Empleado"
            onSetQuery={(query) => handleSearch('user', formatText(query))}
            popUpFilter={<FilterUser />}
          />
          <UserOptions />
        </Row>
        <UsersTable />
      </Row>
    </>
  );
};

export default User;
