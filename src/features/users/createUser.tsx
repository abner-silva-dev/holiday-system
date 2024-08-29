import styled from 'styled-components';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

const Form = styled.form`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 2rem;
`;

const CreateUser: React.FC = () => {
  return (
    <Form>
      <FormRow label="Numero de Empleado">
        <input type="number" id="employNumber" />
      </FormRow>
      <FormRow label="Nombre(s)">
        <input type="text" id="name" />
      </FormRow>
      <FormRow label="Apellido Paterno">
        <input type="text" id="employNumber" />
      </FormRow>
      <FormRow label="Apellido Materno">
        <input type="text" id="employNumber" />
      </FormRow>
      <FormRow label="Fecha de ingreso">
        <input type="date" id="employNumber" />
      </FormRow>
      <Button>Crear Empleado</Button>
    </Form>
  );
};

export default CreateUser;
