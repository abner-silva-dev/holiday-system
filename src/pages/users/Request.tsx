import styled from 'styled-components';

import RequestForm from '../../features/users/components/request/RequestForm';
import ProcessBarRequest from '../../features/users/components/ProcessBarRequest';
import { useState } from 'react';
import { useRequest } from '../../features/users/components/request/useRequest';
import { useUser } from '../../features/users/hooks/useUser';

const Header = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 22;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Request = () => {
  const [page, setPage] = useState(0);
  const { user: data1 } = useUser();
  const { data: data2 } = useRequest('complementaryData');
  const { data: data3 } = useRequest('employData');
  const { data: data4 } = useRequest('scholarData');
  const { data: data5 } = useRequest('knowledgeExperience');
  const { data: data6 } = useRequest('familiarData');
  const { data: data7 } = useRequest('personalReference');
  const { data: data8 } = useRequest('clinicInformation');

  const poins = [
    { textTooltip: 'Datos Personales', state: data1 },
    { textTooltip: 'Datos Complementarios', state: data2 },
    { textTooltip: 'Datos de Empleo', state: data3 },
    { textTooltip: 'Datos Escolares', state: data4 },
    { textTooltip: 'Conocimientos y Experiencia', state: data5 },
    { textTooltip: 'Datos familiares', state: data6 },
    { textTooltip: 'Referencias Personales', state: data7 },
    { textTooltip: 'Información clinica', state: data8 },
  ];

  return (
    <Container>
      <Header>
        <ProcessBarRequest points={poins} progress={page} setPage={setPage} />
      </Header>
      <RequestForm page={page} setPage={setPage} />
    </Container>
  );
};
export default Request;
