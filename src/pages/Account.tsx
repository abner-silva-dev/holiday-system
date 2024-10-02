import styled from 'styled-components';
// import FileButton from '../ui/FileButton';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';
import InputImageDrag from '../ui/InputImageDrag';
import { useMe } from '../features/authentication/useMe';
import { useUpdateMe } from '../features/authentication/useUpdateMe';
import Spinner from '../ui/Spinner';
import { API_DAI_BASE } from '../config';

// Account Settings
const AccountSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 3.4rem 0;
  background-color: var(--color-grey-0);
  border-radius: 9px;
  box-shadow: var(--shadow-md);
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

const EyeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & svg:hover {
    color: var(--color-grey-700);
  }
`;

const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.5rem;
  background-color: var(--color-grey-100);
  border-radius: 3px;

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-grey-500);
    transition: all 0.2s;
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

// TEMPORAL INTERFACE
interface TempFormInfo {
  user: string;
  email: string;
}

const Account = () => {
  const [isClicked, setClicked] = useState(false);

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
    <Row type="vertical">
      <Heading as="h1">Configuración de Cuenta</Heading>
      <AccountSection>
        <InputImageDrag
          defaultImage={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
          onChangeFile={setFileImg}
        />

        <BorderMarker>
          <AccountContainer>
            <Form onSubmit={handleSubmit(onSubmitInfo)}>
              <Field>
                <Label>Nombre de Usuario</Label>
                <TextBox type="text" id="user" {...register('user')} required />
              </Field>
              <Field>
                <Label>Correo Electrónico</Label>
                <TextBox
                  type="email"
                  id="email"
                  {...register('email')}
                  required
                ></TextBox>
              </Field>
              <SubmitButton $variation="confirm">Guardar Cambios</SubmitButton>
            </Form>
          </AccountContainer>
        </BorderMarker>
        <AccountContainer>
          <Heading as="h2">Cambiar Contraseña</Heading>
          <Form>
            <Field>
              <Label>Contraseña Actual</Label>
              <TextFieldContainer>
                <TextBox
                  title="Completa este campo"
                  type={isClicked ? 'text' : 'password'}
                  placeholder="•••••••••••"
                  required
                ></TextBox>
                <EyeContainer
                  title={isClicked ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                  onClick={() => setClicked(!isClicked)}
                >
                  {isClicked ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
                </EyeContainer>
              </TextFieldContainer>
            </Field>
            <Field>
              <Label>Nueva Contraseña</Label>
              <TextFieldContainer>
                <TextBox
                  title="Completa este campo"
                  type={isClicked ? 'text' : 'password'}
                  placeholder="•••••••••••"
                  required
                ></TextBox>
                <EyeContainer
                  title={isClicked ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                  onClick={() => setClicked(!isClicked)}
                >
                  {isClicked ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
                </EyeContainer>
              </TextFieldContainer>
            </Field>
            <Field>
              <Label>Confirmar Contraseña</Label>
              <TextFieldContainer>
                <TextBox
                  title="Completa este campo"
                  type={isClicked ? 'text' : 'password'}
                  placeholder="•••••••••••"
                  required
                ></TextBox>
                <EyeContainer
                  title={isClicked ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                  onClick={() => setClicked(!isClicked)}
                >
                  {isClicked ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
                </EyeContainer>
              </TextFieldContainer>
            </Field>
            <SubmitButton $variation="confirm">Cambiar Contraseña</SubmitButton>
          </Form>
        </AccountContainer>
      </AccountSection>
    </Row>
  );
};

export default Account;
