import { HiMiniTrash, HiMiniPencil } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import { EnterpriseInfo } from './types';
import Table from '../../ui/Table';
import { useDeleteEnterprise } from './useDeleteEnterprise';
import Modal from '../../ui/Modal';
import CreateEnterprise from './CreateEnterprise';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { API_DAI_BASE } from '../../config';

import styled from 'styled-components';

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  aspect-ratio: 1 / 1;
`;

interface Props {
  enterprise: EnterpriseInfo;
}

const EnterpriseRow: React.FC<Props> = ({ enterprise }) => {
  const { deleteEnterprise, isDeleting } = useDeleteEnterprise();

  if (!enterprise) return null;

  const { name, nameAbreviate, email, phoneNumber, logo } = enterprise;

  const enterpriseId = enterprise._id || '';
  return (
    <Table.Row columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
      <Img
        src={`${API_DAI_BASE}/img/enterprise/${enterprise.logo}`}
        alt={`image of enterprise`}
      />
      <span>{enterprise.name}</span>
      <span>{enterprise.nameAbreviate}</span>
      <span>{enterprise.email}</span>
      <span>{enterprise.phoneNumber}</span>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={enterpriseId} />

            <Menus.List id={enterpriseId}>
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
                onConfirm={() => deleteEnterprise(enterpriseId)}
              />
            </Modal.Window>

            <Modal.Window name="edit">
              <CreateEnterprise
                enterpriseToUpdate={{
                  _id: enterpriseId,
                  logo,
                  name,
                  nameAbreviate,
                  email,
                  phoneNumber,
                }}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default EnterpriseRow;
