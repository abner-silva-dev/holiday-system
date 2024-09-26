import styled from 'styled-components';
// import FileButton from '../ui/FileButton';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { HiOutlineArrowUpTray, HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { useState } from 'react';
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';

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

const FileImage = styled.label`
  display: flex;
  justify-content: center;
  gap: 1rem;

  font-weight: 700;
  padding: 1rem 1.8rem;
  background-color: #0b7285;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0c8599;
  }

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

const BorderMarker = styled.div`
  border-bottom: 1px solid var(--color-grey-200);
`;

const DropArea = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DragOverlay = styled.div<{ isDragging: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ isDragging }) =>
    isDragging ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isDragging }) => (isDragging ? 1 : 0)};
  transition: opacity 0.3s;
  color: white;
  font-size: 1.2rem;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover; /* Asegura que la imagen se ajuste correctamente */
`;

// TEMPORAL INTERFACE
interface TempFormInfo {
  user: string;
  email: string;
}

const Account = () => {
  const [isClicked, setClicked] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    'https://www.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-600nw-1229859850.jpg'
  );
  const [isDragging, setIsDragging] = useState(false);
  const { register, handleSubmit } = useForm<TempFormInfo>({});

  const onSubmitInfo = (data: TempFormInfo) => {
    console.log(`Usuario: ${data.user}`);
    console.log(`Email: ${data.email}`);
  };

  // Función para actualizar la imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  // Funciones de arrastrar y soltar
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  return (
    <Row type="vertical">
      <Heading as="h1">Configuración de Cuenta</Heading>
      <AccountSection>
        <BorderMarker>
          <AccountContainer>
            {/* Área de arrastrar y soltar para actualizar la imagen */}
            <DropArea
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <UserImage src={imageSrc} alt="Imagen de perfil" />
              <DragOverlay isDragging={isDragging}>
                {isDragging ? 'Suelta la imagen aquí' : ''}
              </DragOverlay>
            </DropArea>

            {/* Botón para subir la imagen (opción alternativa) */}
            <FileImage as="label">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <HiOutlineArrowUpTray />
              Actualizar Imagen...
            </FileImage>

            <Form onSubmit={handleSubmit(onSubmitInfo)}>
              <Field>
                <Label>Nombre de Usuario</Label>
                <TextBox type="text" id="user" {...register('user')} required></TextBox>
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
