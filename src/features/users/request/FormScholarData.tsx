import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
import {
  ButtonNext,
  ButtonPrevious,
  ErrorMessage,
  Field,
  FieldRadio,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Title,
} from '../../../ui/FormPieces';
import { useRequest } from './useRequest';
import { useUser2 } from '../useUser';
import { useCreateRequest } from './useCreateRequest';
import { useUpdateRequest } from './useUpdateRequest';
import { useEffect } from 'react';
import { formatDate } from '../../../utils/helpers';

interface IFormScholarData {
  //SECONDARY
  secondary: {
    yearsCoursed: number;
    schoolName: string;
    startDate: string;
    endDate: string;
    hasCertificate: string;
  };
  //HIGH SCHOOL
  highSchool: {
    yearsCoursed: number;
    schoolName: string;
    startDate: string;
    endDate: string;
    hasCertificate: string;
  };

  //UNIVERSITY
  university: {
    yearsCoursed: number;
    schoolName: string;
    startDate: string;
    endDate: string;
    hasCertificate: string;
  };

  //DEGREE
  degree: {
    yearsCoursed: number;
    schoolName: string;
    startDate: string;
    endDate: string;
    hasCertificate: string;
    career: string;
  };

  currentStudying: string;
  currentStudySchedule: string;
  currentStudyName: string;
  currentSchool: string;

  user: string;
}

