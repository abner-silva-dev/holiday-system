import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
import {
  Field,
  FieldRadio,
  Form,
  FormContainer,
  Label,
  Page,
  PageChange,
  Title,
  ErrorMessage,
  ButtonNext,
  ButtonPrevious,
} from '../../../ui/FormPieces';
import Input from '../../../ui/Input';
import { useCreateRequest } from './useCreateRequest';
import { useUser2 } from '../useUser';
import { useEffect } from 'react';
import { useRequest } from './useRequest';
import { useUpdateRequest } from './useUpdateRequest';
import { formatDate } from '../../../utils/helpers';

interface IFormComplementaryData {
  rfc: string;
  imssNumber: string;
  curp: string;
  infonavitCredit: string;
  afore: string;
  travelAvailability: string;
  residenceChange: string;
  license: string;
  familyInCompany: string;
  jobSource: string;
  previousWorkInCompany: string;
  previousWorkDate?: string;
  previousWorkDepartment?: string;
  currentLivingSituation: string;
  economicDependents: string;
  familyContribution: string;
  ownsCar: string;
  carModel?: string;
  user: string;
}

function FormComplementaryData({
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
    watch,
    formState: { errors },
  } = useForm<IFormComplementaryData>();

  // Get current user
  const { user, isPending } = useUser2();

  // Create Request
  const { createRequest } = useCreateRequest<IFormComplementaryData>('complementaryData');

  // Update Request
  const { updateRequest } = useUpdateRequest<IFormComplementaryData>('complementaryData');

  // Get data if Exists
  const { data: requestData } = useRequest('complementaryData');

  // Update or Save
  const isEdditSession = Boolean(!requestData);

  // Action form type Create or Update
  const onSubmit = (data: IFormComplementaryData) => {
    if (requestData) {
      updateRequest({ newData: { ...data } });
    } else {
      createRequest({ ...data, user: user?.id || '' });
    }
  };

  // Conditional Field
  const isPreviousWorkInCompany = watch('previousWorkInCompany') === 'si';
  const isOwnsCar = watch('ownsCar') === 'si';

  // Loading data if Exists
  useEffect(() => {
    if (requestData) {
      console.log(requestData?.previousWorkDate);
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
        <Title as="h2">DATOS COMPLEMENTARIOS</Title>
        <FormContainer>
          <Field>
            <Label>R.F.C.</Label>
            <Input
              type="text"
              {...register('rfc', { required: 'Este campo es obligatorio' })}
            />
            {errors.rfc && <ErrorMessage>{errors.rfc.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label>No. Afiliación al IMSS</Label>
            <Input
              type="text"
              {...register('imssNumber', { required: 'Este campo es obligatorio' })}
            />
            {errors.imssNumber && (
              <ErrorMessage>{errors.imssNumber.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>CURP</Label>
            <Input
              type="text"
              {...register('curp', { required: 'Este campo es obligatorio' })}
            />
            {errors.curp && <ErrorMessage>{errors.curp.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label>No. Crédito Infonavit</Label>
            <Input
              type="text"
              {...register('infonavitCredit', { required: 'Este campo es obligatorio' })}
            />
            {errors.infonavitCredit && (
              <ErrorMessage>{errors.infonavitCredit.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>Afore</Label>
            <Input
              type="text"
              {...register('afore', { required: 'Este campo es obligatorio' })}
            />
            {errors.afore && <ErrorMessage>{errors.afore.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label>¿Disponibilidad para viajar?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('travelAvailability', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('travelAvailability', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.travelAvailability && (
              <ErrorMessage>{errors.travelAvailability.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>¿Podría cambiar de residencia?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('residenceChange', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('residenceChange', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.residenceChange && (
              <ErrorMessage>{errors.residenceChange.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>Licencia tipo</Label>
            <Input
              type="text"
              {...register('license', { required: 'Este campo es obligatorio' })}
            />
            {errors.license && <ErrorMessage>{errors.license.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label>¿Tiene familiares en DAI?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('familyInCompany', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('familyInCompany', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.familyInCompany && (
              <ErrorMessage>{errors.familyInCompany.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>¿Por qué medio se enteró del puesto?</Label>
            <Input
              type="text"
              {...register('jobSource', { required: 'Este campo es obligatorio' })}
            />
            {errors.jobSource && <ErrorMessage>{errors.jobSource.message}</ErrorMessage>}
          </Field>

          <Field>
            <Label>¿Ha trabajado en DAI?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('previousWorkInCompany', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('previousWorkInCompany', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.previousWorkInCompany && (
              <ErrorMessage>{errors.previousWorkInCompany.message}</ErrorMessage>
            )}
          </Field>
          {isPreviousWorkInCompany && (
            <>
              <Field>
                <Label>¿En qué Fecha?</Label>
                <Input type="date" {...register('previousWorkDate')} />
              </Field>

              <Field>
                <Label>¿En qué Departamento?</Label>
                <Input type="text" {...register('previousWorkDepartment')} />
              </Field>
            </>
          )}

          <Field>
            <Label>¿Con quién vive actualmente?</Label>
            <Input
              type="text"
              {...register('currentLivingSituation', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.currentLivingSituation && (
              <ErrorMessage>{errors.currentLivingSituation.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>¿Dependen personas económicamente de usted?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('economicDependents', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('economicDependents', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.economicDependents && (
              <ErrorMessage>{errors.economicDependents.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>¿Contribuye con el gasto familiar?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('familyContribution', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('familyContribution', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.familyContribution && (
              <ErrorMessage>{errors.familyContribution.message}</ErrorMessage>
            )}
          </Field>

          <Field>
            <Label>¿Posee Automóvil propio?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('ownsCar', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('ownsCar', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.ownsCar && <ErrorMessage>{errors.ownsCar.message}</ErrorMessage>}
          </Field>

          {isOwnsCar && (
            <Field>
              <Label>Marca y Modelo</Label>
              <Input type="text" {...register('carModel')} />
            </Field>
          )}
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

export default FormComplementaryData;
