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
import { useQueryClient } from '@tanstack/react-query';
import { media } from '../../style/media';
import StateHoliday from './StateHoliday';
import { getStatusHoliday } from '../../utils/holidayUtils';
import Holiday from '../../pages/Holiday';

const StyledCalendarInput = styled.div`
  @media (${media.tablet}) {
    th {
      text-align: start;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

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
  const { createHoliday } = useCreateHoliday();
  const [dates, setDates] = useState<Date[]>([]);

  const { pendingHolidays } = getStatusHoliday(curUser?.holidays || []);
  const tempPendingHolidays = pendingHolidays.reduce(
    (acc, cur) => acc + (cur.days?.length || 0),
    0
  );

  console.log(tempPendingHolidays);
  console.log(curUser?.credit?.balance || 0);

  console.log((curUser?.credit?.balance || 0) - tempPendingHolidays);

  if (!curUser) return null;

  const onSubmit = (data: HolidayInfo) => {
    createHoliday(
      {
        ...data,
        days: dates,
        createdAt: new Date().toISOString(),
        user: curUser?.id || '',
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

  // Configurar el mínimo de fecha para habilitar dos meses atrás
  // const minDate = new Date();
  // minDate.setMonth(minDate.getMonth() - 2); // Permitir seleccionar desde 2 meses atrás

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
                // minDate={minDate} // Habilitar fechas desde dos meses atrás
                disabledDates={[]} // En este caso no se usa disabledDates directamente
                disabledDays={[0]} // Deshabilitar solo domingos (0)
                required={true}
                maxDateCount={(curUser?.credit?.balance || 0) - tempPendingHolidays || -1}
              />
            </StyledCalendarInput>
          </FieldContainer>

          <FieldContainer>
            <Label>Notas</Label>
            <TextArea id="observation" placeholder="" {...register('observation')} />
          </FieldContainer>

          <FieldContainer>
            {dates.length === 0 && <Message>Aún no se han seleccionado fechas.</Message>}
          </FieldContainer>
          <ButtonRow>
            <SubmitButton $variation="confirm">Crear Registro</SubmitButton>
            <CancelButton
              $variation="secondary"
              type="button"
              onClick={() => onClose(false)}
            >
              Cancelar
            </CancelButton>
          </ButtonRow>
        </Form>
      </RegContainer>
    </>
  );
};

export default CreateHoliday;
