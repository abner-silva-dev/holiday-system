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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-content: center; */
  gap: 2rem;
`;

const Input = styled.input`
  background-color: var(--color-grey-0);
  padding: 0.5rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
`;

const TextArea = styled.textarea`
  resize: none;
  border-radius: 9px;
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-0);
`;

const Label = styled.label``;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
    background-color: var(--color-grey-0);
    grid-column: 1/-1;
    padding: 2rem;
  `;

  const CurrentRow = styled.div`
    margin-top: 3.2rem;
  `;

  return (
    <>
      <RegContainer>
        <Heading as="h2">Registro de Vacaciones</Heading>
        <CurrentRow>
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
              <Label>Fecha de Creación</Label>
              <Input
                type="text"
                id="dateCreation"
                placeholder=""
                {...register('dayCreated')}
                readOnly
                required
              />
            </FieldContainer>
            <FieldContainer>
              <Label>Días Seleccionados</Label>
              <Input
                type="text"
                id="daySelected"
                placeholder=""
                {...register('daySelected')}
                readOnly
                required
              />
            </FieldContainer>

            <FieldContainer>
              <Label>Notas</Label>
              <TextArea id="observation" placeholder="" {...register('dayCreated')} />
            </FieldContainer>

            <Button
              style={{
                gridColumn: '1/-1',
                width: '40%',
                justifySelf: 'center',
                marginTop: '3.2rem',
              }}
              $variation="confirm"
            >
              Crear Registro
            </Button>
          </Form>
        </CurrentRow>
      </RegContainer>
    </>
  );
};

export default CreateHoliday;
