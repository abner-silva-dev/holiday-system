import styled from 'styled-components';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import UserCard from '../../../src/features/users/UserCard';

import { addLocale, locale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import FormRow from '../../ui/FormRow';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { HolidayInfo } from './type';

const StyledCreateHoliday = styled.div``;

const StyledCalendarInput = styled(Calendar)`
  b .p-calendar {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .p-calendar-header {
    background-color: #4caf50;
    color: #fff;
  }

  .p-calendar .p-calendar-day {
    border: 1px solid #4caf50;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  justify-content: center;
  gap: 4rem;
`;

const Input = styled.input`
  background-color: var(--color-grey-0);
  padding: 0.5rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
`;

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

  return (
    <>
      <Heading as="h2">Registro de Departamento</Heading>

      <Row type="horizontal">
        <UserCard user={{}}></UserCard>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Selecciona dias">
            <Calendar
              value={dates}
              onChange={(e) => setDates(e.value)}
              selectionMode="multiple"
              readOnlyInput
            />
          </FormRow>
          <FormRow label="Abreviatura">
            <Input
              type="text"
              id="nameAbreviate"
              placeholder="V"
              {...register('nameAbreviate')}
              required
            />
          </FormRow>
          <Button $variation="confirm">Crear Departamento</Button>
        </Form>
      </Row>
    </>
  );
};

export default CreateHoliday;
