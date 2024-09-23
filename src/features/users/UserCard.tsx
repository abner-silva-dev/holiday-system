import styled from 'styled-components';
import { joinName, yearMothDay } from './../../utils/helpers';
import { UserInfo } from './types';
import { ReactNode } from 'react';
import UserPhoto from './UserPhoto';
import { API_DAI_BASE } from '../../config';

const StyledUserCard = styled.aside`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 9px;
  box-shadow: var(--shadow-md);
  border-radius: 11px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5rem;
  grid-row: 1/-1;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`;

const TextTitle = styled.p`
  color: var(--color-grey-700);
  font-size: 1.8rem;
  font-weight: 700;
`;

const Text = styled.p`
  color: var(--color-grey-500);
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: lowercase;
`;
const PhotoContainer = styled.div`
  height: 15rem;
  margin-bottom: 6rem;
  color: #fff;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: url('/patron3.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  border-bottom: 1px solid var(--color--grey-700);

  img {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
  }
`;

const UserCard: React.FC<{ user: UserInfo; children?: ReactNode }> = ({
  user,
  children,
}) => {
  return (
    <StyledUserCard>
      <PhotoContainer>
        {/* <Heading as="h2">Informacion de usuario</Heading> */}
        <UserPhoto
          src={`${API_DAI_BASE}/img/user/${user?.photo}`}
          $size="large"
          $type="circle"
        />
      </PhotoContainer>

      <UserData>
        <Group>
          <TextTitle>No. Empleado</TextTitle>
          <Text>{user?.employNumber}</Text>
        </Group>
        <Group>
          <TextTitle>Departamento</TextTitle>
          <Text>{user?.department.name}</Text>
        </Group>
        <Group>
          <TextTitle>Nombre</TextTitle>
          <Text>
            {joinName({
              motherSurname: user?.motherSurname || '',
              name: user?.name || '',
              paternSurname: user?.paternSurname || '',
            })}
          </Text>
        </Group>
        <Group>
          <TextTitle>Jefe directo</TextTitle>
          <Text>Ricardo Anaya Obrador</Text>
        </Group>
        <Group>
          <TextTitle>Antiguedad</TextTitle>
          <Text>
            {yearMothDay(
              user?.seniority?.years,
              user?.seniority?.moths,
              user?.seniority?.days
            )}
          </Text>
        </Group>
        <Group>
          <TextTitle>Puesto</TextTitle>
          <Text>Hombre de negocios</Text>
        </Group>
      </UserData>
      {children}
    </StyledUserCard>
  );
};

export default UserCard;
