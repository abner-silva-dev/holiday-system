import styled from 'styled-components';
import Heading from '../../ui/Heading';
import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import Button from '../../ui/Button';

const Input = styled.input`
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

const FieldContainer = styled.div`
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

const EyeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & svg:hover {
    color: var(--color-grey-700);
  }
`;

const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 4rem;
`;

const PassRecovery = () => {
  const [isClicked, setClicked] = useState(false);
  return (
    <>
      <Content>
        <Heading as="h2"> Recuperación de Contraseñas</Heading>
        <p>
          Genere una nueva contraseña de recuperación, la contraseña generada se enviará
          a:
        </p>
        <Form>
          <div>
            <label>Correo Electrónico de Recuperación</label>
            <Input type="email" readOnly={true} />
          </div>
          {/* <div>
            <label>Contraseña</label>
            <FieldContainer>
              <Input
                title="Completa este campo"
                type={isClicked ? 'text' : 'password'}
                placeholder="•••••••••••"
                readOnly={true}
                required
              ></Input>
              <EyeContainer
                title={isClicked ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                onClick={() => setClicked(!isClicked)}
              >
                {isClicked ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
              </EyeContainer>
            </FieldContainer>
          </div> */}
          <Button $variation="secondary">GENERAR CONTRASEÑA</Button>
        </Form>
      </Content>
    </>
  );
};

export default PassRecovery;
