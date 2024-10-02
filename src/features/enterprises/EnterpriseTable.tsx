import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { useEnterprises } from './useEnterprises';

import { EnterpriseInfo } from './types';
import EnterpriseRow from './EnterpriseRow';
import Menus from '../../ui/Menus';
import { useStateApp } from '../../context/stateAppContext';
import { formatText } from '../../utils/helpers';

const EnterpriseTable = () => {
  const { enterprises, isPending, error } = useEnterprises();
  const {
    state: { queryEnterprise },
  } = useStateApp();

  if (isPending) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  // DATA SEARCH
  const dataSearch = enterprises.filter((enterprise: EnterpriseInfo) => {
    return formatText(`${enterprise.name} ${enterprise.nameAbreviate}`).includes(
      queryEnterprise
    );
  });

  return (
    <>
      <Menus>
        <Table columns="1fr 1fr 1fr 1fr  1fr .2fr">
          <Table.Header>
            <span>Logotipo</span>
            <span>Nombre</span>
            <span>Abreviatura</span>
            <span>Email</span>
            <span>Número Telefónico</span>
            <span></span>
          </Table.Header>
          <Table.Body
            data={dataSearch}
            render={(enterprise: EnterpriseInfo) => (
              <EnterpriseRow enterprise={enterprise} key={enterprises?._id} />
            )}
          ></Table.Body>
        </Table>
      </Menus>
    </>
  );
};

export default EnterpriseTable;
