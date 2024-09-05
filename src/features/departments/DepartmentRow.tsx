import { HiMiniTrash, HiMiniPencil } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import { DepartmentInfo } from './types';
import Table from '../../ui/Table';
import { useDeleteDepartment } from './useDeleteDepartment';
import Modal from '../../ui/Modal';
import CreateDepartment from './CreateDepartment';
import ConfirmDelete from '../../ui/ConfirmDelete';

interface Props {
: DepartmentInfo;
}

const DepartmentRow: React.FC<Props> = ({ department }) => {
  const { deleteDepartment, isDeleting } = useDeleteDepartment();

  if (!department) return null;

  const { name, nameAbreviate, enterprise } =
    department;

  const departmentId = department.id || '';

  return (
    <>
      <Table.Row key=.id} columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <span>{department.name}</span>
        <span>{department.nameAbreviate}</span>
        <span>{department.enterprise}</span>
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id=Id} />

              <Menus.List id=Id}>
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
                  onConfirm={() => deletId)}}
                />
              </Modal.Window>

              <Modal.Window name="edit">
                <CreateDepartment
                  edit={{
                    name,
                    nameAbreviate,
                    enterprise
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
