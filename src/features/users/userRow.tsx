import { HiMiniTrash, HiMiniPencil } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import { UserInfo } from './types';
import Table from '../../ui/Table';
import { useDeleteUser } from './useDeleteUser';
import Modal from '../../ui/Modal';
import CreateUser from './createUser';
import ConfirmDelete from '../../ui/ConfirmDelete';

interface Props {
  user: UserInfo;
}

const UserRow: React.FC<Props> = ({ user }) => {
  const { deleteUser, isDeleting } = useDeleteUser();

  if (!user) return null;

  const { employNumber, dateHiring, name, email, phoneNumber, enterprise, department } =
    user;

  const userId = user.id || '';

  return (
    <>
      <Table.Row key={user.id} columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <span>{user.employNumber}</span>
        <span>{user.employNumber}</span>
        <span>{user.name}</span>
        <span>{user.dateHiring}</span>
        <span>{user.seniority}</span>
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={userId} />

              <Menus.List id={userId}>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiMiniTrash />}>Eliminar</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiMiniPencil />}>Editar</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="Empleados"
                  disabled={isDeleting}
                  onConfirm={() => deleteUser(userId)}
                />
              </Modal.Window>

              <Modal.Window name="edit">
                <CreateUser
                  edit={{
                    employNumber,
                    dateHiring,
                    name,
                    email,
                    phoneNumber,
                    enterprise,
                    department,
                  }}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
};

export default UserRow;
