import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import Button from '../../../shared/ui/Button';
import FormRow from '../../../shared/ui/FormRow';

import { DepartmentInfo } from '.././types';
// import { joinName } from '../../utils/helpers';
import { useCreateDepartment } from './../hooks/useCreateDepartment';
import Row from '../../../shared/ui/Row';
import Heading from '../../../shared/ui/Heading';
import { useEnterprises } from '../../enterprises/hooks/useEnterprises';
import { EnterpriseInfo } from '../../enterprises/types';
import { upperCaseText } from '../../../shared/utils/helpers';
import { useUpdateDepartment } from '../hooks/useUpdateDepartment';

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

interface PropsCreateDepartment {
  departmentToUpdate?: DepartmentInfo;
  onCloseModal?: () => void;
}

const CreateDepartment: React.FC<PropsCreateDepartment> = ({
  departmentToUpdate = {},
  onCloseModal,
}) => {
  const { _id: departmentId = '', ...editValues } = departmentToUpdate as DepartmentInfo;

  const isEditSession = Boolean(departmentId);

  const { register, handleSubmit, reset } = useForm<DepartmentInfo>({
    defaultValues: isEditSession
      ? {
          ...editValues,
          enterprise: editValues?.enterprise?._id as unknown as EnterpriseInfo,
        }
      : {},
  });

  const { createDepartment } = useCreateDepartment();
  const { updateDepartment } = useUpdateDepartment();
  const { enterprises } = useEnterprises();

  const onSubmit = (data: DepartmentInfo) => {
    const { name, nameAbreviate, enterprise } = data;
    const capitalizedName = upperCaseText(name || '');
    const capitalizedNameAbreviate = upperCaseText(nameAbreviate || '');

    if (isEditSession) {
      updateDepartment(
        {
          newData: { name, nameAbreviate, enterprise },
          id: departmentId,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createDepartment(
        {
          name: capitalizedName,
          nameAbreviate: capitalizedNameAbreviate,
          enterprise,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  };

  return (
    <Row>
      <Heading as="h2">
        {isEditSession ? 'Actualizar departamento' : 'Registro de departamento'}
      </Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Nombre de Departamento">
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
          <Input id="enterprise" as="select" {...register('enterprise')} required>
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
        <Button $variation="confirm">
          {isEditSession ? 'Guardar cambios' : 'Crear Departamento'}
        </Button>
      </Form>
    </Row>
  );
};

export default CreateDepartment;
