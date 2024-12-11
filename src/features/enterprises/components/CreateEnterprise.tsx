import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import Button from '../../../shared/ui/Button';
import FormRow from '../../../shared/ui/FormRow';

import { useCreateEnterprise } from './../hooks/useCreateEnterprise';
import Row from '../../../shared/ui/Row';
import Heading from '../../../shared/ui/Heading';

import { EnterpriseInfo } from '../types';

import { useState } from 'react';
import InputImageDrag from '../../../shared/ui/InputImageDrag';
import { useUpdateEnterprise } from '../hooks/useUpdateEnterprise';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const Input = styled.input`
  background-color: var(--color-grey-0);
  padding: 0.5rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
  width: 100%;
`;

interface PropsCreateEnterprise {
  enterpriseToUpdate?: EnterpriseInfo;
  onCloseModal?: () => void;
}

const CreateEnterprise: React.FC<PropsCreateEnterprise> = ({
  enterpriseToUpdate = {},
  onCloseModal,
}) => {
  const { _id: enterpriseId = '', ...editValues } = enterpriseToUpdate as EnterpriseInfo;

  const isEditSession = Boolean(enterpriseId);

  // Check if is Edition or Create enterprise
  const { register, handleSubmit, reset } = useForm<EnterpriseInfo>({
    defaultValues: isEditSession ? { ...editValues } : {},
  });

  const { createEnterprise } = useCreateEnterprise();
  const { updateEnterprises } = useUpdateEnterprise();

  const onSubmit = (data: EnterpriseInfo) => {
    const formData = new FormData();

    if (isEditSession && data.logo) delete data.logo;
    if (fileImg) formData.append('logo', fileImg);

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    if (isEditSession)
      updateEnterprises(
        { newData: formData, id: enterpriseId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createEnterprise(formData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
  };

  // handle file photo
  const [fileImg, setFileImg] = useState<File | null>(null);

  return (
    <Row>
      <Heading as="h2">
        {isEditSession ? 'Modificar empresa' : 'Registro de empresa'}
      </Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Logotipo">
          <InputImageDrag
            defaultName={editValues.logo || ''}
            onChangeFile={setFileImg}
            showPreview={false}
          />
        </FormRow>

        <FormRow label="Nombre de Empresa">
          <Input
            type="text"
            id="name"
            placeholder="Distribuidora de Auto Industrias"
            {...register('name')}
            required
          />
        </FormRow>
        <FormRow label="Abreviatura">
          <Input
            type="text"
            id="nameAbreviate"
            placeholder="DAI"
            {...register('nameAbreviate')}
            required
          />
        </FormRow>
        <FormRow label="Correo Electrónico">
          <Input
            type="text"
            id="email"
            placeholder="dai_enterprise@gmail.com"
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

        <Button $variation="confirm">
          {isEditSession ? 'Guardar cambios' : 'Crear empresa'}
        </Button>
      </Form>
    </Row>
  );
};

export default CreateEnterprise;
