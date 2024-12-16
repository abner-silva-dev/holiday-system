import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';
import PasswordInput from './InputPassword';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ConfirmActionStyled = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

interface ConfirmActionProps {
  disabled?: boolean;
  onConfirm: (password: string, onCloseModal: () => void) => void;
  onCloseModal: () => void;
}

function ConfirmAction({ disabled, onConfirm, onCloseModal }: ConfirmActionProps) {
  const [password, setPassword] = useState('');

  const handleConfirmAction = async () => {
    try {
      onConfirm(password, onCloseModal);
      // onCloseModal?.();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      else toast.error('Error inesperado, intente mas tarde.');
    }
  };

  return (
    <ConfirmActionStyled>
      <Heading as="h3">confirmar acción</Heading>
      <p>
        ¿Esta seguro que desea realizar esta accion?. Confime su Ingrese su contraseña
        para realizar esta acción.
      </p>

      <PasswordInput letterSpacing="medium" onChange={setPassword} value={password} />

      <div>
        <Button $variation="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button $variation="primary" disabled={disabled} onClick={handleConfirmAction}>
          Confirmar
        </Button>
      </div>
    </ConfirmActionStyled>
  );
}

export default ConfirmAction;
