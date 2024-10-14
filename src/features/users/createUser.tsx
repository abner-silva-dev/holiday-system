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
import { API_DAI_BASE } from '../../config';
import { useState } from 'react';
import { useMe } from '../authentication/useMe';
import InputImageDrag from '../../ui/InputImageDrag';
import { updateMe } from '../../services/apiAuthentication';
import Spinner from '../../ui/Spinner';

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

  const { createUser } = useCreateUser();
  const { updateUser } = useUpdateUser();

  // Get Current data after to submit
  const onSubmit = (data: UserInfo) => {
    if (isEditSession)
      updateUser(
        { newUser: data, id: userId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createUser(data, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
  };

  const { userAuthenticated, isPending } = useMe();
  const [fileImg, setFileImg] = useState<File | null>(null);

  const onSubmitInfo = () => {
    const formData = new FormData();
    if (fileImg) formData.append('photo', fileImg);
    updateMe(formData);
  };

  if (isPending) return <Spinner />;

  return (
    <Row>
      <Heading as="h2">
        {isEditSession ? 'Modificar usuario' : 'Registro de empleado'}
      </Heading>

      <Form onSubmit={handleSubmit(onSubmit, onSubmitInfo)}>
        <FormRow label="Imagen">
          <InputImageDrag
            defaultImage={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
            onChangeFile={setFileImg}
            showPreview={false}
          />
        </FormRow>
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
          <Input id="enterprise" as="select" {...register('enterprise')} required>
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
          <Input id="department" as="select" {...register('department')} required>
            {departments?.map((department: DepartmentInfo) => {
              return (
                <option value={department._id} key={department._id}>
                  {department.name}
                </option>
              );
            })}
          </Input>
        </FormRow>
        <Button $variation="confirm">
          {isEditSession ? 'Actualizar Empleado' : 'Crear Empleado'}
        </Button>
      </Form>
    </Row>
  );
};

export default CreateUser;
