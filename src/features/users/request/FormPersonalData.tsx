import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../ui/Button';
import {
  ButtonNext,
  Field,
  Form,
  FormContainer,
  Input,
  Label,
  Page,
  PageChange,
  Select,
  Title,
} from '../../../ui/FormPieces';
import { useUser2 } from '../useUser';

import { useUpdateUser } from '../useUpdateUser';

interface IFormPersonalData {
  name: string;
  paternSurname: string;
  motherSurname: string;
  age: number;
  gender: string;
  address: string;
  postalCode: string;
  email: string;
  maritalStatus: string;
  homePhone: string;
  mobilePhone: string;
}

function FormPersonalData({ handleNext }: { handleNext: () => void }) {
  const { user, isPending } = useUser2();
  const { register, handleSubmit, reset } = useForm<IFormPersonalData>();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        paternSurname: user.paternSurname,
        motherSurname: user.motherSurname,
        age: user.age,
        gender: user.gender,
        address: user.address,
        postalCode: user.postalCode,
        email: user.email,
        maritalStatus: user.maritalStatus,
        homePhone: user.homePhone, // Corrección aquí
        mobilePhone: user.mobilePhone,
      });
    }
  }, [user, reset]);

  // Update Request
  const { updateUser } = useUpdateUser();

  const onSubmit = (data: IFormPersonalData) => {
    updateUser({ id: user?.id || '', newUser: { ...data } });
  };

  if (isPending) return <p>Cargando...</p>; // Mensaje de carga
  if (!user) return null; // Evita que el formulario se renderice si no hay datos

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Page>
        <Title as="h2">DATOS PERSONALES</Title>
        <FormContainer>
          <Field>
            <Label>Nombre(s)</Label>
            <Input type="text" id="name" {...register('name', { required: true })} />
          </Field>

          <Field>
            <Label>Apellido Paterno</Label>
            <Input
              type="text"
              id="paternSurname"
              {...register('paternSurname', { required: true })}
            />
          </Field>

          <Field>
            <Label>Apellido Materno</Label>
            <Input
              type="text"
              id="motherSurname"
              {...register('motherSurname', { required: true })}
            />
          </Field>

          <Field>
            <Label>Edad</Label>
            <Input
              type="number"
              id="age"
              {...register('age', { required: true, min: 0 })}
            />
          </Field>

          <Field>
            <Label>Sexo</Label>
            <Select id="gender" {...register('gender', { required: true })}>
              <option value="">Seleccione una opción...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Indefinido">Indefinido</option>
            </Select>
          </Field>

          <Field>
            <Label>Domicilio: Calle, Número, Colonia y Delegación</Label>
            <Input
              type="text"
              id="address"
              {...register('address', { required: true })}
            />
          </Field>

          <Field>
            <Label>Código Postal</Label>
            <Input
              type="text"
              id="postalCode"
              {...register('postalCode', { required: true })}
            />
          </Field>

          <Field>
            <Label>E-Mail</Label>
            <Input type="email" id="email" {...register('email', { required: true })} />
          </Field>

          <Field>
            <Label>Estado Civil</Label>
            <Input
              type="text"
              id="maritalStatus"
              {...register('maritalStatus', { required: true })}
            />
          </Field>

          <Field>
            <Label>Teléfono Particular</Label>
            <Input
              type="text"
              id="homePhone"
              {...register('homePhone', { required: true })}
            />
          </Field>

          <Field>
            <Label>Celular</Label>
            <Input
              type="text"
              id="mobilePhone"
              {...register('mobilePhone', { required: true })}
            />
          </Field>
        </FormContainer>
        <PageChange>
          <div></div>
          <Button $variation="confirm" type="submit">
            Actualizar
          </Button>
          <ButtonNext onClick={handleNext} />
        </PageChange>
      </Page>
    </Form>
  );
}

export default FormPersonalData;

