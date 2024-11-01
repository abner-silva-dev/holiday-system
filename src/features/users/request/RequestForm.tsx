import Heading from '../../../ui/Heading';
import Button from '../../../ui/Button';
import { useState } from 'react';

import {
  EmployControllers,
  Field,
  FieldCheck,
  FieldRadio,
  Form,
  FormContainer,
  InitialContainer,
  Input,
  Label,
  Page,
  PageChange,
  Percentage,
  Section,
  Select,
  Title,
} from '../../../ui/FormPieces';
import FormPersonalData from './FormPersonalData';
import FormComplementaryData from './FormComplementaryData';
import FormJobsData from './FormJobsData';

const RequestForm = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handleBack = () => setPage((prevPage) => prevPage - 1);

  return (
    <Section>
      {page === 0 && (
        <InitialContainer>
          <Heading as="h1">Bienvenido</Heading>
          <Heading as="h2">
            Haga clic en continuar para comenzar a llenar la solicitud de empleo
          </Heading>
          <Button $variation="primary" onClick={handleNext}>
            COMENZAR
          </Button>
        </InitialContainer>
      )}

      <Form>
        {page === 1 && <FormPersonalData handleNext={handleNext} />}
        {page === 2 && (
          <FormComplementaryData handleNext={handleNext} handleBack={handleBack} />
        )}
        {page === 3 && <FormJobsData handleNext={handleNext} handleBack={handleBack} />}

        {page === 4 && (
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
        )}

        {page === 5 && (
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
        )}
        {page === 6 && (
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
        )}
        {page === 7 && (
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
        )}
        {page === 8 && (
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
        )}
      </Form>
    </Section>
  );
};

export default RequestForm;
