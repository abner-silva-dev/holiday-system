import { HiMiniTrash, HiMiniPencil } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import { UserInfo } from './types';
import Table from '../../ui/Table';
import { useDeleteUser } from './useDeleteUser';
import Modal from '../../ui/Modal';
import CreateUser from './createUser';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { formatDate, yearMothDay } from '../../utils/helpers';

interface Props {
  user: UserInfo;
}

const UserRow: React.FC<Props> = ({ user }) => {
  const { deleteUser, isDeleting } = useDeleteUser();

  if (!user) return null;

  const {
    employNumber,
    dateHiring,
    name,
    paternSurname,
    motherSurname,
    email,
    phoneNumber,
    enterprise,
    department,
  } = user;

  const dateHiringFormat = formatDate(dateHiring, {
    formatDate: 'yyyy-mm-dd',
    separationBy: '-',
  });

  const userId = user.id || '';
  const departmentId =
    typeof department === 'object' && department ? department._id || '' : '';
  const enterpriseId =
    typeof enterprise === 'object' && enterprise ? enterprise._id || '' : '';

  return (
    <>
      <Table.Row key={user.id} columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <span>{user.employNumber}</span>
        <span>
          {user.name} {user.paternSurname} {user.motherSurname}
        </span>
        <span>{formatDate(user.dateHiring)}</span>
        <span>
          {yearMothDay(
            user.seniority?.years,
            user.seniority?.moths,
            user.seniority?.days
          )}
        </span>
        <span>{user.department?.name}</span>
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
                  userToUpdate={{
                    id: userId,
                    employNumber,
                    dateHiring: dateHiringFormat,
                    name,
                    email,
                    phoneNumber,
                    enterprise: { _id: enterpriseId },
                    department: { _id: departmentId },
                    paternSurname,
                    motherSurname,
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
