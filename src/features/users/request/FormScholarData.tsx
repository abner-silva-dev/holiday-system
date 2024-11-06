import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
import {
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
}

const FormScholarData = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  const { register, handleSubmit } = useForm<IFormScholarData>();

  const onSubmit = (data: IFormScholarData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">DATOS ESCOLARES</Title>

        {/* SECUNDARIA */}
        <Title as="h3">Secundaria</Title>
        <FormContainer>
          <Field>
            <Label>Años Cursados</Label>
            <Input
              type="number"
              id="secondary.yearsCoursed"
              {...register('secondary.yearsCoursed')}
            />
          </Field>
          <Field>
            <Label>Nombre de la Escuela</Label>
            <Input
              type="text"
              id="secondary.schoolName"
              {...register('secondary.schoolName')}
            />
          </Field>
          <Field>
            <Label>Fecha de Inicio</Label>
            <Input
              type="date"
              id="secondary.startDate"
              {...register('secondary.startDate')}
            />
          </Field>
          <Field>
            <Label>Fecha de Término</Label>
            <Input
              type="date"
              id="secondary.endDate"
              {...register('secondary.endDate')}
            />
          </Field>
          <Field>
            <Label>Certificado o Título</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                id="secHasCertificate"
                value="si"
                {...register('secondary.hasCertificate', { required: true })}
              />
              <span>No</span>
              <Input
                type="radio"
                id="secondary.hasCertificate"
                value="no"
                {...register('secondary.hasCertificate', { required: true })}
              />
            </FieldRadio>
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
                {...register('highSchool.hasCertificate', { required: true })}
              />
              <span>No</span>
              <Input
                type="radio"
                id="highSchool.hasCertificate"
                value="no"
                {...register('highSchool.hasCertificate', { required: true })}
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
                {...register('university.hasCertificate', { required: true })}
              />
              <span>No</span>
              <Input
                type="radio"
                id="university.hasCertificate"
                value="no"
                {...register('university.hasCertificate', { required: true })}
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
                {...register('degree.hasCertificate', { required: true })}
              />
              <span>No</span>
              <Input
                type="radio"
                id="university.hasCertificate"
                value="no"
                {...register('degree.hasCertificate', { required: true })}
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
                {...register('currentStudying', { required: true })}
              />
              <span>No</span>
              <Input
                type="radio"
                id="currentStudying"
                value="no"
                {...register('currentStudying', { required: true })}
              />
            </FieldRadio>
          </Field>
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
            <Input type="text" id="currentStudyName" {...register('currentStudyName')} />
          </Field>
          <Field>
            <Label>Escuela</Label>
            <Input type="text" id="currentSchool" {...register('currentSchool')} />
          </Field>
        </FormContainer>

        <PageChange>
          <Button $variation="primary" onClick={handleBack}>
            Atrás
          </Button>
          <Button $variation="confirm" type="submit">
            Guardar
          </Button>
          <Button $variation="confirm" onClick={handleNext}>
            Siguiente
          </Button>
        </PageChange>
      </Page>
    </Form>
  );
};

export default FormScholarData;
