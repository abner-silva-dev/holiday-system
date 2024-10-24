import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

import { useCreateEnterprise } from './useCreateEnterprise';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';

import { EnterpriseInfo } from '../enterprises/types';
import { upperCaseText } from '../../utils/helpers';
// import { createDepartments, ts } from '../../services/apiDepartments';

import { useState } from 'react';
import InputImageDrag from '../../ui/InputImageDrag';
import { useUpdateEnterprise } from './useUpdateEnterprise';
// import InputImageDrag from '../../ui/InputImageDrag';

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

// interface HandleSubmit extends UserInfo {
//   paternSurname?: string;
//   motherSurname?: string;
// }

interface PropsCreateEnterprise {
  enterpriseToUpdate?: EnterpriseInfo;
  onCloseModal?: () => void;
}

const CreateEnterprise: React.FC<PropsCreateEnterprise> = ({
  enterpriseToUpdate = {},
  onCloseModal,
}) => {
  console.log(enterpriseToUpdate);
  const {
    _id: enterpriseId = '',
    logo = '',
    ...editValues
  } = enterpriseToUpdate as EnterpriseInfo;
  const isEditSession = Boolean(enterpriseId);

  const { register, handleSubmit, reset } = useForm<EnterpriseInfo>({
    defaultValues: isEditSession
      ? {
          ...editValues,
        }
      : {},
    // defaultValues: edit,
  });

  const { createEnterprise } = useCreateEnterprise();
  const { updateEnterprises } = useUpdateEnterprise();

  const onSubmit = (data: EnterpriseInfo) => {
    // ****!! ANDREW ADDED THIS FUNCTIONALITY
    const formData = new FormData();

    if (isEditSession && data.logo) delete data.logo;
    if (fileImg) formData.append('logo', fileImg);

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    if (isEditSession) {
      updateEnterprises(
        { newData: formData, id: enterpriseId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createEnterprise(formData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }

    // const { name, nameAbreviate, email, phoneNumber, logo } = data;
    // const capitalizedNameAbreviate = upperCaseText(nameAbreviate || '');

    // createEnterprise({
    //   name,
    //   nameAbreviate: capitalizedNameAbreviate,
    //   email,
    //   phoneNumber,
    //   logo,
    // });

    // reset();
    // onCloseModal?.();
  };

  const [fileImg, setFileImg] = useState<File | null>(null);
  return (
    <Row>
      <Heading as="h2">Registro de empresa</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Logotipo">
          <InputImageDrag
            defaultName={logo || ''}
            onChangeFile={setFileImg}
            showPreview={false}
          />
        </FormRow>
        {/* <FormRow label="Logotipo">
          <Input type="text" id="logo" {...register('logo')} required />
        </FormRow> */}
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
        <FormRow label="Número Telefónico">
          <Input
            type="text"
            id="phoneNumber"
            placeholder="Sulivan"
            {...register('phoneNumber')}
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

        <Button $variation="confirm">Crear Empresa</Button>
      </Form>
    </Row>
  );
};

export default CreateEnterprise;
