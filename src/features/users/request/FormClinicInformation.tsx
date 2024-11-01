import Button from "../../../ui/Button"
import { Field, FieldCheck, FieldRadio, Form, FormContainer, Input, Label, Page, PageChange, Percentage, Title } from "../../../ui/FormPieces"

const FormClinicInformation = ({ handleBack }: { handleBack: () => void }) => {
    return(
        <Form>
        <Page>
            <Title as="h2">INFORMACIÓN CLÍNICA</Title>
            <FormContainer>
              <Field>
                <Label>Estatura</Label>
                <Percentage>
                  <Input type="number"></Input>
                  <span>cm</span>
                </Percentage>
              </Field>
              <Field>
                <Label>Peso</Label>
                <Percentage>
                  <Input type="number"></Input>
                  <span>Kg</span>
                </Percentage>
              </Field>
              <Field>
                <Label>Tipo de Sangre</Label>
                <Input type="text"></Input>
              </Field>
              <Field>
                <Label>
                  ¿Padece o padeció enfermedades que necesiten atención médica?
                </Label>
                <FieldRadio>
                  <span>Sí</span>
                  <Input type="radio" name="car"></Input>
                  <span>No</span>
                  <Input type="radio" name="car"></Input>
                </FieldRadio>
              </Field>
              <Field>
                <Label>¿Qué enfermedades?</Label>
                <Input type="text"></Input>
              </Field>
              <Field>
                <Label>
                  ¿En el transcurso del último año ha tenido algún tipo de intervención
                  quirúrgica?
                </Label>
                <FieldRadio>
                  <span>Sí</span>
                  <Input type="radio" name="car"></Input>
                  <span>No</span>
                  <Input type="radio" name="car"></Input>
                </FieldRadio>
              </Field>
              <Field>
                <Label>¿De qué tipo?</Label>
                <Input type="text"></Input>
              </Field>
              <Field>
                <Label>
                  ¿Tiene algún inpedimento físico que lo limite en su trabajo?
                </Label>
                <FieldRadio>
                  <span>Sí</span>
                  <Input type="radio" name="car"></Input>
                  <span>No</span>
                  <Input type="radio" name="car"></Input>
                </FieldRadio>
              </Field>
            </FormContainer>
            <FieldCheck>
              <Label>
                Certifico que la información aquí proporcionada es verídica, por lo que
                autorizo a Distribuidora de Auto Industrias, S.A de C.V, a corroborarla
                cuestionando a las referencias señaladas tanto sobre mi conducta personal
                como laboral, así como el uso de mis datos personales con base en el aviso
                de privacidad de la empresa, el cual podré consultar en www.dai.com.mx,
                reconociemdo que la presente solicitud no significa el establecimiento de
                ninguna relación laboral, ni crea el compromiso de que ésta me otorgue.
              </Label>
              <Input type="checkbox"></Input>
            </FieldCheck>
            <PageChange>
              <Button $variation="primary" onClick={handleBack}>
                Atrás
              </Button>
            </PageChange>
          </Page>
          </Form>
    );
}

export default FormClinicInformation