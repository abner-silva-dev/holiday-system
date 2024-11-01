import Button from '../../../ui/Button';
import {
  Field,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Select,
  Title,
} from '../../../ui/FormPieces';

function FormPersonalData({ handleNext }: { handleNext: () => void }) {
  return (
    <Form>
      <Page>
        <Title as="h2">DATOS PERSONALES</Title>
        <FormContainer>
          <Field>
            <Label>Nombre(s)</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Apellido Paterno</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Apellido Materno</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Edad</Label>
            <Input type="number"></Input>
          </Field>

          <Field>
            <Label>Sexo</Label>
            <Select>
              <option>Seleccione una opción...</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Indefinido</option>
            </Select>
          </Field>

          <Field>
            <Label>Domicilio: Calle, Número, Colonia y Delegación</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Código Postal</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>E-Mail</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Estado Civil</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Teléfono Particular</Label>
            <Input type="text"></Input>
          </Field>

          <Field>
            <Label>Celular</Label>
            <Input type="text"></Input>
          </Field>
        </FormContainer>
        <PageChange>
          <Button $variation="confirm" onClick={handleNext}>
            Siguiente
          </Button>
        </PageChange>
      </Page>
    </Form>
  );
}

export default FormPersonalData;
