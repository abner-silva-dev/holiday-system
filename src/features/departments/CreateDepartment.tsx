import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

import { DepartmentInfo } from './types';
// import { joinName } from '../../utils/helpers';
import { useCreateDepartment } from './useCreateDepartment';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import { useEnterprises } from '../enterprises/useEnterprises';
import { EnterpriseInfo } from '../enterprises/types';
import { upperCaseText } from '../../utils/helpers';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  justify-content: center;
  gap: 4rem;
`;

const Input = styled.input`
  background-color: var(--color-grey-0);
  padding: 0.5rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
`;

interface HandleSubmit extends DepartmentInfo {
  // paternSurname?: string;
  // motherSurname?: string;
  name?: string;
  nameAbreviate?: string;
}

interface PropsCreateDepartment {
  edit?: HandleSubmit;
  onCloseModal?: () => void;
}

const CreateDepartment: React.FC<PropsCreateDepartment> = ({
  edit = {},
  onCloseModal,
}) => {
  const { register, handleSubmit, reset } = useForm<HandleSubmit>({
    defaultValues: edit,
  });

  const { createDepartment } = useCreateDepartment();
  const { enterprises } = useEnterprises();

  const onSubmit = (data: HandleSubmit) => {
    const { name, nameAbreviate, enterprise } = data;

    const capitalizedName = upperCaseText(name || '');
    const capitalizedNameAbreviate = upperCaseText(nameAbreviate || '');

    createDepartment({
      name: capitalizedName,
      nameAbreviate: capitalizedNameAbreviate,
      enterprise,
    });

    reset();
    onCloseModal?.();
  };

  return (
    <Row>
      <Heading as="h2">Registro de Departamento</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Nombre de Empleado">
          <Input
            type="text"
            id="nameDepartment"
            placeholder="Ventas"
            {...register('name')}
            required
          />
        </FormRow>
        <FormRow label="Abreviatura">
          <Input
            type="text"
            id="nameAbreviate"
            placeholder="V"
            {...register('nameAbreviate')}
            required
          />
        </FormRow>
        <FormRow label="Empresa">
          {/* <Input
            type="text"
            id="enterprise"
            placeholder="DAI"
            {...register('enterprise')}
            required
          /> */}
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
        <Button $variation="confirm">Crear Departamento</Button>
      </Form>
    </Row>
  );
};

export default CreateDepartment;
