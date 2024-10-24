import { HiMiniTrash, HiMiniPencil } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import { DepartmentInfo } from './types';
import Table from '../../ui/Table';
import { useDeleteDepartment } from './useDeleteDepartment';
import Modal from '../../ui/Modal';
import CreateDepartment from './CreateDepartment';
import ConfirmDelete from '../../ui/ConfirmDelete';

interface Props {
  department: DepartmentInfo;
}

const DepartmentRow: React.FC<Props> = ({ department }) => {
  const { deleteDepartments, isDeleting } = useDeleteDepartment();

  if (!department) return null;

  console.log(department);
  const { name, nameAbreviate, enterprise } = department;

  const departmentId = department._id || '';
  const enterpriseId =
    typeof enterprise === 'object' && enterprise ? enterprise._id || '' : '';

  return (
    <>
      <Table.Row key={department.id} columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <span>{department.name}</span>
        <span>{department.nameAbreviate}</span>
        <span>{department.enterprise?.name}</span>
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={departmentId} />

              <Menus.List id={departmentId + 1}>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiMiniTrash />}>Eliminar</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Menus.List id={departmentId}>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiMiniTrash />}>Eliminar</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiMiniPencil />}>Editar</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="Departamentos"
                  disabled={isDeleting}
                  onConfirm={() => deleteDepartments(departmentId)}
                />
              </Modal.Window>

              <Modal.Window name="edit">
                <CreateDepartment
                  departmentToUpdate={{
                    _id: departmentId,
                    name,
                    nameAbreviate,
                    enterprise: { _id: enterpriseId },
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

export default DepartmentRow;
