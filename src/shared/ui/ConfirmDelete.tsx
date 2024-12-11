import styled from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

interface ConfirmDelete {
  resourceName?: string;
  onConfirm: () => void;
  disabled?: boolean;
  onCloseModal?: () => void;
}

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
}: ConfirmDelete) {
  // ****!! ANDREW MADE THIS FUNCTION: FIXES CLOSING MODAL WHEN YOU CLIC ON "DELETE"

  const handleDelete = async () => {
    await onConfirm();
    onCloseModal?.();
  };
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        ¿Está seguro de que desea eliminar este {resourceName} de forma permanente? Este
        la acción no se podra deshacer.
      </p>

      <div>
        <Button $variation="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        {/* ALSO I PUT "handleDelete" in the prop onClick Button "danger" */}
        <Button $variation="danger" disabled={disabled} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
