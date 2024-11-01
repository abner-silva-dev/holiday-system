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
  Select,
  Title,
} from '../../../ui/FormPieces';

const FormFamiliarData = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  return (
    <Form>
      <Page>
        <Title as="h2">DATOS FAMILIARES</Title>
        <Title as="h3">Padre</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>¿Vive?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="car"></Input>
              <span>No</span>
              <Input type="radio" name="car"></Input>
            </FieldRadio>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number"></Input>
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text"></Input>
          </Field>
        </FormContainer>
        <Title as="h3">Madre</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>¿Vive?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="car"></Input>
              <span>No</span>
              <Input type="radio" name="car"></Input>
            </FieldRadio>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number"></Input>
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text"></Input>
          </Field>
        </FormContainer>
        <Title as="h3">Esposo(a)</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>¿Vive?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="car"></Input>
              <span>No</span>
              <Input type="radio" name="car"></Input>
            </FieldRadio>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number"></Input>
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text"></Input>
          </Field>
        </FormContainer>

        <Title as="h3">Hijo 1</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Sexo</Label>
            <Select>
              <option>Seleccione una opción...</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </Select>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number"></Input>
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text"></Input>
          </Field>
        </FormContainer>
        <Title as="h3">Hijo 2</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Sexo</Label>
            <Select>
              <option>Seleccione una opción...</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </Select>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number"></Input>
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text"></Input>
          </Field>
        </FormContainer>
        <Title as="h3">Hijo 3</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Sexo</Label>
            <Select>
              <option>Seleccione una opción...</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </Select>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number"></Input>
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Domicilio</Label>
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
    </Form>
  );
};

export default FormFamiliarData;
