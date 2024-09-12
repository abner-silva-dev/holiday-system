import styled from 'styled-components';
import UserPhoto from '../users/UserPhoto';

const RequestCard = styled.div`
  display: flex;
  gap: 1.6rem;
  background-color: var(--color-grey-100);
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GroupText = styled.div`
  color: var(--color-grey-800);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.6rem;
  width: 100%;
`;

const ShowMoreAnchor = styled.a`
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

function RequestVacation() {
  return (
    <RequestCard>
      <ImageContainer>
        <UserPhoto
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s"
          alt="User Photo"
          $size="adaptative"
        />
      </ImageContainer>
      <GroupText>
        <TitleInfo>No. de Empleado:</TitleInfo>
        <ContentInfo>20251081</ContentInfo>
      </GroupText>
      <GroupText>
        <TitleInfo>Nombre:</TitleInfo>
        <ContentInfo>José Armando Rodríguez Hernández</ContentInfo>
      </GroupText>
      <ShowMoreAnchor href="#">Ver</ShowMoreAnchor>
    </RequestCard>
  );
}

export default RequestVacation;
