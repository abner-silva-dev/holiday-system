import styled from 'styled-components';
import { joinName, yearMothDay } from '../../../shared/utils/helpers';
import { UserInfo } from '../types';
import { ReactNode } from 'react';
import UserPhoto from './UserPhoto';
import { API_DAI_BASE } from '../../../config';
import FormCredit from '../../holiday/components/FormCredit';
import RestrictRoute from '../../../shared/ui/RestrictRoute';
import { useBoss } from '../../authentication/hooks/useBoss';

const StyledUserCard = styled.aside`
  position: relative;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 9px;
  box-shadow: var(--shadow-md);
  border-radius: 11px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 5rem;
  grid-row: 1/-1;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 0.5rem; */
`;

const UserData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
  padding: 0rem 4rem;
`;

const TextTitle = styled.p`
  color: var(--color-grey-700);
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Text = styled.p`
  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: lowercase;
  text-align: center;
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
  const { boss } = useBoss();

  return (
    <StyledUserCard>
      <RestrictRoute restrictTo={['user', 'manager']}>
        <FormCredit user={user} />
      </RestrictRoute>

      <PhotoContainer>
        <UserPhoto
          src={`${API_DAI_BASE}/img/user/${user?.photo}`}
          $size="large"
          $type="circle"
          $border={true}
        />
      </PhotoContainer>

      <UserData>
        <Group>
          <TextTitle>No. Empleado</TextTitle>
          <Text>{user?.employNumber}</Text>
        </Group>
        <Group>
          <TextTitle>Departamento</TextTitle>
          <Text>{user?.department?.name}</Text>
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
          <Text>
            {joinName({
              motherSurname: boss?.user?.motherSurname || '',
              name: boss?.user?.name || '',
              paternSurname: boss?.user?.paternSurname || '',
            })}
          </Text>
        </Group>
        <Group>
          <TextTitle>Antigüedad</TextTitle>
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
          <Text>{user?.position}</Text>
        </Group>
      </UserData>
      {children}
    </StyledUserCard>
  );
};

export default UserCard;
