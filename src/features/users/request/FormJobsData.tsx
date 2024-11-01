import { useState } from 'react';
import Button from '../../../ui/Button';
import {
  EmployControllers,
  Field,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Title,
} from '../../../ui/FormPieces';

function FormJobsData({
  handleBack,
  handleNext,
}: {
  handleBack: () => void;
  handleNext: () => void;
}) {
  const [employs, setEmploys] = useState([{}]); // Almacena los formularios de empleo (inicia con 1)

  // Función para agregar un formulario de empleo
  const addEmploy = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault(); // Evita que el formulario se envíe
    if (employs.length < 3) {
      setEmploys([...employs, {}]);
    }
  };

  // Función para quitar un formulario de empleo
  const removeEmploy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Evita que el formulario se envíe
    if (employs.length > 1) {
      setEmploys(employs.slice(0, -1));
    }
  };

  return (
    <Form>
      <Page>
        <Title as="h2">DATOS DE EMPLEOS</Title>
        {employs.map((_, index) => (
          <FormContainer key={index}>
            <Field>
              <Label>Nombre de la compañía</Label>
              <Input type="text"></Input>
            </Field>
            <Field>
              <Label>Giro</Label>
              <Input type="text"></Input>
            </Field>
            <Field>
              <Label>Domicilio</Label>
              <Input type="text"></Input>
            </Field>
            <Field>
              <Label>Teléfono</Label>
              <Input type="text"></Input>
            </Field>
            <Field>
              <Label>Fecha de Ingreso</Label>
              <Input type="date"></Input>
            </Field>
            <Field>
              <Label>Fecha de Salida</Label>
              <Input type="date"></Input>
            </Field>
            <Field>
              <Label>Puesto Desempeñado</Label>
              <Input type="text"></Input>
            </Field>
            <Field>
              <Label>Sueldo Final</Label>
              <Input type="text"></Input>
            </Field>
            <Field>
              <Label>Nombre de Jefe Inmediato</Label>
              <Input type="text"></Input>
            </Field>
            <Field>
              <Label>Motivo de Separación</Label>
              <Input type="text"></Input>
            </Field>
          </FormContainer>
        ))}

        <EmployControllers>
          <Button
            $variation="secondary"
            type="button" // Añadir este atributo
            onClick={removeEmploy}
            disabled={employs.length === 1}
          >
            Quitar Empleo
          </Button>

          <Button
            $variation="secondary"
            type="button" // Añadir este atributo
            onClick={addEmploy}
            disabled={employs.length === 3}
          >
            Agregar Empleo
          </Button>
        </EmployControllers>

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

export default FormJobsData;
