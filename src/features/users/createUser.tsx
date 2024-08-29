import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

import { UserInfo } from './types';
import { joinName } from '../../utils/helpers';
import { useCreateUser } from './useCreateUser';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  justify-content: center;
  gap: 2rem;
`;

interface HandleSubmit extends UserInfo {
  paternSurname: string;
  motherSurname: string;
}

interface PropsCreateUSer {
  edit?: HandleSubmit;
}

const CreateUser: React.FC<PropsCreateUSer> = ({ edit = {} }) => {
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
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Numero de Empleado">
        <input type="number" id="employNumber" {...register('employNumber')} required />
      </FormRow>
      <FormRow label="Nombre(s)">
        <input type="text" id="name" {...register('name')} required />
      </FormRow>
      <FormRow label="Apellido Paterno">
        <input type="text" id="paternSurname" {...register('paternSurname')} required />
      </FormRow>
      <FormRow label="Apellido Materno">
        <input type="text" id="motherSurname" {...register('motherSurname')} required />
      </FormRow>
      <FormRow label="Correo electronico">
        <input type="text" id="email" {...register('email')} required />
      </FormRow>
      <FormRow label="Telefono">
        <input type="text" id="phoneNumber" {...register('phoneNumber')} required />
      </FormRow>
      <FormRow label="Fecha de ingreso">
        <input type="date" id="dateHiring" {...register('dateHiring')} required />
      </FormRow>
      <FormRow label="Empresa">
        <input type="text" id="enterprise" {...register('enterprise')} required />
      </FormRow>
      <FormRow label="Departamento">
        <input type="text" id="department" {...register('department')} required />
      </FormRow>
      <Button>Crear Empleado</Button>
    </Form>
  );
};

export default CreateUser;
