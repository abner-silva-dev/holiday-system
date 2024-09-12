import EnterpriseOptions from '../features/enterprises/EnterpriseOptions';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Search from '../ui/Search';

import { useStateApp } from '../context/stateAppContext';
import EnterpriseTable from '../features/enterprises/EnterpriseTable';

const Enterprise = () => {
  const { handleSearch } = useStateApp();
  return (
    <>
      <Row>
        <Heading as="h1">Empresas</Heading>

        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre"
            onSetQuery={(query) => handleSearch('enterprise', query)}
          />
          <EnterpriseOptions />
        </Row>
        <EnterpriseTable />
      </Row>
    </>
  );
};

export default Enterprise;
