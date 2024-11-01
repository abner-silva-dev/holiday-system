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
} from '../../../ui/FormPieces';
import Input from '../../../ui/Input';

function FormComplementaryData({
  handleBack,
  handleNext,
}: {
  handleBack: () => void;
  handleNext: () => void;
}) {
  return (
    <Form>
      <Page>
        <Title as="h2">DATOS COMPLEMENTARIOS</Title>
        <FormContainer>
          <Field>
            <Label>R.F.C.</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>No. Afiliación al IMSS</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>CURP</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>No. Crédito Infonavit</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Afore</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>¿Disponibilidad para viajar?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="travel"></Input>
              <span>No</span>
              <Input type="radio" name="travel"></Input>
            </FieldRadio>
          </Field>

          <Field>
            <Label>No. IMSS</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>No. Crédito Infonavit</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>¿Podría cambiar de residencia?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="residence"></Input>
              <span>No</span>
              <Input type="radio" name="residence"></Input>
            </FieldRadio>
          </Field>

          <Field>
            <Label>Licencia</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>¿Tiene familiares en DAI?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="family"></Input>
              <span>No</span>
              <Input type="radio" name="family"></Input>
            </FieldRadio>
          </Field>

          <Field>
            <Label>¿Por qué medio se enteró del puesto?</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>¿Ha trabajado en DAI?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="work-before"></Input>
              <span>No</span>
              <Input type="radio" name="work-before"></Input>
            </FieldRadio>
          </Field>

          <Field>
            <Label>¿En qué Fecha?</Label>
            <Input type="date"></Input>
          </Field>

          <Field>
            <Label>¿En qué Departamento?</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>¿Con quién vive actualmente?</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>¿Dependen personas económicamente de usted?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="depending"></Input>
              <span>No</span>
              <Input type="radio" name="depending"></Input>
            </FieldRadio>
          </Field>

          <Field>
            <Label>¿Contribuye con el gasto familiar?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="familiar-contribution"></Input>
              <span>No</span>
              <Input type="radio" name="familiar-contribution"></Input>
            </FieldRadio>
          </Field>

          <Field>
            <Label>¿Posee Automóvil propio?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="car"></Input>
              <span>No</span>
              <Input type="radio" name="car"></Input>
            </FieldRadio>
          </Field>

          <Field>
            <Label>Marca y Modelo</Label>
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
}

export default FormComplementaryData;
