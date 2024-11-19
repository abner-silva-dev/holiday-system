import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

import { UserInfo } from './types';
import { useCreateUser } from './useCreateUser';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import { useEnterprises } from '../enterprises/useEnterprises';
import { useDepartments } from '../departments/useDepartment';
import { DepartmentInfo } from '../departments/types';
import { EnterpriseInfo } from '../enterprises/types';
import { useUpdateUser } from './useUpdateUser';
import { useState } from 'react';
import InputImageDrag from '../../ui/InputImageDrag';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 4rem;

  & :first-child {
    border-radius: 2px;
    gap: 0;
  }
`;

const Input = styled.input`
  background-color: var(--color-grey-0);
  padding: 0.5rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  width: 100%;
`;

interface PropsCreateUSer {
  userToUpdate?: UserInfo;
  onCloseModal?: () => void;
}

const CreateUser: React.FC<PropsCreateUSer> = ({ userToUpdate = {}, onCloseModal }) => {
  const { id: userId = '', ...editValues } = userToUpdate as UserInfo;

  console.log(userToUpdate);

  // Check if is Edition or Create user
  const isEditSession = Boolean(userId);

  // utilities hook form
  const { register, handleSubmit, reset } = useForm<UserInfo>({
    defaultValues: isEditSession
      ? {
          ...editValues,
          department: editValues?.department?._id as unknown as DepartmentInfo,
          enterprise: editValues?.enterprise?._id as unknown as EnterpriseInfo,
        }
      : {},
  });

  const { departments } = useDepartments();
  const { enterprises } = useEnterprises();

  const { createUser, isCreatingUser } = useCreateUser();
  const { updateUser } = useUpdateUser();

  // useEffect(() => {
  //   if (isEditSession && departments && enterprises) {
  //     reset({
  //       ...editValues,
  //       department: editValues.department?._id ?? '',
  //       enterprise: editValues.enterprise?._id ?? '',
  //     });
  //   }
  // }, [editValues, departments, enterprises, isEditSession, reset]);

  // Get Current data after to submit
  const onSubmit = (data: UserInfo) => {
    const formData = new FormData();

    if (isEditSession && data.photo) delete data.photo;
    if (fileImg) formData.append('photo', fileImg);

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    if (isEditSession)
      updateUser(
        { newUser: formData, id: userId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createUser(formData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
  };

  // handle file photo
  const [fileImg, setFileImg] = useState<File | null>(null);

  // if (isCreating) return <Spinner />;
  if (!departments || !enterprises) return null;

  return (
    <Row>
      <Heading as="h2">
        {isEditSession ? 'Modificar usuario' : 'Registro de empleado'}
      </Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Imagen">
          <InputImageDrag
            defaultName={editValues.photo || ''}
            onChangeFile={setFileImg}
            showPreview={false}
          />
        </FormRow>
        <FormRow label="Numero de Empleado">
          <Input
            disabled={isCreatingUser}
            type="number"
            id="employNumber"
            placeholder="201"
            {...register('employNumber')}
            required
          />
        </FormRow>
        <FormRow label="Nombre(s)">
          <Input
            disabled={isCreatingUser}
            type="text"
            id="name"
            placeholder="Jon Smith"
            {...register('name')}
            required
          />
        </FormRow>
        <FormRow label="Apellido Paterno">
          <Input
            disabled={isCreatingUser}
            type="text"
            id="paternSurname"
            placeholder="Snowman"
            {...register('paternSurname')}
            required
          />
        </FormRow>
        <FormRow label="Apellido Materno">
          <Input
            disabled={isCreatingUser}
            type="text"
            id="motherSurname"
            placeholder="Sulivan"
            {...register('motherSurname')}
            required
          />
        </FormRow>
        <FormRow label="Correo electronico">
          <Input
            disabled={isCreatingUser}
            type="text"
            id="email"
            placeholder="example@email.com"
            {...register('email')}
            required
          />
        </FormRow>
        <FormRow label="Fecha de ingreso">
          <Input
            disabled={isCreatingUser}
            type="date"
            id="dateHiring"
            {...register('dateHiring')}
            required
          />
        </FormRow>
        <FormRow label="Empresa">
          <Input
            disabled={isCreatingUser}
            id="enterprise"
            as="select"
            {...register('enterprise')}
            required
          >
            <option value="">Selecciona una empresa</option>
            {enterprises?.map((enterprise: EnterpriseInfo) => {
              return (
                <option value={enterprise._id} key={enterprise._id}>
                  {enterprise.name}
                </option>
              );
            })}
          </Input>
        </FormRow>
        <FormRow label="Departamento">
          <Input
            disabled={isCreatingUser}
            id="department"
            as="select"
            {...register('department')}
            required
          >
            <option value="">Selecciona una departamento</option>
            {departments?.map((department: DepartmentInfo) => {
              return (
                <option value={department._id} key={department._id}>
                  {department.name}
                </option>
              );
            })}
          </Input>
        </FormRow>
        <Button $variation="confirm" disabled={isCreatingUser}>
          {isEditSession ? 'Actualizar Empleado' : 'Crear Empleado'}
        </Button>
      </Form>
    </Row>
  );
};

export default CreateUser;
