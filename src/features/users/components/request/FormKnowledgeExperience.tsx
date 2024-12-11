import { useForm } from 'react-hook-form';
import Button from '../../../../shared/ui/Button';
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
  ButtonPrevious,
  ButtonNext,
  ErrorMessage,
} from '../../../../shared/ui/FormPieces';
import { useEffect } from 'react';
import { useUser2 } from '../../hooks/useUser';
import { useCreateRequest } from './useCreateRequest';
import { useUpdateRequest } from './useUpdateRequest';
import { useRequest } from './useRequest';
import { formatDate } from '../../../../shared/utils/helpers';

interface IFormKnowledgeExperience {
  english: {
    speakingPer: number;
    writtingPer: number;
  };
  secondLanguage: {
    language: string;
    speakingPer: number;
    writtingPer: number;
  };
  areas: string[];
  hasPracticalExperience: string;
  practicalExperience: string;
  user: string;
}

const FormKnowledgeExperience = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormKnowledgeExperience>();

  const { user, isPending } = useUser2();
  const { createRequest } =
    useCreateRequest<IFormKnowledgeExperience>('knowledgeExperience');
  const { updateRequest } =
    useUpdateRequest<IFormKnowledgeExperience>('knowledgeExperience');
  const { data: requestData } = useRequest('knowledgeExperience');

  const isEdditSession = Boolean(!requestData);

  const onSubmit = (data: IFormKnowledgeExperience) => {
    if (requestData) {
      updateRequest({ newData: { ...data } });
    } else {
      createRequest({ ...data, user: user?.id || '' });
    }
  };

  useEffect(() => {
    if (requestData) {
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

  // Conditional Field
  const itHasPracticalExperience = watch('hasPracticalExperience') === 'si';

  if (isPending) return <p>Cargando...</p>;

  const areas = watch('areas') || [];

  const handleCheckboxChange = (value: string) => {
    const updatedAreas = areas.includes(value)
      ? areas.filter((area: string) => area !== value)
      : [...areas, value];

    setValue('areas', updatedAreas);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">CONOCIMIENTOS Y EXPERIENCIA</Title>
        {/* Idioma Inglés */}
        <Title as="h3">Idioma Inglés</Title>
        <FormContainer>
          <Field>
            <Label>Habla</Label>
            <Percentage>
              <Input
                type="number"
                id="english.speakingPer"
                {...register('english.speakingPer', { required: true })}
              />
              <span>%</span>
            </Percentage>
          </Field>
          <Field>
            <Label>Escribe</Label>
            <Percentage>
              <Input
                type="number"
                id="english.writtingPer"
                {...register('english.writtingPer', { required: true })}
              />
              <span>%</span>
            </Percentage>
          </Field>
        </FormContainer>

        {/* Otro Idioma */}
        <Title as="h3">Otro Idioma</Title>
        <FormContainer>
          <Field>
            <Label>Idioma</Label>
            <Input
              type="text"
              id="secondLanguage.language"
              {...register('secondLanguage.language')}
            />
          </Field>
          <Field>
            <Label>Habla</Label>
            <Percentage>
              <Input
                type="number"
                id="secondLanguage.speakingPer"
                {...register('secondLanguage.speakingPer')}
              />
              <span>%</span>
            </Percentage>
          </Field>
          <Field>
            <Label>Escribe</Label>
            <Percentage>
              <Input
                type="number"
                id="secondLanguage.writtingPer"
                {...register('secondLanguage.writtingPer')}
              />
              <span>%</span>
            </Percentage>
          </Field>
        </FormContainer>

        {/* Áreas de Experiencia */}
        <Title as="h3">Experiencia en*:</Title>
        <FormContainer>
          {[
            'Compras',
            'Cred. y Cob.',
            'Almacén',
            'Comercio Ext.',
            'Ventas',
            'Rel. Públicas',
            'Contabilidad',
            'Mecánico',
            'Mercadotecnia',
            'Paquetes Software',
            'Publicidad',
            'Secretariado',
            'Promotora',
          ].map((area) => (
            <FieldCheck key={area}>
              <Label>{area}</Label>
              <Input
                type="checkbox"
                value={area}
                checked={areas.includes(area)}
                onChange={() => handleCheckboxChange(area)}
              />
              {errors.areas && <ErrorMessage>{errors.areas.message}</ErrorMessage>}
            </FieldCheck>
          ))}
        </FormContainer>

        {/* Experiencia Práctica */}
        <FormContainer>
          <Field>
            <Label>¿Tiene experiencia práctica en el puesto que solicita?*</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input
                type="radio"
                value="si"
                {...register('hasPracticalExperience', { required: true })}
              />
              <span>No</span>
              <Input
                type="radio"
                value="no"
                {...register('hasPracticalExperience', { required: true })}
              />
            </FieldRadio>
          </Field>
          {itHasPracticalExperience && (
            <Field>
              <Label>Especifique</Label>
              <Input
                type="text"
                id="practicalExperience"
                {...register('practicalExperience')}
              />
            </Field>
          )}
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

export default FormKnowledgeExperience;
