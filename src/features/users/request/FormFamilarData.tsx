import { useForm } from 'react-hook-form';
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

interface IFormFamiliarData {
  father: {
    name: string;
    lives: boolean;
    age: number;
    ocupation: string;
    address: string;
  };
  mother: {
    name: string;
    lives: boolean;
    age: number;
    ocupation: string;
    address: string;
  };
  couple: {
    name: string;
    lives: boolean;
    age: number;
    ocupation: string;
    address: string;
  };
  firstSon: {
    name: string;
    genre: string;
    age: number;
    ocupation: string;
    address: string;
  };
  secondSon: {
    name: string;
    genre: string;
    age: number;
    ocupation: string;
    address: string;
  };
  thirdSon: {
    name: string;
    genre: string;
    age: number;
    ocupation: string;
    address: string;
  };
}

const FormFamiliarData = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  const { register, handleSubmit } = useForm<IFormFamiliarData>();

  const onSubmit = (data: IFormFamiliarData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">DATOS FAMILIARES</Title>

        {/* Padre */}
        <Title as="h3">Padre</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text" {...register('father.name')} />
          </Field>
          <Field>
            <Label>¿Vive?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" value="true" {...register('father.lives')} />
              <span>No</span>
              <Input type="radio" value="false" {...register('father.lives')} />
            </FieldRadio>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number" {...register('father.age')} />
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text" {...register('father.ocupation')} />
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text" {...register('father.address')} />
          </Field>
        </FormContainer>

        {/* Madre */}
        <Title as="h3">Madre</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text" {...register('mother.name')} />
          </Field>
          <Field>
            <Label>¿Vive?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" value="true" {...register('mother.lives')} />
              <span>No</span>
              <Input type="radio" value="false" {...register('mother.lives')} />
            </FieldRadio>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number" {...register('mother.age')} />
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text" {...register('mother.ocupation')} />
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text" {...register('mother.address')} />
          </Field>
        </FormContainer>

        {/* Esposo(a) */}
        <Title as="h3">Esposo(a)</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text" {...register('couple.name')} />
          </Field>
          <Field>
            <Label>¿Vive?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input type="radio" value="true" {...register('couple.lives')} />
              <span>No</span>
              <Input type="radio" value="false" {...register('couple.lives')} />
            </FieldRadio>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number" {...register('couple.age')} />
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text" {...register('couple.ocupation')} />
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text" {...register('couple.address')} />
          </Field>
        </FormContainer>

        {/* Hijo 1 */}
        <Title as="h3">Hijo 1</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text" {...register('firstSon.name')} />
          </Field>
          <Field>
            <Label>Sexo</Label>
            <Select {...register('firstSon.genre')}>
              <option value="">Seleccione una opción...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Select>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number" {...register('firstSon.age')} />
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text" {...register('firstSon.ocupation')} />
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text" {...register('firstSon.address')} />
          </Field>
        </FormContainer>

        {/* Hijo 2 */}
        <Title as="h3">Hijo 2</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text" {...register('secondSon.name')} />
          </Field>
          <Field>
            <Label>Sexo</Label>
            <Select {...register('secondSon.genre')}>
              <option value="">Seleccione una opción...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Select>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number" {...register('secondSon.age')} />
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text" {...register('secondSon.ocupation')} />
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text" {...register('secondSon.address')} />
          </Field>
        </FormContainer>

        {/* Hijo 3 */}
        <Title as="h3">Hijo 3</Title>
        <FormContainer>
          <Field>
            <Label>Nombre Completo</Label>
            <Input type="text" {...register('thirdSon.name')} />
          </Field>
          <Field>
            <Label>Sexo</Label>
            <Select {...register('thirdSon.genre')}>
              <option value="">Seleccione una opción...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Select>
          </Field>
          <Field>
            <Label>Edad</Label>
            <Input type="number" {...register('thirdSon.age')} />
          </Field>
          <Field>
            <Label>Ocupación</Label>
            <Input type="text" {...register('thirdSon.ocupation')} />
          </Field>
          <Field>
            <Label>Domicilio</Label>
            <Input type="text" {...register('thirdSon.address')} />
          </Field>
        </FormContainer>

        <PageChange>
          <Button $variation="primary" onClick={handleBack}>
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
};

export default FormFamiliarData;
