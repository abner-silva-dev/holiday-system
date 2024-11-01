import Button from '../../../ui/Button';
import {
  Field,
  FieldCheck,
  FieldRadio,
  FormContainer,
  Label,
  Page,
  PageChange,
  Percentage,
  Title,
  Input,
  Form,
} from '../../../ui/FormPieces';

const FormKnowledgeExperience = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  return (
    <Form>
      <Page>
        <Title as="h2">CONOCIMIENTOS Y EXPERIENCIA</Title>
        <Title as="h3">Idioma Inglés</Title>
        <FormContainer>
          <Field>
            <Label>Habla</Label>
            <Percentage>
              <Input type="number"></Input>
              <span>%</span>
            </Percentage>
          </Field>
          <Field>
            <Label>Escribe</Label>
            <Percentage>
              <Input type="number"></Input>
              <span>%</span>
            </Percentage>
          </Field>
        </FormContainer>

        <Title as="h3">Otro Idioma</Title>
        <FormContainer>
          <Field>
            <Label>Idioma</Label>
            <Input type="text"></Input>
          </Field>
          <Field>
            <Label>Habla</Label>
            <Percentage>
              <Input type="number"></Input>
              <span>%</span>
            </Percentage>
          </Field>
          <Field>
            <Label>Escribe</Label>
            <Percentage>
              <Input type="number"></Input>
              <span>%</span>
            </Percentage>
          </Field>
        </FormContainer>

        <Title as="h3">Experiencia en:</Title>
        <FormContainer>
          <FieldCheck>
            <Label>Compras</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Cred. y Cob.</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Almacén</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Comer. Ext.</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Ventas</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Rel. Públicas</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Contabilidad</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Mecánico</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Compras</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Mercadotecnia</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Paquetes Software</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Publicidad</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Secretariado</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
          <FieldCheck>
            <Label>Promotora</Label>
            <Input type="checkbox"></Input>
          </FieldCheck>
        </FormContainer>

        <FormContainer>
          <Field>
            <Label>¿Tiene experiencia práctica en el puesto que solicita?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" name="car"></Input>
              <span>No</span>
              <Input type="radio" name="car"></Input>
            </FieldRadio>
          </Field>
          <Field>
            <Label>Especifique</Label>
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
export default FormKnowledgeExperience;
