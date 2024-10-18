import styled from 'styled-components';
// import FileButton from '../ui/FileButton';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

import UpdatePassword from '../features/authentication/UpdatePassword';
import UpdateInfo from '../features/authentication/UpdateInfo';

// Account Settings
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
