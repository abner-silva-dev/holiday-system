import styled from 'styled-components';
import Heading from '../../shared/ui/Heading';
import Row from '../../shared/ui/Row';
import { Link, Outlet } from 'react-router-dom';
import { HiArrowLeft, HiMiniArrowDownTray } from 'react-icons/hi2';
import { media } from '../../shared/style/media';
// import UserCard from '../features/users/UserCard';
import { useUser2 } from '../../features/users/hooks/useUser';
import Button from '../../shared/ui/Button';
import UserMiniCard from '../../shared/ui/UserMiniCard';
import { useState } from 'react';
import FloatDocuments from '../../shared/ui/FloatDocuments';
import Spinner from '../../shared/ui/Spinner';

const GoBack = styled(Link)`
  border: none;
  background-color: transparent;

  & svg {
    color: var(--color-grey-900);
    width: 6rem;
    height: 3rem;
  }
`;

const UserMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;

  @media (${media.smallTablet}) {
    grid-template-columns: 1fr;
  }
`;

const UserSubMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);

  /* overflow-y: scroll; */
  border-radius: 9px;
  /* height: 55rem; */
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const NavButton = styled(Button)`
  background-color: #0b7285;
  border-radius: 9px;

  &:hover {
    background-color: #118ca1;
  }
`;

const NavButtonDoc = styled(Button)`
  background-color: #845ef7;
  border-radius: 9px;

  display: flex;
  align-items: center;
  gap: 1rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: #6844d6;
  }
`;

const DropDown = styled.div`
  display: inline-block;
  position: relative;

  margin-left: auto;

  @media (${media.tablet}) {
    margin-left: 0;
  }
`;

const Float = styled(FloatDocuments)``;

const UserManagement = () => {
  const { user, isPending } = useUser2();
  const [isClicked, setClicked] = useState(false);

  if (isPending) return <Spinner />;
  if (!user) return null;

  return (
    <Row>
      <Row type="horizontal">
        <GoBack to="../users">
          <HiArrowLeft />
        </GoBack>
        <UserMiniCard user={user} />
        <Heading as="h1">Gestión de Personal</Heading>
      </Row>

      <UserMain>
        <Options>
          <NavButton $variation="confirm" as={Link} to="request">
            Datos Generales
          </NavButton>
          <NavButton $variation="confirm" as={Link} to="documents">
            Documentos
          </NavButton>
          <NavButton $variation="confirm" as={Link} to="recovery">
            Recuperación de Contraseñas
          </NavButton>
          <NavButton $variation="confirm" as={Link} to="assignment">
            Asignación de rol
          </NavButton>
          <DropDown>
            <NavButtonDoc $variation="confirm" onClick={() => setClicked(!isClicked)}>
              <HiMiniArrowDownTray />
              Generar Documentos
            </NavButtonDoc>
            {isClicked ? <Float onClose={() => setClicked(false)} /> : null}
          </DropDown>
        </Options>
        <UserSubMain>
          <Outlet />
        </UserSubMain>
      </UserMain>
    </Row>
  );
};

export default UserManagement;
