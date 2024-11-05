import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
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
} from '../../../ui/FormPieces';

interface IFormKnowledgeExperience {
  // LANGUAGES
  english: {
    speakingPer: number;
    writtingPer: number;
  };
  secondLanguage: {
    language: string;
    speakingPer: number;
    writtingPer: number;
  };

  // EXP AREAS
  areas: string[];

  // PRACTICAL EXPERIENCE
  hasPracticalExperience: string;
  practicalExperience: string;
}

const FormKnowledgeExperience = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  const { register, handleSubmit, setValue, watch } = useForm<IFormKnowledgeExperience>();

  // Observa el valor actual de areas
  const areas = watch('areas') || [];

  const handleCheckboxChange = (value: string) => {
    const updatedAreas = areas.includes(value)
      ? areas.filter((area: string) => area !== value)
      : [...areas, value];

    setValue('areas', updatedAreas);
  };

  const onSubmit = (data: IFormKnowledgeExperience) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">CONOCIMIENTOS Y EXPERIENCIA</Title>
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

        <Title as="h3">Experiencia en:</Title>
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
            </FieldCheck>
          ))}
        </FormContainer>

        <FormContainer>
          <Field>
            <Label>¿Tiene experiencia práctica en el puesto que solicita?</Label>
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
          <Field>
            <Label>Especifique</Label>
            <Input
              type="text"
              id="practicalExperience"
              {...register('practicalExperience')}
            />
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
export default FormKnowledgeExperience;
