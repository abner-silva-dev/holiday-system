import Button from "../../../ui/Button";
import { Field, Form, FormContainer, Input, Label, Page, PageChange, Title } from "../../../ui/FormPieces";

const FormPersonalReference = ({ handleNext, handleBack }: {handleNext:()=> void, handleBack:() => void }) => {
return(
    <Form>
    <Page>
    <Title as="h2">REFERENCIAS PERSONALES</Title>
    <Title as="h4">
      Favor de incluir los datos de 3 personas que lo conozcan bien, que no sean
      familiares
    </Title>

    <Title as="h3">Persona 1</Title>
    <FormContainer>
      <Field>
        <Label>Nombre Completo</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Tiempo de Conocerle</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Teléfono / Celular</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Ocupación</Label>
        <Input type="text"></Input>
      </Field>
    </FormContainer>

    <Title as="h3">Persona 2</Title>
    <FormContainer>
      <Field>
        <Label>Nombre Completo</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Tiempo de Conocerle</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Teléfono / Celular</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Ocupación</Label>
        <Input type="text"></Input>
      </Field>
    </FormContainer>

    <Title as="h3">Persona 3</Title>
    <FormContainer>
      <Field>
        <Label>Nombre Completo</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Tiempo de Conocerle</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Teléfono / Celular</Label>
        <Input type="text"></Input>
      </Field>
      <Field>
        <Label>Ocupación</Label>
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
export default FormPersonalReference;