import styled from 'styled-components';
import UserPhoto from '../users/UserPhoto';
import { Link } from 'react-router-dom';
import { HolidayInfo } from './type';
import { API_DAI_BASE } from '../../config';
import React from 'react';
import { UserInfo } from '../users/types';

const RequestCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-50);
`;

const GroupText = styled.div`
  color: var(--color-grey-800);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.6rem;
  text-align: center;
  width: 100%;
`;

const ShowMoreAnchor = styled(Link)`
  background-color: #166534;
  color: #f3f4f6;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 9px;
  display: flex;
  align-self: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: #208848;
  }
`;

const TitleInfo = styled.span`
  line-height: 1.2;
  font-weight: 600;
  font-size: 1.4rem;
`;

const ContentInfo = styled.span`
  font-size: 1.4rem;
  line-height: 1.2;
`;

interface PropsRequestVacation {
  holiday: HolidayInfo;
  onClose: () => void;
}

const RequestVacation: React.FC<PropsRequestVacation> = ({ holiday, onClose }) => {
  const user = holiday.user as UserInfo | undefined;

  const dateStr = holiday?.createdAt + '';
  const date = new Date(dateStr);
  const formattedDate = date
    .toLocaleString('es-MX', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
    .split(',');

  return (
    <RequestCard>
      <UserPhoto
        src={`${API_DAI_BASE}/img/user/${user?.photo}`}
        alt="User Photo"
        $size="small"
        $border={false}
      />
      <GroupText>
        <TitleInfo>No. de Empleado:</TitleInfo>
        <ContentInfo>{user?.employNumber}</ContentInfo>
      </GroupText>
      <GroupText>
        <TitleInfo>Creada:</TitleInfo>
        {formattedDate.map((item) => (
          <ContentInfo key={item}>{item}</ContentInfo>
        ))}
      </GroupText>
      <ShowMoreAnchor
        to={`/admin/holidays/${user?.id}?history=request`}
        onClick={onClose}
      >
        Ver
      </ShowMoreAnchor>
    </RequestCard>
  );
};

export default RequestVacation;
