import styled from 'styled-components';
import UserPhoto from '../users/UserPhoto';
import { Link } from 'react-router-dom';
import { HolidayInfo } from './type';
import { joinName } from '../../utils/helpers';
import { API_DAI_BASE } from '../../config';
import React from 'react';

const RequestCard = styled.div`
  display: flex;
  gap: 1.6rem;
  background-color: var(--color-grey-50);
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const GroupText = styled.div`
  color: var(--color-grey-800);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.6rem;
  width: 100%;
`;

const ShowMoreAnchor = styled(Link)`
  background-color: #166534;
  color: #f3f4f6;
  padding: 1rem;
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
  return (
    <RequestCard>
      <UserPhoto
        src={`${API_DAI_BASE}/img/user/${holiday?.user?.photo}`}
        alt="User Photo"
        $size="medium"
      />
      <GroupText>
        <TitleInfo>No. de Empleado:</TitleInfo>
        <ContentInfo>{holiday?.user?.employNumber}</ContentInfo>
      </GroupText>
      <GroupText>
        <TitleInfo>Nombre:</TitleInfo>
        <ContentInfo>
          {joinName({
            motherSurname: holiday?.user?.motherSurname || '',
            name: holiday?.user?.name || '',
            paternSurname: holiday?.user?.paternSurname || '',
          })}
        </ContentInfo>
      </GroupText>
      <ShowMoreAnchor to={`/holidays/${holiday?.user?.id}?history=all`} onClick={onClose}>
        Ver
      </ShowMoreAnchor>
    </RequestCard>
  );
};

export default RequestVacation;
