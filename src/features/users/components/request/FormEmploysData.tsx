import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';
import Button from '../../../../shared/ui/Button';
import {
  ButtonNext,
  ButtonPrevious,
  EmployControllers,
  ErrorMessage,
  Field,
  Form,
  FormContainer,
  Input,
  InputNumber,
  Label,
  Page,
  PageChange,
  Title,
} from '../../../../shared/ui/FormPieces';
import { useUser2 } from '../../hooks/useUser';
import { useCreateRequest } from './useCreateRequest';
import { useUpdateRequest } from './useUpdateRequest';
import { useRequest } from './useRequest';

interface Employ {
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

interface EmploysData {
  employs: Employ[];
  user: string;
}

interface FormEmploysDataProps {
  handleBack: () => void;
  handleNext: () => void;
}

function FormEmploysData({ handleBack, handleNext }: FormEmploysDataProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<EmploysData>({
    defaultValues: {
      employs: [{}], // Inicia con un solo objeto de empleo vacío
    },
  });

  // Obtener datos de usuario
  const { user, isPending } = useUser2();

  // Requests de creación y actualización
  const { createRequest } = useCreateRequest<EmploysData>('employData');
  const { updateRequest } = useUpdateRequest<EmploysData>('employData');

  // Obtener los datos si existen
  const { data: requestData } = useRequest('employData');

  const isEdditSession = Boolean(requestData);

  // Gestionar el estado de los empleos
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'employs', // Vincula con el nombre del campo que contiene los empleos
  });

  // Maneja el envío del formulario
  const onSubmit: SubmitHandler<EmploysData> = (data) => {
    if (requestData) {
      updateRequest({ newData: { ...data } });
    } else {
      createRequest({ ...data, user: user?.id || '' });
    }
  };

  // Rellenar el formulario si hay datos previos
  useEffect(() => {
    if (requestData) {
      reset({
        employs: requestData.employs || [{}], // Si no hay empleos, inicia con un objeto vacío
      });
    }
  }, [requestData, reset]);

  if (isPending) return <p>Cargando...</p>;

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Limitar a un máximo de 10 caracteres
    const maxLength = 10;
    const value = event.target.value.slice(0, maxLength);
    event.target.value = value;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">DATOS DE EMPLEOS</Title>

        {fields.map((item, index) => (
          <FormContainer key={item.id}>
            <Field>
              <Label>Nombre de la compañía*</Label>
              <Input
                type="text"
                {...register(`employs.${index}.companyName`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.companyName && (
                <ErrorMessage>{errors.employs[index].companyName?.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Giro*</Label>
              <Input
                type="text"
                {...register(`employs.${index}.businessField`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.businessField && (
                <ErrorMessage>
                  {errors.employs[index].businessField?.message}
                </ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Domicilio*</Label>
              <Input
                type="text"
                {...register(`employs.${index}.address`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.address && (
                <ErrorMessage>{errors.employs[index].address?.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Teléfono*</Label>
              <InputNumber
                type="number"
                onInput={handleInput}
                {...register(`employs.${index}.phone`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.phone && (
                <ErrorMessage>{errors.employs[index].phone?.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Fecha de Ingreso*</Label>
              <Input
                type="date"
                {...register(`employs.${index}.startDate`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.startDate && (
                <ErrorMessage>{errors.employs[index].startDate?.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Fecha de Salida*</Label>
              <Input
                type="date"
                {...register(`employs.${index}.endDate`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.endDate && (
                <ErrorMessage>{errors.employs[index].endDate?.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Puesto Desempeñado*</Label>
              <Input
                type="text"
                {...register(`employs.${index}.position`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.position && (
                <ErrorMessage>{errors.employs[index].position?.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Sueldo Final*</Label>
              <Input
                type="text"
                {...register(`employs.${index}.finalSalary`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.finalSalary && (
                <ErrorMessage>{errors.employs[index].finalSalary?.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Nombre de Jefe Inmediato*</Label>
              <Input
                type="text"
                {...register(`employs.${index}.immediateBoss`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.immediateBoss && (
                <ErrorMessage>
                  {errors.employs[index].immediateBoss?.message}
                </ErrorMessage>
              )}
            </Field>

            <Field>
              <Label>Motivo de Separación*</Label>
              <Input
                type="text"
                {...register(`employs.${index}.separationReason`, {
                  required: 'Este campo es obligatorio',
                })}
              />
              {errors.employs?.[index]?.separationReason && (
                <ErrorMessage>
                  {errors.employs[index].separationReason?.message}
                </ErrorMessage>
              )}
            </Field>
          </FormContainer>
        ))}

        <EmployControllers>
          <Button
            $variation="secondary"
            type="button"
            onClick={() => remove(fields.length - 1)}
            disabled={fields.length === 1}
          >
            Quitar Empleo
          </Button>
          <Button
            $variation="secondary"
            type="button"
            onClick={() =>
              append({
                companyName: '',
                businessField: '',
                address: '',
                phone: '',
                startDate: '',
                endDate: '',
                position: '',
                finalSalary: '',
                immediateBoss: '',
                separationReason: '',
              })
            }
            disabled={fields.length === 3}
          >
            Agregar Empleo
          </Button>
        </EmployControllers>

        <PageChange>
          <ButtonPrevious onClick={handleBack} />

          {/* Aquí se cambia entre el botón Guardar y Actualizar */}
          <Button $variation="confirm" type="submit">
            {isEdditSession ? 'Actualizar' : 'Guardar'}
          </Button>

          <ButtonNext onClick={handleNext} />
        </PageChange>
      </Page>
    </Form>
  );
}

export default FormEmploysData;