// import { useForm } from 'react-hook-form';
// import Button from '../../../ui/Button';
// import {
//   Field,
//   Form,
//   FormContainer,
//   Input,
//   Label,
//   Page,
//   PageChange,
//   Select,
//   Title,
// } from '../../../ui/FormPieces';
// import { useUser } from '../useUser';

// interface IFormPersonalData {
//   name: string;
//   paternSurname: string;
//   motherSurname: string;
//   age: number;
//   gender: string;
//   address: string;
//   postalCode: string;
//   email: string;
//   maritalStatus: string;
//   homePhone: string;
//   mobilePhone: string;
// }

// function FormPersonalData({ handleNext }: { handleNext: () => void }) {
//   const { user, isPending } = useUser();

//   const { register, handleSubmit } = useForm<IFormPersonalData>({
//     defaultValues: {
//       name: user?.name,
//       paternSurname: user?.paternSurname,
//       motherSurname: user?.motherSurname,
//       age: user?.age,
//       gender: user?.gender,
//       address: user?.address,
//       postalCode: user?.postalCode,
//       email: user?.email,
//       maritalStatus: user?.maritalStatus,
//       homePhone: user?.maritalStatus,
//       mobilePhone: user?.mobilePhone,
//     },
//   });

//   const onSubmit = (data: IFormPersonalData) => {
//     console.log(data);
//   };

//   if (!user) return null;
//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <Page>
//         <Title as="h2">DATOS PERSONALES</Title>
//         <FormContainer>
//           <Field>
//             <Label>Nombre(s)</Label>
//             <Input type="text" id="name" {...register('name', { required: true })} />
//           </Field>

//           <Field>
//             <Label>Apellido Paterno</Label>
//             <Input
//               type="text"
//               id="paternSurname"
//               {...register('paternSurname', { required: true })}
//             />
//           </Field>

//           <Field>
//             <Label>Apellido Materno</Label>
//             <Input
//               type="text"
//               id="motherSurname"
//               {...register('motherSurname', { required: true })}
//             />
//           </Field>

//           <Field>
//             <Label>Edad</Label>
//             <Input
//               type="number"
//               id="age"
//               {...register('age', { required: true, min: 0 })}
//             />
//           </Field>

//           <Field>
//             <Label>Sexo</Label>
//             <Select id="gender" {...register('gender', { required: true })}>
//               <option value="">Seleccione una opción...</option>
//               <option value="Masculino">Masculino</option>
//               <option value="Femenino">Femenino</option>
//               <option value="Indefinido">Indefinido</option>
//             </Select>
//           </Field>

//           <Field>
//             <Label>Domicilio: Calle, Número, Colonia y Delegación</Label>
//             <Input
//               type="text"
//               id="address"
//               {...register('address', { required: true })}
//             />
//           </Field>

//           <Field>
//             <Label>Código Postal</Label>
//             <Input
//               type="text"
//               id="postalCode"
//               {...register('postalCode', { required: true })}
//             />
//           </Field>

//           <Field>
//             <Label>E-Mail</Label>
//             <Input type="email" id="email" {...register('email', { required: true })} />
//           </Field>

//           <Field>
//             <Label>Estado Civil</Label>
//             <Input
//               type="text"
//               id="maritalStatus"
//               {...register('maritalStatus', { required: true })}
//             />
//           </Field>

//           <Field>
//             <Label>Teléfono Particular</Label>
//             <Input
//               type="text"
//               id="homePhone"
//               {...register('homePhone', { required: true })}
//             />
//           </Field>

//           <Field>
//             <Label>Celular</Label>
//             <Input
//               type="text"
//               id="mobilePhone"
//               {...register('mobilePhone', { required: true })}
//             />
//           </Field>
//         </FormContainer>
//         <PageChange>
//           <Button $variation="confirm" type="submit">
//             Guardar
//           </Button>
//           <Button $variation="confirm" type="button" onClick={handleNext}>
//             Siguiente
//           </Button>
//         </PageChange>
//       </Page>
//     </Form>
//   );
// }

// export default FormPersonalData;
