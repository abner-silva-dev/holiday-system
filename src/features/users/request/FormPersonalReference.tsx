import { useForm } from 'react-hook-form';
import Button from "../../../ui/Button";
import {
  Field,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Title,
} from "../../../ui/FormPieces";
import { useEffect, useState } from 'react';

interface IFormPersonalReference {
  person1: {
    name: string;
    duration: string;
    phone: string;
    occupation: string;
  };
  person2: {
    name: string;
    duration: string;
    phone: string;
    occupation: string;
  };
  person3: {
    name: string;
    duration: string;
    phone: string;
    occupation: string;
  };
}

const FormPersonalReference = ({ handleNext, handleBack }: { handleNext: () => void; handleBack: () => void; }) => {
  const { register, handleSubmit, reset } = useForm<IFormPersonalReference>();
  const [formData, setFormData] = useState<IFormPersonalReference | null>(null);

  useEffect(() => {
    // Restablece el formulario con los datos guardados
    if (formData) {
      reset(formData);
    }
  }, [formData, reset]);

  const onSubmit = (data: IFormPersonalReference) => {
    console.log(data);
    setFormData(data); // Guarda los datos del formulario en el estado
  };

  const handleBackButtonClick = () => {
    // Aquí puedes decidir qué hacer con los datos guardados al regresar
    handleBack();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">REFERENCIAS PERSONALES</Title>
        <Title as="h4">
          Favor de incluir los datos de 3 personas que lo conozcan bien, que no sean familiares
        </Title>

        <Title as="h3">Persona 1</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="person1Name">Nombre Completo</Label>
            <Input id="person1.name" type="text" {...register('person1.name', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person1Duration">Tiempo de Conocerle</Label>
            <Input id="person1.duration" type="text" {...register('person1.duration', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person1Phone">Teléfono / Celular</Label>
            <Input id="person1.phone" type="text" {...register('person1.phone', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person1Occupation">Ocupación</Label>
            <Input id="person1.occupation" type="text" {...register('person1.occupation', { required: true })} />
          </Field>
        </FormContainer>

        <Title as="h3">Persona 2</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="person2Name">Nombre Completo</Label>
            <Input id="person2.name" type="text" {...register('person2.name', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person2Duration">Tiempo de Conocerle</Label>
            <Input id="person2.duration" type="text" {...register('person2.duration', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person2Phone">Teléfono / Celular</Label>
            <Input id="person2.phone" type="text" {...register('person2.phone', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person2Occupation">Ocupación</Label>
            <Input id="person2.occupation" type="text" {...register('person2.occupation', { required: true })} />
          </Field>
        </FormContainer>

        <Title as="h3">Persona 3</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="person3Name">Nombre Completo</Label>
            <Input id="person3.name" type="text" {...register('person3.name', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person3Duration">Tiempo de Conocerle</Label>
            <Input id="person3.duration" type="text" {...register('person3.duration', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person3Phone">Teléfono / Celular</Label>
            <Input id="person3.phone" type="text" {...register('person3.phone', { required: true })} />
          </Field>
          <Field>
            <Label htmlFor="person3Occupation">Ocupación</Label>
            <Input id="person3.occupation" type="text" {...register('person3.occupation', { required: true })} />
          </Field>
        </FormContainer>

        <PageChange>
          <Button $variation="primary" onClick={handleBackButtonClick}>
            Atrás
          </Button>
          <Button $variation="confirm" type="submit">
            Guardar
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
