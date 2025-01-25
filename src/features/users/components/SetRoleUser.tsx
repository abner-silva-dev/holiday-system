import styled from 'styled-components';
import Heading from '../../../shared/ui/Heading';
import Button from '../../../shared/ui/Button';
import { useUser2 } from '../hooks/useUser';
import { joinName } from '../../../shared/utils/helpers';
import UserPhoto from './UserPhoto';
import { API_DAI_BASE } from '../../../config';
import { useState } from 'react';
import Modal from '../../../shared/ui/Modal';
import ConfirmAction from '../../../shared/ui/ConfirmAction';
import { useUpdateRole } from '../../authentication/hooks/useUpdateRole';
import { useDegradeRole } from '../../authentication/hooks/useDegradeRole';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 4rem;
`;

const Form = styled.div`
  /* width: 30%; */
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 0 auto;
`;
const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 1.6rem;
`;

const UserRole = styled.select`
  padding: 0.5rem;
  border: 2px solid var(--color-grey-300);
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
  border-radius: 11px;
`;

const Advertence = styled.p``;

function SetRoleUser() {
  const { user } = useUser2();
  const [role, setRole] = useState(user?.role || 'user');
  const { updateRoleUser } = useUpdateRole();
  const { deleteUserBoss } = useDegradeRole();

  const handleChangeRole = (password: string, onCloseModal?: () => void) => {
    if (!password) return;
    if (role === 'user') {
      deleteUserBoss(user?.id || '');
    } else
      updateRoleUser(
        { newData: { role, password }, id: user?.id || '' },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
  };

  return (
    <Container>
      <Heading as="h2">Establecer rol a usuario.</Heading>

      <Advertence>
        El rol de un usuario determina los privilegios y permisos que tiene dentro del
        sistema, definiendo las acciones que puede realizar y los recursos a los que puede
        acceder.
      </Advertence>

      <Form>
        <UserContainer>
          <UserPhoto
            src={`${API_DAI_BASE}/img/user/${user?.photo}`}
            $size="medium"
            $type="circle"
            $border={true}
          />

          <UserName>
            {joinName({
              name: user?.name || '',
              paternSurname: user?.paternSurname || '',
              motherSurname: user?.motherSurname || '',
            })}
          </UserName>

          <UserRole value={role} onChange={(e) => setRole(e.currentTarget.value)}>
            <option value="user">Usuario</option>
            <option value="manager">Jefe directo</option>
            <option value="admin">Admin</option>
          </UserRole>
          <Modal>
            <Modal.Open opens="confirmAction">
              <Button $variation="confirm" type="submit">
                cambiar rol
              </Button>
            </Modal.Open>

            <Modal.Window name="confirmAction">
              <ConfirmAction onConfirm={handleChangeRole} />
            </Modal.Window>
          </Modal>
        </UserContainer>
      </Form>
    </Container>
  );
}

export default SetRoleUser;
