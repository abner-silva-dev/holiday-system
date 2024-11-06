import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
import {
  ButtonNext,
  ButtonPrevious,
  ErrorMessage,
  Field,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Title,
} from '../../../ui/FormPieces';
import { useEffect } from 'react';
import { useUser2 } from '../useUser';
import { useCreateRequest } from './useCreateRequest';
import { useUpdateRequest } from './useUpdateRequest';
import { useRequest } from './useRequest';
import { formatDate } from '../../../utils/helpers';

interface IFormPersonalReference {
  person1: {
    name: string;
    duration: string;
    phone: string;
    occupation: string;
    user: string;
  };
  person2: {
    name: string;
    duration: string;
    phone: string;
    occupation: string;
    user: string;
  };
  person3: {
    name: string;
    duration: string;
    phone: string;
    occupation: string;
  };
  user: string;
}

function FormPersonalReference({
  handleBack,
  handleNext,
}: {
  handleBack: () => void;
  handleNext: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormPersonalReference>();

  // Get current user
  const { user, isPending } = useUser2();

  // Create Request
  const { createRequest } = useCreateRequest<IFormPersonalReference>('personalReference');

  // Update Request
  const { updateRequest } = useUpdateRequest<IFormPersonalReference>('personalReference');

  // Get data if Exists
  const { data: requestData } = useRequest('personalReference');

  // Update or Save
  const isEdditSession = Boolean(!requestData);

  // Action form type Create or Update
  const onSubmit = (data: IFormPersonalReference) => {
    if (requestData) {
      updateRequest({ newData: { ...data } });
    } else {
      createRequest({ ...data, user: user?.id || '' });
    }
  };

  // Loading data if Exists
  useEffect(() => {
    if (requestData) {
      const previousWorkDateFormat = formatDate(requestData?.previousWorkDate + '', {
        formatDate: 'yyyy-mm-dd',
        separationBy: '-',
        spaces: false,
      });

      reset({
        ...requestData,
        previousWorkDate: previousWorkDateFormat,
      });
    }
  }, [requestData, reset]);

  if (isPending) return <p>Cargando...</p>;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">REFERENCIAS PERSONALES</Title>
        <Title as="h4">
          Favor de incluir los datos de 3 personas que lo conozcan bien, que no sean
          familiares
        </Title>

        <Title as="h3">Persona 1</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="person1Name">Nombre Completo</Label>
            <Input
              id="person1.name"
              type="text"
              {...register('person1.name', { required: 'Este campo es obligatorio' })}
            />
            {errors.person1?.name && (
              <ErrorMessage>{errors.person1.name.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person1Duration">Tiempo de Conocerle</Label>
            <Input
              id="person1.duration"
              type="text"
              {...register('person1.duration', { required: 'Este campo es obligatorio' })}
            />
            {errors.person1?.duration && (
              <ErrorMessage>{errors.person1.duration.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person1Phone">Teléfono / Celular</Label>
            <Input
              id="person1.phone"
              type="text"
              {...register('person1.phone', { required: 'Este campo es obligatorio' })}
            />
            {errors.person1?.phone && (
              <ErrorMessage>{errors.person1.phone.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person1Occupation">Ocupación</Label>
            <Input
              id="person1.occupation"
              type="text"
              {...register('person1.occupation', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.person1?.occupation && (
              <ErrorMessage>{errors.person1.occupation.message}</ErrorMessage>
            )}
          </Field>
        </FormContainer>

        <Title as="h3">Persona 2</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="person2Name">Nombre Completo</Label>
            <Input
              id="person2.name"
              type="text"
              {...register('person2.name', { required: 'Este campo es obligatorio' })}
            />
            {errors.person2?.name && (
              <ErrorMessage>{errors.person2.name.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person2Duration">Tiempo de Conocerle</Label>
            <Input
              id="person2.duration"
              type="text"
              {...register('person2.duration', { required: 'Este campo es obligatorio' })}
            />
            {errors.person2?.duration && (
              <ErrorMessage>{errors.person2.duration.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person2Phone">Teléfono / Celular</Label>
            <Input
              id="person2.phone"
              type="text"
              {...register('person2.phone', { required: 'Este campo es obligatorio' })}
            />
            {errors.person2?.phone && (
              <ErrorMessage>{errors.person2.phone.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person2Occupation">Ocupación</Label>
            <Input
              id="person2.occupation"
              type="text"
              {...register('person2.occupation', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.person2?.occupation && (
              <ErrorMessage>{errors.person2.occupation.message}</ErrorMessage>
            )}
          </Field>
        </FormContainer>

        <Title as="h3">Persona 3</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="person3Name">Nombre Completo</Label>
            <Input
              id="person3.name"
              type="text"
              {...register('person3.name', { required: 'Este campo es obligatorio' })}
            />
            {errors.person3?.name && (
              <ErrorMessage>{errors.person3.name.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person3Duration">Tiempo de Conocerle</Label>
            <Input
              id="person3.duration"
              type="text"
              {...register('person3.duration', { required: 'Este campo es obligatorio' })}
            />
            {errors.person3?.duration && (
              <ErrorMessage>{errors.person3.duration.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person3Phone">Teléfono / Celular</Label>
            <Input
              id="person3.phone"
              type="text"
              {...register('person3.phone', { required: 'Este campo es obligatorio' })}
            />
            {errors.person3?.phone && (
              <ErrorMessage>{errors.person3.phone.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label htmlFor="person3Occupation">Ocupación</Label>
            <Input
              id="person3.occupation"
              type="text"
              {...register('person3.occupation', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.person3?.occupation && (
              <ErrorMessage>{errors.person3.occupation.message}</ErrorMessage>
            )}
          </Field>
        </FormContainer>

        <PageChange>
          <ButtonPrevious onClick={handleBack} />

          <Button $variation="confirm" type="submit">
            {isEdditSession ? 'Guardar' : 'Actualizar'}
          </Button>

          <ButtonNext onClick={handleNext} />
        </PageChange>
      </Page>
    </Form>
  );
}

export default FormPersonalReference;
