import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { useUpdateMe } from './useUpdateMe';
import { useMe } from './useMe';
import InputImageDrag from '../../ui/InputImageDrag';
import { API_DAI_BASE } from '../../config';
import Button from '../../ui/Button';

//FORM STYLING
const TextBox = styled.input`
  border: none;

  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  letter-spacing: 1px;
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 3px;

  &::placeholder {
    letter-spacing: 3px;
    font-size: 2rem;
    color: var(--color-grey-400);
  }

  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  width: 55%;
`;

const SubmitButton = styled(Button)`
  margin-top: 2.8rem;
  align-self: center;
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

const BorderMarker = styled.div`
  border-bottom: 1px solid var(--color-grey-200);
`;

const Group = styled.div`
  width: 22rem;
  margin: 0 auto;
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  color: var(--color-grey-700);

  width: 100%;
  padding: 7rem 5rem;
`;

// TEMPORAL INTERFACE
interface TempFormInfo {
  user: string;
  email: string;
}

const UpdateInfo = () => {
  const { userAuthenticated, isPending } = useMe();

  const { register, handleSubmit, reset } = useForm<TempFormInfo>();
  const [fileImg, setFileImg] = useState<File | null>(null);
  const { updateMe } = useUpdateMe();

  useEffect(() => {
    if (userAuthenticated) {
      reset({
        email: userAuthenticated.email,
        user: userAuthenticated.name,
      });
    }
  }, [userAuthenticated, reset]);

  const onSubmitInfo = () => {
    const formData = new FormData();
    if (fileImg) formData.append('photo', fileImg);
    updateMe(formData);
  };

  if (isPending) return <Spinner />;
  return (
    <>
      <Group>
        <InputImageDrag
          defaultImage={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
          onChangeFile={setFileImg}
        />
      </Group>
      <BorderMarker>
        <AccountContainer>
          <Form onSubmit={handleSubmit(onSubmitInfo)}>
            <Field>
              <Label>Nombre de Usuario</Label>
              <TextBox type="text" id="user" {...register('user')} required />
            </Field>
            <Field>
              <Label>Correo Electrónico</Label>
              <TextBox type="email" id="email" {...register('email')} required></TextBox>
            </Field>
            <SubmitButton $variation="confirm">Guardar Cambios</SubmitButton>
          </Form>
        </AccountContainer>
      </BorderMarker>
    </>
  );
};

export default UpdateInfo;
