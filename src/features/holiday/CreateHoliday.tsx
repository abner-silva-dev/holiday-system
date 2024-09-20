import styled from 'styled-components';
import Heading from '../../ui/Heading';

import { addLocale, locale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { HolidayInfo } from './type';

import './calendar.css';

const StyledCalendarInput = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// const Input = styled.input`
//   background-color: var(--color-grey-0);
//   padding: 0.5rem;
//   border: 1px solid var(--color-grey-400);
//   border-radius: var(--border-radius-md);
// `;

const TextArea = styled.textarea`
  padding: 1rem 1.4rem;
  resize: none;
  border-radius: 9px;
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-0);
  height: 10rem;
`;

const Label = styled.label``;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.label`
  font-size: 1.8rem;
  font-style: italic;
`;

// const SelectOption = styled.select``;

interface PropsCreateDepartment {
  edit?: HandleSubmit;
  onCloseModal?: () => void;
}

const CreateHoliday: React.FC<PropsCreateDepartment> = ({ edit = {}, onCloseModal }) => {
  const { register, handleSubmit, reset } = useForm<HandleSubmit>({
    defaultValues: edit,
  });
  const [dates, setDates] = useState();
  // const { current } = useOutsideClick<JSX.Element>(false);

  const onSubmit = (data: HolidayInfo) => {
    // const { name, nameAbreviate, enterprise } = data;
    // createDepartment({
    //   name,
    //   nameAbreviate,
    //   enterprise,
    //   //   name: joinName({ name, paternSurname, motherSurname }),
    // });
    // reset();
    // onCloseModal?.();
  };

  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  });

  locale('es');

  const RegContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    background-color: var(--color-grey-0);
    grid-column: 1/-1;
    padding: 5rem 15rem;
  `;

  const ButtonRow = styled.div`
    display: flex;
    gap: 3rem;
  `;

  const SubmitButton = styled(Button)`
    grid-column: 1/2;
    width: 70%;
    justify-self: center;
  `;

  const CancelButton = styled(Button)`
    width: 70%;
    justify-self: center;
  `;

  return (
    <>
      <RegContainer>
        <Heading as="h2">Registro de Vacaciones</Heading>

        {/* <UserCard user={{}}></UserCard> */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldContainer>
            {/* <input type="text" onChange={()} /> */}
            <Label>Seleccionar Días</Label>
            <StyledCalendarInput>
              <Calendar
                value={dates}
                onChange={(e) => setDates(e.value)}
                selectionMode="multiple"
                dateFormat="dd/mm/yy"
                showIcon
                readOnlyInput
                className="p-inputtext p-component p-inputtext p-component"
                variant="filled"
              />
            </StyledCalendarInput>
          </FieldContainer>

          <FieldContainer>
            <Label>Notas</Label>
            <TextArea id="observation" placeholder="" {...register('dayCreated')} />
          </FieldContainer>

          <FieldContainer>
            <Message>Aún no se han seleccionado fechas.</Message>
          </FieldContainer>
          <ButtonRow>
            <SubmitButton $variation="confirm">Crear Registro</SubmitButton>
            <CancelButton $variation="secondary">Cancelar</CancelButton>
          </ButtonRow>
        </Form>
      </RegContainer>
    </>
  );
};

export default CreateHoliday;
