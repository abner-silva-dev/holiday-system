import { useForm, FieldValues } from 'react-hook-form';
import { useState } from 'react';
import Button from '../../../ui/Button';
import {
  ButtonNext,
  ButtonPrevious,
  EmployControllers,
  ErrorMessage,
  Field,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Title,
} from '../../../ui/FormPieces';

interface JobData {
  companyName: string;
  businessField: string;
  address: string;
  phone: string;
  startDate: string;
  endDate: string;
  position: string;
  finalSalary: string;
  immediateBoss: string;
  separationReason: string;
}

interface FormJobsDataProps {
  handleBack: () => void;
  handleNext: () => void;
}

function FormJobsData({ handleBack, handleNext }: FormJobsDataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [employs, setEmploys] = useState<JobData[]>([{} as JobData]);

  const addEmploy = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (employs.length < 3) setEmploys([...employs, {} as JobData]);
  };

  const removeEmploy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (employs.length > 1) setEmploys(employs.slice(0, -1));
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    handleNext();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">DATOS DE EMPLEOS</Title>
        {employs.map((_, index) => (
          <FormContainer key={index}>
            <Field>
              <Label>Nombre de la compañía</Label>
              <Input
                type="text"
                {...register(`employs.${index}.companyName`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.companyName && (
                <ErrorMessage>{errors.employs[index].companyName.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Giro</Label>
              <Input
                type="text"
                {...register(`employs.${index}.businessField`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.businessField && (
                <ErrorMessage>{errors.employs[index].businessField.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Domicilio</Label>
              <Input
                type="text"
                {...register(`employs.${index}.address`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.address && (
                <ErrorMessage>{errors.employs[index].address.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Teléfono</Label>
              <Input
                type="text"
                {...register(`employs.${index}.phone`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.phone && (
                <ErrorMessage>{errors.employs[index].phone.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Fecha de Ingreso</Label>
              <Input
                type="date"
                {...register(`employs.${index}.startDate`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.startDate && (
                <ErrorMessage>{errors.employs[index].startDate.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Fecha de Salida</Label>
              <Input
                type="date"
                {...register(`employs.${index}.endDate`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.endDate && (
                <ErrorMessage>{errors.employs[index].endDate.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Puesto Desempeñado</Label>
              <Input
                type="text"
                {...register(`employs.${index}.position`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.position && (
                <ErrorMessage>{errors.employs[index].position.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Sueldo Final</Label>
              <Input
                type="text"
                {...register(`employs.${index}.finalSalary`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.finalSalary && (
                <ErrorMessage>{errors.employs[index].finalSalary.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Nombre de Jefe Inmediato</Label>
              <Input
                type="text"
                {...register(`employs.${index}.immediateBoss`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.immediateBoss && (
                <ErrorMessage>{errors.employs[index].immediateBoss.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Motivo de Separación</Label>
              <Input
                type="text"
                {...register(`employs.${index}.separationReason`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.separationReason && (
                <ErrorMessage>
                  {errors.employs[index].separationReason.message}
                </ErrorMessage>
              )}
            </Field>
          </FormContainer>
        ))}

        <EmployControllers>
          <Button
            $variation="secondary"
            type="button"
            onClick={removeEmploy}
            disabled={employs.length === 1}
          >
            Quitar Empleo
          </Button>
          <Button
            $variation="secondary"
            type="button"
            onClick={addEmploy}
            disabled={employs.length === 3}
          >
            Agregar Empleo
          </Button>
        </EmployControllers>

        <PageChange>
          <ButtonPrevious onClick={handleBack} />

          <Button $variation="confirm" type="submit">
            Guardar
          </Button>

          <ButtonNext onClick={handleNext} />
        </PageChange>
      </Page>
    </Form>
  );
}

export default FormJobsData;
