import styled from 'styled-components';
import { joinName, yearMothDay } from './../../utils/helpers';
import { UserInfo } from './types';
import { ReactNode, useState } from 'react';
import UserPhoto from './UserPhoto';
import { API_DAI_BASE } from '../../config';
import { HiChevronLeft } from 'react-icons/hi2';
import Button from '../../ui/Button';

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
  row-gap: 3rem;
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

//EDIT COMPONENT
const EditButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  right: 10px;
  top: 10px;
  z-index: 12;
  padding: 0.7rem 1rem;
  background-color: #dc2626;
  color: #fff;
  border-radius: 9px;
  border: none;

  & svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover {
    background-color: #b91c1c;
  }
`;

const EditModal = styled.div`
  position: absolute;

  top: 50px;
  right: 12px;
  z-index: 13;
  font-size: 1.4rem;
  width: 50%;

  padding: 1.8rem 0.4rem;
  border-radius: 9px;
  border: 1.5px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
`;

const SubmitButton = styled(Button)`
  padding: 0.3rem 0.6rem;
  font-size: 1.4rem;
  margin-top: 1rem;
`;

const CreditInput = styled.input`
  /* width: rem; */
  padding: 0.5rem 0.8rem;
  text-align: center;
  border: 1px solid var(--color-grey-200);
  border-radius: 9px;
  background-color: var(--color-grey-0);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  gap: 0.5rem;
`;

const UserCard: React.FC<{ user: UserInfo; children?: ReactNode }> = ({
  user,
  children,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <StyledUserCard>
      <EditButton onClick={() => setShowEdit(!showEdit)} type="button">
        Editar Crédito
        <HiChevronLeft
          style={{
            transform: showEdit
              ? 'translate(0px, 0px) rotate(-90deg)'
              : 'translate(0px, 0px) rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </EditButton>
      {showEdit && (
        <EditModal>
          <Form>
            <label>Crédito Pasado</label>
            <CreditInput type="number"></CreditInput>
            <label>Crédito Presente</label>
            <CreditInput type="number"></CreditInput>
            <label>Crédito Futuro</label>
            <CreditInput type="number"></CreditInput>
            <SubmitButton $variation="confirm">Aceptar</SubmitButton>
          </Form>
        </EditModal>
      )}
      <PhotoContainer>
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
          <Text>Hombre de negocios</Text>
        </Group>
      </UserData>
      {children}
    </StyledUserCard>
  );
};

export default UserCard;
