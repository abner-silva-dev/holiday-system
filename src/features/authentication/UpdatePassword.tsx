import styled from 'styled-components';
import { FormEvent, useState } from 'react';
import Button from '../../ui/Button';
import PasswordInput from '../../ui/InputPassword';
import { useChangePassword } from './useChangePassword';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  width: 55%;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  font-weight: 700;
  color: var(--color-grey-600);
`;

const ErrorMessage = styled.span`
  color: var(--color-red-500);
  font-size: 1.4rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 2.8rem;
  align-self: center;
`;

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { changeUserPassword, isChangingPassword } = useChangePassword();

  const handleChangePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;

    // Validate if passwords match
    if (newPassword !== confirmNewPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
      hasError = true;
    } else {
      setConfirmPasswordError('');
    }

    if (hasError) return;

    // Call changeUserPassword service
    changeUserPassword(
      { password: currentPassword, newPassword, confirmNewPassword },
      {
        onSuccess: () => {
          setCurrentPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
          setCurrentPasswordError('');
        },
        onError: (error) => {
          const errorMessage =
            error.message || 'Hubo un error al actualizar la contraseña.';
          if (
            errorMessage.includes('Contraseña incorrecta') ||
            errorMessage.includes('Usuario no encontrado')
          ) {
            setCurrentPasswordError(errorMessage);
          } else {
            setCurrentPasswordError('Error desconocido.');
          }
        },
      }
    );
  };

  return (
    <Form onSubmit={handleChangePassword}>
      <Field>
        <Label>Contraseña Actual</Label>
        <PasswordInput
          placeholder="•••••••••••"
          onChange={setCurrentPassword}
          value={currentPassword}
          letterSpacing="large"
        />
        {currentPasswordError && <ErrorMessage>{currentPasswordError}</ErrorMessage>}
      </Field>
      <Field>
        <Label>Nueva Contraseña</Label>
        <PasswordInput
          placeholder="•••••••••••"
          onChange={setNewPassword}
          value={newPassword}
          letterSpacing="large"
        />
      </Field>
      <Field>
        <Label>Confirmar Contraseña</Label>
        <PasswordInput
          placeholder="•••••••••••"
          onChange={setConfirmNewPassword}
          value={confirmNewPassword}
          letterSpacing="large"
        />
        {confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
      </Field>
      <SubmitButton $variation="confirm" type="submit" disabled={isChangingPassword}>
        {isChangingPassword ? 'Cambiando...' : 'Cambiar Contraseña'}
      </SubmitButton>
    </Form>
  );
};

export default UpdatePassword;
