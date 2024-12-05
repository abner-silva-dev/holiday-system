import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { useMe } from './useMe';
import { API_DAI_BASE } from '../../config';
import UserPhoto from '../users/UserPhoto';
import { joinName } from '../../utils/helpers';

const TextBox = styled.input`
  border: none;

  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  letter-spacing: 1px;
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 3px;

  &::placeholder {
    letter-spacing: 3px;
    font-size: 2rem;
    color: var(--color-grey-400);
  }

  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  width: 55%;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  font-weight: 700;
  color: var(--color-grey-600);
`;

const BorderMarker = styled.div`
  border-bottom: 1px solid var(--color-grey-200);
`;

const Group = styled.div`
  display: flex;
  justify-content: center;
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

const UpdateInfo = () => {
  const { userAuthenticated, isPending } = useMe();

  if (!userAuthenticated) return null;
  if (isPending) return <Spinner />;

  return (
    <>
      <Group>
        <UserPhoto
          src={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
          $size="large"
        />{' '}
      </Group>
      <BorderMarker>
        <AccountContainer>
          <Form>
            <Field>
              <Label>Nombre de Usuario</Label>
              <TextBox
                type="text"
                id="user"
                disabled={true}
                value={joinName({
                  name: userAuthenticated.name || '',
                  paternSurname: userAuthenticated?.paternSurname || '',
                  motherSurname: userAuthenticated?.motherSurname || '',
                })}
              />
            </Field>
            <Field>
              <Label>Correo Electrónico</Label>
              <TextBox
                type="email"
                id="email"
                disabled={true}
                value={userAuthenticated.email}
              />
            </Field>
          </Form>
        </AccountContainer>
      </BorderMarker>
    </>
  );
};

export default UpdateInfo;
