import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

import { UserInfo } from './types';
import { joinName } from '../../utils/helpers';
import { useCreateUser } from './useCreateUser';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  justify-content: center;
  gap: 4rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-400);
`;

interface HandleSubmit extends UserInfo {
  paternSurname?: string;
  motherSurname?: string;
}

interface PropsCreateUSer {
  edit?: HandleSubmit;
  onCloseModal?: () => void;
}

const CreateUser: React.FC<PropsCreateUSer> = ({ edit = {}, onCloseModal }) => {
  const { register, handleSubmit, reset } = useForm<HandleSubmit>({
    defaultValues: edit,
  });

  const { createUser } = useCreateUser();

  const onSubmit = (data: HandleSubmit) => {
    const {
      employNumber,
      dateHiring,
      name,
      paternSurname,
      motherSurname,
      email,
      phoneNumber,
      enterprise,
      department,
    } = data;

    createUser({
      employNumber,
      dateHiring,
      email,
      phoneNumber,
      enterprise,
      department,
      name: joinName({ name, paternSurname, motherSurname }),
    });

    reset();
    onCloseModal?.();
  };

  return (
    <Row>
      <Heading as="h2">Registro de empleado</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Numero de Empleado">
          <Input
            type="number"
            id="employNumber"
            placeholder="201"
            {...register('employNumber')}
            required
          />
        </FormRow>
        <FormRow label="Nombre(s)">
          <Input
            type="text"
            id="name"
            placeholder="Jon Smith"
            {...register('name')}
            required
          />
        </FormRow>
        <FormRow label="Apellido Paterno">
          <Input
            type="text"
            id="paternSurname"
            placeholder="Snowman"
            {...register('paternSurname')}
            required
          />
        </FormRow>
        <FormRow label="Apellido Materno">
          <Input
            type="text"
            id="motherSurname"
            placeholder="Sulivan"
            {...register('motherSurname')}
            required
          />
        </FormRow>
        <FormRow label="Correo electronico">
          <Input
            type="text"
            id="email"
            placeholder="example@email.com"
            {...register('email')}
            required
          />
        </FormRow>
        <FormRow label="Telefono">
          <Input
            type="text"
            id="phoneNumber"
            placeholder="5523728112"
            {...register('phoneNumber')}
            required
          />
        </FormRow>
        <FormRow label="Fecha de ingreso">
          <Input type="date" id="dateHiring" {...register('dateHiring')} required />
        </FormRow>
        <FormRow label="Empresa">
          <Input type="text" id="enterprise" {...register('enterprise')} required />
        </FormRow>
        <FormRow label="Departamento">
          <Input type="text" id="department" {...register('department')} required />
        </FormRow>
        <Button $variation="confirm">Crear Empleado</Button>
      </Form>
    </Row>
  );
};

export default CreateUser;
