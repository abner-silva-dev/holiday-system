import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
import {
  ButtonPrevious,
  ErrorMessage,
  Field,
  FieldCheck,
  FieldRadio,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Percentage,
  Title,
} from '../../../ui/FormPieces';
import { useUser2 } from '../useUser';
import { useCreateRequest } from './useCreateRequest';
import { useUpdateRequest } from './useUpdateRequest';
import { useRequest } from './useRequest';
import { useEffect } from 'react';
import { formatDate } from '../../../utils/helpers';

interface IFormClinicInformation {
  height: number;
  weight: number;
  bloodType: string;
  hasMedicalConditions: string;
  medicalConditions: string;
  hasSurgery: string;
  surgeryType: string;
  hasPhysicalImpediment: string;
  certifyInformation: boolean;
  user: string;
}

function FormClinicInformation({ handleBack }: { handleBack: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormClinicInformation>();

  // Get current user
  const { user, isPending } = useUser2();

  // Create Request
  const { createRequest } = useCreateRequest<IFormClinicInformation>('clinicInformation');

  // Update Request
  const { updateRequest } = useUpdateRequest<IFormClinicInformation>('clinicInformation');

  // Get data if Exists
  const { data: requestData } = useRequest('clinicInformation');

  // Update or Save
  const isEdditSession = Boolean(!requestData);

  // Action form type Create or Update
  const onSubmit = (data: IFormClinicInformation) => {
    if (requestData) {
      updateRequest({ newData: { ...data } });
    } else {
      createRequest({ ...data, user: user?.id || '' });
    }
  };

  const hasMedicalConditions = watch('hasMedicalConditions');
  const hasSurgery = watch('hasSurgery');

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
        <Title as="h2">INFORMACIÓN CLÍNICA</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="height">Estatura*</Label>
            <Percentage>
              <Input
                id="height"
                type="number"
                {...register('height', { required: 'Este campo es obligatorio' })}
              />
              <span>cm</span>
            </Percentage>
            {errors.height && <ErrorMessage>{errors.height.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label htmlFor="weight">Peso*</Label>
            <Percentage>
              <Input
                id="weight"
                type="number"
                {...register('weight', { required: 'Este campo es obligatorio' })}
              />
              <span>Kg</span>
            </Percentage>
            {errors.weight && <ErrorMessage>{errors.weight.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label htmlFor="bloodType">Tipo de Sangre*</Label>
            <Input
              id="bloodType"
              type="text"
              {...register('bloodType', { required: 'Este campo es obligatorio' })}
            />
            {errors.bloodType && <ErrorMessage>{errors.bloodType.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label>¿Padece o padeció enfermedades que necesiten atención médica?*</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                id="hasMedicalConditionsYes"
                type="radio"
                value="si"
                {...register('hasMedicalConditions', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                id="hasMedicalConditionsNo"
                type="radio"
                value="no"
                {...register('hasMedicalConditions', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.hasMedicalConditions && (
              <ErrorMessage>{errors.hasMedicalConditions.message}</ErrorMessage>
            )}
          </Field>

          {/* Esta pregunta se oculta solo si "No" es seleccionado */}
          {hasMedicalConditions !== 'no' && (
            <Field>
              <Label htmlFor="medicalConditions">¿Qué enfermedades?*</Label>
              <Input
                id="medicalConditions"
                type="text"
                {...register('medicalConditions')}
              />
              {errors.medicalConditions && (
                <ErrorMessage>{errors.medicalConditions.message}</ErrorMessage>
              )}
            </Field>
          )}

          <Field>
            <Label>
              ¿En el transcurso del último año ha tenido algún tipo de intervención
              quirúrgica?*
            </Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                id="hasSurgeryYes"
                type="radio"
                value="si"
                {...register('hasSurgery', { required: 'Este campo es obligatorio' })}
              />
              <span>No</span>
              <Input
                id="hasSurgeryNo"
                type="radio"
                value="no"
                {...register('hasSurgery', { required: 'Este campo es obligatorio' })}
              />
            </FieldRadio>
            {errors.hasSurgery && (
              <ErrorMessage>{errors.hasSurgery.message}</ErrorMessage>
            )}
          </Field>

          {/* Esta pregunta se oculta solo si "No" es seleccionado */}
          {hasSurgery !== 'no' && (
            <Field>
              <Label htmlFor="surgeryType">¿De qué tipo?*</Label>
              <Input id="surgeryType" type="text" {...register('surgeryType')} />
              {errors.surgeryType && (
                <ErrorMessage>{errors.surgeryType.message}</ErrorMessage>
              )}
            </Field>
          )}

          <Field>
            <Label>¿Tiene algún impedimento físico que lo limite en su trabajo?*</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                id="hasPhysicalImpedimentYes"
                type="radio"
                value="si"
                {...register('hasPhysicalImpediment', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                id="hasPhysicalImpedimentNo"
                type="radio"
                value="no"
                {...register('hasPhysicalImpediment', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.hasPhysicalImpediment && (
              <ErrorMessage>{errors.hasPhysicalImpediment.message}</ErrorMessage>
            )}
          </Field>
        </FormContainer>

        <FieldCheck>
          <Label style={{ textAlign: 'justify', marginBottom: '6rem' }}>
            Certifico que la información aquí proporcionada es verídica, por lo que
            autorizo a Distribuidora de Auto Industrias, S.A de C.V, a corroborarla
            cuestionando a las referencias señaladas tanto sobre mi conducta personal como
            laboral, así como el uso de mis datos personales con base en el aviso de
            privacidad de la empresa, el cual podré consultar en www.dai.com.mx,
            reconociendo que la presente solicitud no significa el establecimiento de
            ninguna relación laboral, ni crea el compromiso de que ésta me otorgue. *
          </Label>
          <Input
            id="certifyInformation"
            type="checkbox"
            {...register('certifyInformation', { required: 'Este campo es obligatorio' })}
          />
          {errors.certifyInformation && (
            <ErrorMessage>{errors.certifyInformation.message}</ErrorMessage>
          )}
        </FieldCheck>

        <PageChange>
          <ButtonPrevious onClick={handleBack} />

          <Button $variation="confirm" type="submit">
            {isEdditSession ? 'Guardar' : 'Actualizar'}
          </Button>

          <div />
        </PageChange>
      </Page>
    </Form>
  );
}

export default FormClinicInformation;
