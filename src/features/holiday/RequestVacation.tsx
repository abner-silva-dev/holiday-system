import styled from 'styled-components';

const RequestCard = styled.div`
  display: flex;
  gap: 1.6rem;
  background-color: var(--color-grey-300);
  padding: 1.2rem 1.6rem;
  border-radius: 9px;
`;

const ImageRequest = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const GroupText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShowMoreAnchor = styled.a`
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: var(--color-red-600);
  padding: 1rem;
  border-radius: 9px;
  color: var(--color-grey-200);
  font-weight: 600;
`;

function RequestVacation() {
  return (
    <RequestCard>
      <ImageContainer>
        <ImageRequest src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s" />
      </ImageContainer>
      <GroupText>
        <span>No. de Empleado</span>
        <span>20251081</span>
      </GroupText>
      <GroupText>
        <span>Nombre</span>
        <span>José Armando Rodriguez Hernández</span>
      </GroupText>
      <ShowMoreAnchor href="#">VER</ShowMoreAnchor>
    </RequestCard>
  );
}

export default RequestVacation;
