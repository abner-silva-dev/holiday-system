import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
import {
  ButtonNext,
  ButtonPrevious,
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
import { useRequest } from './useRequest';
import { useCreateRequest } from './useCreateRequest';
import { useUpdateRequest } from './useUpdateRequest';
import { useUser2 } from '../useUser';
import { useEffect } from 'react';
import { formatDate } from '../../../utils/helpers';

interface IFormFamiliarData {
  father: {
    name: string;
    lives: string;
    age: number;
    ocupation: string;
    address: string;
  };
  mother: {
    name: string;
    lives: string;
    age: number;
    ocupation: string;
    address: string;
  };
  couple: {
    name: string;
    lives: string;
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
  user: string;
}

const FormFamiliarData = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  // const { register, handleSubmit } = useForm<IFormFamiliarData>();

  // const onSubmit = (data: IFormFamiliarData) => {
  //   console.log(data);
  // };

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors },
  } = useForm<IFormFamiliarData>();

  // Get current user
  const { user, isPending } = useUser2();

  // Create Request
  const { createRequest } = useCreateRequest<IFormFamiliarData>('familiarData');

  // Update Request
  const { updateRequest } = useUpdateRequest<IFormFamiliarData>('familiarData');

  // Get data if Exists
  const { data: requestData } = useRequest('familiarData');

  // Update or Save
  const isEdditSession = Boolean(!requestData);

  // Action form type Create or Update
  const onSubmit = (data: IFormFamiliarData) => {
    if (requestData) {
      updateRequest({ newData: { ...data } });
    } else {
      createRequest({ ...data, user: user?.id || '' });
    }
  };

  // Loading data if Exists
  useEffect(() => {
    if (requestData) {
      console.log(requestData?.previousWorkDate);
      const previousWorkDateFormat = formatDate(requestData?.previousWorkDate + '', {
        formatDate: 'yyyy-mm-dd',
        separationBy: '-',
        spaces: false,
      });

      reset({
        ...requestData,
        previousWorkDate: previousWorkDateFormat,
      });
    }
  }, [requestData, reset]);

  if (isPending) return <p>Cargando...</p>;

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
              <Input type="radio" value="si" {...register('father.lives')} />
              <span>No</span>
              <Input type="radio" value="no" {...register('father.lives')} />
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
              <Input type="radio" value="si" {...register('mother.lives')} />
              <span>No</span>
              <Input type="radio" value="no" {...register('mother.lives')} />
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
              <Input type="radio" value="si" {...register('couple.lives')} />
              <span>No</span>
              <Input type="radio" value="no" {...register('couple.lives')} />
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
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
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
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
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
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
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
          <ButtonPrevious onClick={handleBack} />

          <Button $variation="confirm" type="submit">
            {isEdditSession ? 'Guardar' : 'Actualizar'}
          </Button>

          <ButtonNext onClick={handleNext} />
        </PageChange>
      </Page>
    </Form>
  );
};

export default FormFamiliarData;
