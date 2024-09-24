import styled from 'styled-components';

import { HiOutlineCheck } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';
import { HolidayInfo } from './type';
import { joinName } from '../../utils/helpers';
import StateHoliday from './StateHoliday';
import { useUpdateHoliday } from './useUpdateHoliday';
import { useForm } from 'react-hook-form';
import { updateHoliday } from '../../services/apiHolidays';
import { useQueryClient } from '@tanstack/react-query';
import { useUser } from '../users/useUser';

const AuthorizationContainer = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  grid-column: 1 /3;
  border-radius: 9px;
  box-shadow: var(--shadow-sm);
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AuthorizationButtons = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
  gap: 4rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  & svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover {
  }
`;

const TitleBold = styled.span`
  font-weight: bold;
`;

const SubTitle = styled.span`
  color: var(--color-red-800);
  font-weight: bold;
`;

const RowMain = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const ObservationField = styled.textarea`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-400);
  resize: none;
  box-shadow: var(--shadow-sm);
`;

const RowComponents = styled.div`
  display: flex;
  padding: 0 3.2rem;
  justify-content: space-between;
`;

const HeadingMain = styled.h3`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface PropsAuthorizationCard {
  holiday: HolidayInfo;
}

const AuthorizationCard: React.FC<PropsAuthorizationCard> = ({ holiday }) => {
  const queryClient = useQueryClient();

  console.log(holiday);
  const { register, handleSubmit, setValue } = useForm<HolidayInfo>({
    defaultValues: holiday,
  });
  const { user: curUser } = useUser();

  const { updateHoliday } = useUpdateHoliday();

  const onSubmit = (data: HolidayInfo) => {
    console.log(data);
    updateHoliday(
      { id: holiday._id || '', newHoliday: data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['user', curUser.id] });
        },
      }
    );
  };

  return (
    <AuthorizationContainer>
      {/* MANAGER */}
      <HeadingMain>Solicitud 1: {holiday?.createdAt}</HeadingMain>
      <RowComponents>
        <ColumnContainer>
          <ColumnContainer>
            <TitleBold>Jefe Directo</TitleBold>
            <RowMain>
              <StateHoliday state={holiday?.authorizationManager || 'pending'} />
            </RowMain>
          </ColumnContainer>

          <ColumnContainer>
            <TitleBold>Administrador</TitleBold>
            <StateHoliday state={holiday?.authorizationAdmin || 'pending'} />
          </ColumnContainer>
        </ColumnContainer>

        {/* ADMIN */}
        <ColumnContainer>
          <ColumnContainer>
            <RowMain>
              <SubTitle>Observación</SubTitle>
              <span>
                {joinName({
                  name: holiday?.manager?.name || '',
                  paternSurname: holiday?.manager?.paternSurname || '',
                  motherSurname: holiday?.manager?.motherSurname || '',
                })}
              </span>
            </RowMain>
            <ObservationField disabled={true} value={holiday.observationManager} />
            <AuthorizationButtons>
              <Button disabled={true}>
                <HiOutlineCheck />
                Aceptar
              </Button>
              <Button disabled={true}>
                <HiOutlineXMark />
                Rechazar
              </Button>
            </AuthorizationButtons>
          </ColumnContainer>

          <ColumnContainer>
            <RowMain>
              <SubTitle>Observación</SubTitle>
              <span>
                {joinName({
                  name: holiday?.admin?.name || '',
                  paternSurname: holiday?.admin?.paternSurname || '',
                  motherSurname: holiday?.admin?.motherSurname || '',
                })}
              </span>
            </RowMain>

            {/* FORM ADMIN */}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <ObservationField
                defaultValue={holiday.observationAdmin}
                {...register('observationAdmin')}
              />
              <AuthorizationButtons>
                <Button onClick={() => setValue('authorizationAdmin', 'approved')}>
                  <HiOutlineCheck />
                  Aceptar
                </Button>
                <Button onClick={() => setValue('authorizationAdmin', 'rejected')}>
                  <HiOutlineXMark />
                  Rechazar
                </Button>
              </AuthorizationButtons>
            </Form>
          </ColumnContainer>
        </ColumnContainer>
      </RowComponents>
    </AuthorizationContainer>
  );
};

export default AuthorizationCard;
