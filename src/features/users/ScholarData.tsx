import Button from '../../ui/Button';
import {
  Field,
  FieldRadio,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Title,
} from '../../ui/FormPieces';

const ScholarData = () => {
  return (
    <Page>
      <Title as="h2">DATOS ESCOLARES</Title>
      <Title as="h3">Secundaria</Title>
      <FormContainer>
        <Field>
          <Label>Años Cursados</Label>
          <Input type="number"></Input>
        </Field>
        <Field>
          <Label>Nombre de la Escuela</Label>
          <Input type="text"></Input>
        </Field>
        <Field>
          <Label>Fecha de Inicio</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Fecha de Término</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Certificado o Título</Label>
          <FieldRadio>
            <span>Sí</span>
            <Input type="radio" name="car"></Input>
            <span>No</span>
            <Input type="radio" name="car"></Input>
          </FieldRadio>
        </Field>
      </FormContainer>

      <Title as="h3">Bachillerato ó Carrera Técnica</Title>
      <FormContainer>
        <Field>
          <Label>Años Cursados</Label>
          <Input type="number"></Input>
        </Field>
        <Field>
          <Label>Nombre de la Escuela</Label>
          <Input type="text"></Input>
        </Field>
        <Field>
          <Label>Fecha de Inicio</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Fecha de Término</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Certificado o Título</Label>
          <FieldRadio>
            <span>Sí</span>
            <Input type="radio" name="car"></Input>
            <span>No</span>
            <Input type="radio" name="car"></Input>
          </FieldRadio>
        </Field>
      </FormContainer>

      <Title as="h3">Licenciatura</Title>
      <FormContainer>
        <Field>
          <Label>Años Cursados</Label>
          <Input type="number"></Input>
        </Field>
        <Field>
          <Label>Nombre de la Escuela</Label>
          <Input type="text"></Input>
        </Field>
        <Field>
          <Label>Fecha de Inicio</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Fecha de Término</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Certificado o Título</Label>
          <FieldRadio>
            <span>Sí</span>
            <Input type="radio" name="car"></Input>
            <span>No</span>
            <Input type="radio" name="car"></Input>
          </FieldRadio>
        </Field>
      </FormContainer>

      <Title as="h3">Especialidad y Otros</Title>
      <FormContainer>
        <Field>
          <Label>Años Cursados</Label>
          <Input type="number"></Input>
        </Field>
        <Field>
          <Label>Nombre de la Escuela</Label>
          <Input type="text"></Input>
        </Field>
        <Field>
          <Label>Fecha de Inicio</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Fecha de Término</Label>
          <Input type="date"></Input>
        </Field>
        <Field>
          <Label>Certificado o Título</Label>
          <FieldRadio>
            <span>Sí</span>
            <Input type="radio" name="car"></Input>
            <span>No</span>
            <Input type="radio" name="car"></Input>
          </FieldRadio>
        </Field>
        <Field>
          <Label>Especifique Nombre de la Carrera</Label>
          <Input type="text"></Input>
        </Field>
      </FormContainer>

      <Title as="h3">Estudios Actuales</Title>
      <FormContainer>
        <Field>
          <Label>¿Estudia Actualmente?</Label>
          <FieldRadio>
            <span>Sí</span>
            <Input type="radio" name="car"></Input>
            <span>No</span>
            <Input type="radio" name="car"></Input>
          </FieldRadio>
        </Field>
        <Field>
          <Label>Horario</Label>
          <Input type="text"></Input>
        </Field>
        <Field>
          <Label>¿Qué Estudia?</Label>
          <Input type="text"></Input>
        </Field>
        <Field>
          <Label>Escuela</Label>
          <Input type="text"></Input>
        </Field>
      </FormContainer>
      <PageChange>
        <Button $variation="primary" onClick={handleBack}>
          Atrás
        </Button>

        <Button $variation="confirm" onClick={handleNext}>
          Siguiente
        </Button>
      </PageChange>
    </Page>
  );
};

export default ScholarData;