const FormScholarData = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  // const { register, handleSubmit } = useForm<IFormScholarData>();

  // const onSubmit = (data: IFormScholarData) => {
  //   console.log(data);
  // };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormScholarData>();

  const { user, isPending } = useUser2();

  // Create Request
  const { createRequest } = useCreateRequest<IFormScholarData>('scholarData');

  // Update Request
  const { updateRequest } = useUpdateRequest<IFormScholarData>('scholarData');

  const { data: requestData } = useRequest('scholarData');

  const isEdditSession = Boolean(!requestData);

  // Action form type Create or Update
  const onSubmit = (data: IFormScholarData) => {
    if (requestData) {
      updateRequest({ newData: { ...data } });
    } else {
      createRequest({ ...data, user: user?.id || '' });
    }
  };

  // Conditional Field
  const isCurrentStudying = watch('currentStudying') === 'si';

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
        <Title as="h2">DATOS ESCOLARES</Title>

        {/* SECUNDARIA */}
        <Title as="h3">Secundaria</Title>
        <FormContainer>
          <Field>
            <Label>Años Cursados*</Label>
            <Input
              type="number"
              id="secondary.yearsCoursed"
              {...register('secondary.yearsCoursed', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.secondary?.yearsCoursed && (
              <ErrorMessage>{errors.secondary.yearsCoursed.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Nombre de la Escuela*</Label>
            <Input
              type="text"
              id="secondary.schoolName"
              {...register('secondary.schoolName', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.secondary?.schoolName && (
              <ErrorMessage>{errors.secondary.schoolName.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Fecha de Inicio*</Label>
            <Input
              type="date"
              id="secondary.startDate"
              {...register('secondary.startDate', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.secondary?.startDate && (
              <ErrorMessage>{errors.secondary.startDate.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Fecha de Término*</Label>
            <Input
              type="date"
              id="secondary.endDate"
              {...register('secondary.endDate', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.secondary?.endDate && (
              <ErrorMessage>{errors.secondary.endDate.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Certificado o Título*</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                id="secHasCertificate"
                value="si"
                {...register('secondary.hasCertificate', {
                  required: 'Este campo es obligatorio',
                })}
              />
              <span>No</span>
              <Input
                type="radio"
                id="secondary.hasCertificate"
                value="no"
                {...register('secondary.hasCertificate', {
                  required: 'Este campo es obligatorio',
                })}
              />
            </FieldRadio>
            {errors.secondary?.hasCertificate && (
              <ErrorMessage>{errors.secondary.hasCertificate.message}</ErrorMessage>
            )}
          </Field>
        </FormContainer>

        {/* BACHILLERATO */}
        <Title as="h3">Bachillerato o Carrera Técnica</Title>
        <FormContainer>
          <Field>
            <Label>Años Cursados</Label>
            <Input
              type="number"
              id="highSchool.yearsCoursed"
              {...register('highSchool.yearsCoursed')}
            />
          </Field>
          <Field>
            <Label>Nombre de la Escuela</Label>
            <Input
              type="text"
              id="highSchool.schoolName"
              {...register('highSchool.schoolName')}
            />
          </Field>
          <Field>
            <Label>Fecha de Inicio</Label>
            <Input
              type="date"
              id="highSchool.startDate"
              {...register('highSchool.startDate')}
            />
          </Field>
          <Field>
            <Label>Fecha de Término</Label>
            <Input
              type="date"
              id="highSchool.endDate"
              {...register('highSchool.endDate')}
            />
          </Field>
          <Field>
            <Label>Certificado o Título</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                id="highSchool.hasCertificate"
                value="si"
                {...register('highSchool.hasCertificate')}
              />
              <span>No</span>
              <Input
                type="radio"
                id="highSchool.hasCertificate"
                value="no"
                {...register('highSchool.hasCertificate')}
              />
            </FieldRadio>
          </Field>
        </FormContainer>

        {/* UNIVERSIDAD */}
        <Title as="h3">Licenciatura</Title>
        <FormContainer>
          <Field>
            <Label>Años Cursados</Label>
            <Input
              type="number"
              id="university.yearsCoursed"
              {...register('university.yearsCoursed')}
            />
          </Field>
          <Field>
            <Label>Nombre de la Escuela</Label>
            <Input
              type="text"
              id="university.schoolName"
              {...register('university.schoolName')}
            />
          </Field>
          <Field>
            <Label>Fecha de Inicio</Label>
            <Input
              type="date"
              id="university.startDate"
              {...register('university.startDate')}
            />
          </Field>
          <Field>
            <Label>Fecha de Término</Label>
            <Input
              type="date"
              id="university.endDate"
              {...register('university.endDate')}
            />
          </Field>
          <Field>
            <Label>Certificado o Título</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                id="university.hasCertificate"
                value="si"
                {...register('university.hasCertificate')}
              />
              <span>No</span>
              <Input
                type="radio"
                id="university.hasCertificate"
                value="no"
                {...register('university.hasCertificate')}
              />
            </FieldRadio>
          </Field>
        </FormContainer>

        {/* ESPECIALIDAD Y OTROS */}
        <Title as="h3">Especialidad y Otros</Title>
        <FormContainer>
          <Field>
            <Label>Años Cursados</Label>
            <Input
              type="number"
              id="degree.yearsCoursed"
              {...register('degree.yearsCoursed')}
            />
          </Field>
          <Field>
            <Label>Nombre de la Escuela</Label>
            <Input
              type="text"
              id="degree.schoolName"
              {...register('degree.schoolName')}
            />
          </Field>
          <Field>
            <Label>Fecha de Inicio</Label>
            <Input type="date" id="degree.startDate" {...register('degree.startDate')} />
          </Field>
          <Field>
            <Label>Fecha de Término</Label>
            <Input type="date" id="degree.endDate" {...register('degree.endDate')} />
          </Field>
          <Field>
            <Label>Certificado o Título</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                id="degree.hasCertificate"
                value="si"
                {...register('degree.hasCertificate')}
              />
              <span>No</span>
              <Input
                type="radio"
                id="university.hasCertificate"
                value="no"
                {...register('degree.hasCertificate')}
              />
            </FieldRadio>
          </Field>
          <Field>
            <Label>Especifique Nombre de la Carrera</Label>
            <Input type="text" id="degree.career" {...register('degree.career')} />
          </Field>
        </FormContainer>

        <Title as="h3">Estudios Actuales</Title>
        <FormContainer>
          <Field>
            <Label>¿Estudia Actualmente?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                id="currentStudying"
                value="si"
                {...register('currentStudying')}
              />
              <span>No</span>
              <Input
                type="radio"
                id="currentStudying"
                value="no"
                {...register('currentStudying')}
              />
            </FieldRadio>
          </Field>
          {isCurrentStudying && (
            <>
              <Field>
                <Label>Horario</Label>
                <Input
                  type="text"
                  id="currentStudySchedule"
                  {...register('currentStudySchedule')}
                />
              </Field>
              <Field>
                <Label>¿Qué Estudia?</Label>
                <Input
                  type="text"
                  id="currentStudyName"
                  {...register('currentStudyName')}
                />
              </Field>
              <Field>
                <Label>Escuela</Label>
                <Input type="text" id="currentSchool" {...register('currentSchool')} />
              </Field>
            </>
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
};

export default FormScholarData;
