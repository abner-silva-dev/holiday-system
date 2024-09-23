import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HolidayInfo } from './type';
import { joinName } from '../../utils/helpers';
import { API_DAI_BASE } from '../../config';
import UserPhoto from '../users/UserPhoto';
import { UserInfo } from '../users/types';

const RequestCard = styled(Link)`
  background-color: var(--color-grey-0);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 3fr;
  justify-content: center;
  column-gap: 2rem;
  align-items: start;
  text-align: center;

  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--color-grey-200);

  padding: 1rem 0.5rem;
  border-radius: 9px;

  cursor: pointer;
  position: relative;
`;

const Notification = styled.div`
  background-color: #b91c1c;
  color: #fff;
  border: 1px solid var(--color-red-600);
  border-radius: 50%;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  position: absolute;
  top: -0.8rem;
  left: -1.2rem;
  width: 2.5rem;
  height: 2.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 20rem;
`;

const TextTitle = styled.span`
  color: var(--color-grey-600);
  font-size: 1.8rem;
  font-weight: 700;
`;

const TextCont = styled.span`
  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 500;
`;

const RequestListContainer = styled.div`
  background-color: var(--color-grey-0);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.8rem;
  height: 7.5rem;
  border-radius: 11px;
  overflow-y: scroll;
`;

const RequestListCard = styled.div`
  background-color: var(--color-brand-100);
  box-shadow: var(--shadow-sm);
  color: var(--color-brand-800);
  border-radius: 11px;

  display: flex;
  flex-direction: column;
  padding: 0.8rem;
`;

const TextCreation = styled.span`
  font-size: 1.2rem;
  text-align: center;
`;

const TitleCreation = styled.span`
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
`;

interface PropsHolidayRow {
  user: UserInfo;
}

const HolidayRow: React.FC<PropsHolidayRow> = ({ user }) => {
  const { holidays } = user;

  const holidaysPending = holidays?.filter((holiday: HolidayInfo) => {
    return (
      holiday.authorizationAdmin === 'pending' ||
      holiday.authorizationManager === 'pending'
    );
  });

  return (
    <RequestCard title="Ver más" to={`${user.id}?history=request`}>
      {holidaysPending?.length ? (
        <Notification>{holidaysPending.length}</Notification>
      ) : (
        ''
      )}

      <UserPhoto
        $type="circle"
        src={`${API_DAI_BASE}/img/user/${user?.photo}`}
        $size="medium"
      />

      <TextContainer>
        <TextTitle>No. de Empleado</TextTitle>
        <TextCont>{user?.employNumber}</TextCont>
      </TextContainer>
      <TextContainer>
        <TextTitle>Nombre</TextTitle>
        <TextCont>
          {joinName({
            name: user?.name || '',
            motherSurname: user?.paternSurname || '',
            paternSurname: user?.motherSurname || '',
          })}
        </TextCont>
      </TextContainer>
      <TextContainer>
        <TextTitle>Puesto</TextTitle>
        <TextCont>Hombre de Negocios</TextCont>
      </TextContainer>
      <TextContainer>
        <TextTitle>Departamento</TextTitle>
        <TextCont>{user?.department?.name}</TextCont>
      </TextContainer>
      <div>
        <TextTitle>Solicitudes</TextTitle>
        <RequestListContainer>
          {holidaysPending?.map((holiday, i) => {
            return (
              <RequestListCard>
                <TitleCreation>Solicitud {i + 1}</TitleCreation>
                <TextCreation>
                  Creada: <span>{holiday.createdAt} hrs</span>
                </TextCreation>
              </RequestListCard>
            );
          })}
          {!user.holidays?.length && <TextCont>No hay solicitudes</TextCont>}
        </RequestListContainer>
      </div>
    </RequestCard>
  );
};

export default HolidayRow;
