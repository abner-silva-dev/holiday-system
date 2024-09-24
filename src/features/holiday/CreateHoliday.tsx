import styled from 'styled-components';
import Heading from '../../ui/Heading';

import { addLocale, locale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { HolidayInfo } from './type';

import './calendar.css';
import { useCreateHoliday } from './useCreateHoliday';
import { useUser } from '../users/useUser';
import { useUsers } from '../users/useUsers';
import { UserInfo } from '../users/types';
import { useQueryClient } from '@tanstack/react-query';

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

interface PropsCreateDepartment {
  edit?: HolidayInfo;
  onClose: (isclic: boolean) => void;
}

const CreateHoliday: React.FC<PropsCreateDepartment> = ({ edit = {}, onClose }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<HolidayInfo>({
    defaultValues: edit,
  });

  const { user: curUser } = useUser();
  const { users } = useUsers();

  const { createHoliday } = useCreateHoliday();

  const manager = users?.find(
    (user: UserInfo) =>
      user?.role === 'manager' && user?.department?._id === curUser?.department?._id
  );

  const admin = users?.find((user: UserInfo) => user?.role === 'admin');

  const [dates, setDates] = useState<Date[]>([]);

  const onSubmit = (data: HolidayInfo) => {
    createHoliday(
      {
        ...data,
        days: dates,
        createdAt: new Date() + '',
        admin: admin.id,
        manager: manager.id,
        user: curUser.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['user', curUser.id] });
          onClose(false);
        },
      }
    );
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

  //MIN DATE
  const today = new Date();
  const month = today.getMonth();
  const prevMonth = month === 0 ? 11 : month;

  const minDate = new Date();
  minDate.setMonth(prevMonth);

  return (
    <>
      <RegContainer>
        <Heading as="h2">Registro de Vacaciones</Heading>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldContainer>
            <Label>Seleccionar Días</Label>
            <StyledCalendarInput>
              <Calendar
                value={dates}
                onChange={(event) => setDates(event.value || [])}
                selectionMode="multiple"
                dateFormat="dd/mm/yy"
                showIcon
                className="p-inputtext p-component p-inputtext p-component"
                variant="filled"
                minDate={minDate}
              />
            </StyledCalendarInput>
          </FieldContainer>

          <FieldContainer>
            <Label>Notas</Label>
            <TextArea id="observation" placeholder="" {...register('observation')} />
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
