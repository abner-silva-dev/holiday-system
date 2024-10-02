import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HolidayInfo } from './type';
import { formatDate, joinName } from '../../utils/helpers';
import { API_DAI_BASE } from '../../config';
import UserPhoto from '../users/UserPhoto';
import { UserInfo } from '../users/types';
import Table from '../../ui/Table';

const HolidayRowStyled = styled.div`
  border-bottom: 1px solid var(--color-grey-100) !important;
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
  top: 10%;
  left: -1.2rem;
  width: 2.5rem;
`;

const TextCont = styled.span`
  margin: auto 0;
  text-align: center;
  justify-self: center;
`;

const RequestListContainer = styled.div`
  background-color: var(--color-grey-0);

  display: flex;
  flex-direction: column;

  gap: 0.5rem;

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
`;

const TextCreation = styled.span`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 700;
  align-self: center;
`;

const TitleCreation = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-align: center;
`;

const HolidayRow: React.FC<{ user: UserInfo }> = ({ user }) => {
  const { holidays } = user;
  const navigate = useNavigate();

  const holidaysPending = holidays?.filter((holiday: HolidayInfo) => {
    return (
      holiday.authorizationAdmin === 'pending' ||
      holiday.authorizationManager === 'pending'
    );
  });

  return (
    <HolidayRowStyled onClick={() => navigate(`${user.id}?history=request`)}>
      <Table.Row columns=".3fr 1fr 1fr 1fr  1fr 2fr">
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
        <span>{user?.employNumber}</span>
        <span>
          {joinName({
            name: user?.name || '',
            motherSurname: user?.paternSurname || '',
            paternSurname: user?.motherSurname || '',
          })}
        </span>
        <span>Hombre de Negocios</span>
        <span>{user?.department?.name}</span>
        <RequestListContainer>
          {holidaysPending?.map((holiday, i) => {
            return (
              <RequestListCard key={holiday._id}>
                <TitleCreation>Solicitud {i + 1}</TitleCreation>
                <TextCreation>
                  Creada:{' '}
                  <span>{formatDate(holiday.createdAt || '', { monthsName: true })}</span>
                </TextCreation>
              </RequestListCard>
            );
          })}
          {!user.holidays?.length && <TextCont>No hay solicitudes</TextCont>}
        </RequestListContainer>
      </Table.Row>
    </HolidayRowStyled>
  );
};

export default HolidayRow;
