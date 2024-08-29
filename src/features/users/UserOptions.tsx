import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateUser from './createUser';

const UserOptions = () => {
  return (
    <div>
      <div></div>
      <Modal>
        <Modal.Open opens="modal">
          <Button>Agregar Usuario</Button>
        </Modal.Open>
        <Modal.Window name="modal">
          <CreateUser />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default UserOptions;
