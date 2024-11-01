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
<<<<<<< HEAD
import FormPersonalReference from './FormPersonalReference';
=======
import FormScholarData from './FormScholarData';
import FormKnowledgeExperience from './FormKnowledgeExperience';
import FormFamiliarData from './FormFamilarData';

import FormComplementaryData from './FormComplementaryData';
import FormJobsData from './FormJobsData';
>>>>>>> 1e1c7711023d30c266522a4397abc7b1f7978596

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
          <FormScholarData handleNext={handleNext} handleBack={handleBack} />
        )}

        {page === 5 && (
          <FormKnowledgeExperience handleNext={handleNext} handleBack={handleBack} />
        )}
        {page === 6 && (
          <FormFamiliarData handleNext={handleNext} handleBack={handleBack} />
        )}
        {page === 7 && (
         <FormPersonalReference handleNext={handleNext} handleBack={handleBack}/>)}
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
