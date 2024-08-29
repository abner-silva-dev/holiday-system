import { HiMiniTrash, HiMiniPencil } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import { UserInfo } from './types';
import Table from '../../ui/Table';

interface Props {
  user: UserInfo;
}

const UserRow: React.FC<Props> = ({ user }) => {
  return (
    <Table.Row key={user.id} columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
      <span>{user.employNumber}</span>
      <span>{user.employNumber}</span>
      <span>{user.name}</span>
      <span>{user.dateHiring}</span>
      <span>{user.seniority}</span>
      <div>
        <Menus.Menu>
          <Menus.Toggle id={user.id} />
          <Menus.List id={user.id}>
            <Menus.Button icon={<HiMiniTrash />}>Eliminar</Menus.Button>
            <Menus.Button icon={<HiMiniPencil />}>Editar</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  );
};

export default UserRow;
