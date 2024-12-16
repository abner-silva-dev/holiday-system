import styled from 'styled-components';
import Heading from '../../../shared/ui/Heading';

import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import Button from '../../../shared/ui/Button';
import { HolidayInfo } from './../type';

import './calendar.css';
import { useCreateHoliday } from './../hooks/useCreateHoliday';
import { useUser } from '../../users/hooks/useUser';
import { useQueryClient } from '@tanstack/react-query';
import { media } from '../../../shared/style/media';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateApp } from '../../../context/stateAppContext';
import Row from '../../../shared/ui/Row';
import TimeTag from './TimeTag';
import InputCalendar from '../../../shared/ui/InputCalendar';

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

interface MessageProps {
  $color?: string;
}

const Message = styled.label<MessageProps>`
  font-size: 1.8rem;
  font-style: italic;
  color: ${(props) => props.$color || 'curretColor'};
`;

const RegContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: var(--color-grey-0);
  grid-column: 1/-1;
  padding: 5rem 15rem;

  @media (${media.mobile}) {
    padding: 5rem 2rem;
  }
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

  const {
    state: { period },
  } = useStateApp();
  const { user: curUser } = useUser();
  const { createHoliday } = useCreateHoliday();
  const [dates, setDates] = useState<Date[]>([]);

  // const holidays =
  //   curUser?.holidays?.filter((holiday) => holiday.period === period) || [];

  // const tempPendingHolidays = holidays.reduce(
  //   (acc, cur) => acc + (cur.days?.length || 0),
  //   0
  // );

  const navigate = useNavigate();
  const location = useLocation();

  let periodCredit = 0;

  switch (period) {
    case 'future':
      periodCredit = curUser?.creditFuture?.balance || 0;
      break;
    case 'present':
      periodCredit = curUser?.credit?.balance || 0;
      break;
    case 'past':
      periodCredit = curUser?.creditPast?.balance || 0;
      break;
  }

  const hasCredit = periodCredit > 1;

  useEffect(() => {
    setDates([]);
  }, [period]);

  if (!curUser) return null;

  const onSubmit = (data: HolidayInfo) => {
    console.log({
      ...data,
      days: dates,
      period,
      createdAt: new Date().toISOString(),
      user: curUser?.id || '',
    });
    createHoliday(
      {
        ...data,
        days: dates,
        period,
        createdAt: new Date().toISOString(),
        user: curUser?.id || '',
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['user', curUser.id] });
          onClose(false);

          const searchParams = new URLSearchParams(location.search);
          searchParams.set('history', 'request');
          navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
        },
      }
    );
  };

  return (
    <RegContainer>
      <Row type="horizontal">
        <Heading as="h2">Registro de Vacaciones</Heading>
        <TimeTag $time={period} />
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <Label>Seleccionar Días</Label>
          <StyledCalendarInput>
            <InputCalendar
              dates={dates}
              setDates={setDates}
              maxDateCount={periodCredit || -1}
            />
          </StyledCalendarInput>
        </FieldContainer>

        <FieldContainer>
          <Label>Notas</Label>
          <TextArea
            id="observation"
            placeholder=""
            {...register('observation')}
            disabled={!hasCredit}
          />
        </FieldContainer>

        <FieldContainer>
          {!hasCredit && (
            <Message $color="red">No tiene saldo para solicitar vacaciones.</Message>
          )}
          {dates.length === 0 && hasCredit && (
            <Message>Aún no se han seleccionado fechas.</Message>
          )}
        </FieldContainer>
        <ButtonRow>
          <SubmitButton $variation="confirm" disabled={!hasCredit}>
            Crear Registro
          </SubmitButton>
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
  );
};

export default CreateHoliday;
