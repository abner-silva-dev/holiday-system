import EnterpriseOptions from '../../features/enterprises/components/EnterpriseOptions';
import Heading from '../../shared/ui/Heading';
import Row from '../../shared/ui/Row';
import Search from '../../shared/ui/Search';

import { useStateApp } from '../../context/stateAppContext';
import EnterpriseTable from '../../features/enterprises/components/EnterpriseTable';

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
