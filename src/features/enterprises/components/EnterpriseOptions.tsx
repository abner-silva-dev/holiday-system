import styled from 'styled-components';
import Modal from '../../../shared/ui/Modal';
import CreateEnterprise from './CreateEnterprise';

import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

const BtnIcon = styled.button`
  font-weight: 500;
  padding: 1rem;
  gap: 1rem;

  display: flex;
  align-items: center;

  background-color: var(--color-green-700);
  color: #fff;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-lg);

  &:hover {
    background-color: var(--color-green-600);
  }

  & svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

const EnterpriseOptions = () => {
  return (
    <div>
      <div></div>
      <Modal>
        <Modal.Open opens="modal">
          <BtnIcon title="crear empresa">
            <HiOutlineBuildingOffice2 />
            Crear Empresa
          </BtnIcon>
        </Modal.Open>
        <Modal.Window name="modal">
          <CreateEnterprise />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default EnterpriseOptions;
