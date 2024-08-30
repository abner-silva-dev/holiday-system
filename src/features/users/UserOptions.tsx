import styled from 'styled-components';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateUser from './createUser';

import { HiOutlineUserPlus } from 'react-icons/hi2';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';

const BtnIcon = styled.button`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-green-700);
  color: var(--color-grey-0);
  padding: 1rem;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  gap: 1rem;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

const UserOptions = () => {
  return (
    <div>
      <div></div>
      <Modal>
        <Modal.Open opens="modal">
          <BtnIcon title="crear empleado">
            <HiOutlineUserPlus />
            Crear empleado
          </BtnIcon>
        </Modal.Open>
        <Modal.Window name="modal">
          <CreateUser />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default UserOptions;
