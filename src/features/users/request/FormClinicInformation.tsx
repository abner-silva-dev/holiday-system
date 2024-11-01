import { useForm } from 'react-hook-form';
import Button from "../../../ui/Button";
import {
  Field,
  FieldCheck,
  FieldRadio,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Percentage,
  Title,
} from "../../../ui/FormPieces";

interface IFormClinicInformation {
  height: number;
  weight: number;
  bloodType: string;
  hasMedicalConditions: string;
  medicalConditions: string;
  hasSurgery: string;
  surgeryType: string;
  hasPhysicalImpediment: string;
  certifyInformation: boolean;
}

const FormClinicInformation = ({ handleBack }: { handleBack: () => void }) => {
  const { register, handleSubmit } = useForm<IFormClinicInformation>();

  const onSubmit = (data: IFormClinicInformation) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">INFORMACIÓN CLÍNICA</Title>
        <FormContainer>
          <Field>
            <Label htmlFor="height">Estatura</Label>
            <Percentage>
              <Input id="height" type="number" {...register('height', { required: true })} />
              <span>cm</span>
            </Percentage>
          </Field>
          <Field>
            <Label htmlFor="weight">Peso</Label>
            <Percentage>
              <Input id="weight" type="number" {...register('weight', { required: true })} />
              <span>Kg</span>
            </Percentage>
          </Field>
          <Field>
            <Label htmlFor="bloodType">Tipo de Sangre</Label>
            <Input id="bloodType" type="text" {...register('bloodType', { required: true })} />
          </Field>
          <Field>
            <Label>¿Padece o padeció enfermedades que necesiten atención médica?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input id="hasMedicalConditionsYes" type="radio" value="Sí" {...register('hasMedicalConditions')} />
              <span>No</span>
              <Input id="hasMedicalConditionsNo" type="radio" value="No" {...register('hasMedicalConditions')} />
            </FieldRadio>
          </Field>
          <Field>
            <Label htmlFor="medicalConditions">¿Qué enfermedades?</Label>
            <Input id="medicalConditions" type="text" {...register('medicalConditions')} />
          </Field>
          <Field>
            <Label>¿En el transcurso del último año ha tenido algún tipo de intervención quirúrgica?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input id="hasSurgeryYes" type="radio" value="Sí" {...register('hasSurgery')} />
              <span>No</span>
              <Input id="hasSurgeryNo" type="radio" value="No" {...register('hasSurgery')} />
            </FieldRadio>
          </Field>
          <Field>
            <Label htmlFor="surgeryType">¿De qué tipo?</Label>
            <Input id="surgeryType" type="text" {...register('surgeryType')} />
          </Field>
          <Field>
            <Label>¿Tiene algún impedimento físico que lo limite en su trabajo?</Label>
            <FieldRadio>
              <span>Sí</span>
              <Input id="hasPhysicalImpedimentYes" type="radio" value="Sí" {...register('hasPhysicalImpediment')} />
              <span>No</span>
              <Input id="hasPhysicalImpedimentNo" type="radio" value="No" {...register('hasPhysicalImpediment')} />
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
            reconociendo que la presente solicitud no significa el establecimiento de
            ninguna relación laboral, ni crea el compromiso de que ésta me otorgue.
          </Label>
          <Input id="certifyInformation" type="checkbox" {...register('certifyInformation', { required: true })} />
        </FieldCheck>
        <PageChange>
          <Button $variation="primary" type="submit">
            Enviar
          </Button>
          <Button $variation="primary" onClick={handleBack}>
            Atrás
          </Button>
        </PageChange>
      </Page>
    </Form>
  );
}

export default FormClinicInformation;
