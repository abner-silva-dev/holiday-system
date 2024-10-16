import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../ui/Button';

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

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  font-weight: 700;
  color: var(--color-grey-600);
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

const SubmitButton = styled(Button)`
  margin-top: 2.8rem;
  align-self: center;
`;

const UpdatePassword = () => {
  const [isClicked, setClicked] = useState(false);

  return (
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
  );
};

export default UpdatePassword;
