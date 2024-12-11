import styled from 'styled-components';

import Heading from '../../shared/ui/Heading';
import Row from '../../shared/ui/Row';
import UpdatePassword from '../../features/authentication/components/UpdatePassword';
import UpdateInfo from '../../features/authentication/components/UpdateInfo';

const AccountSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 3.4rem 0;
  background-color: var(--color-grey-0);
  border-radius: 9px;
  box-shadow: var(--shadow-md);
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  color: var(--color-grey-700);

  width: 100%;
  padding: 7rem 5rem;
`;

const Account = () => {
  return (
    <Row type="vertical">
      <Heading as="h1">Configuración de Cuenta</Heading>
      <AccountSection>
        <UpdateInfo />
        <AccountContainer>
          <Heading as="h2">Cambiar Contraseña</Heading>
          <UpdatePassword />
        </AccountContainer>
      </AccountSection>
    </Row>
  );
};

export default Account;
