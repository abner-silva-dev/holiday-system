import styled from 'styled-components';
import { HiOutlineEye } from 'react-icons/hi2';

const RequestsContainer = styled.div`
  /* background-color: var(--color-grey-0); */
  border-radius: 9px;
  padding: 2rem 2rem;
  /* box-shadow: var(--shadow-md); */
  /* height: 64vh; */
  overflow-y: scroll;
  /* border: 1px solid var(--color-grey-300); */
`;

const RequestCard = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  border-radius: 9px;
  display: flex;
  justify-content: space-around;
  gap: 2.4rem;
  box-shadow: var(--shadow-sm);
  position: relative;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  border-radius: 50%;
  width: 9rem;
  box-shadow: var(--shadow-md);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  /* justify-content: space-between; */
  width: 20rem;
`;

const TextTitle = styled.span`
  color: var(--color-red-800);
  font-weight: bold;
`;
const TextCont = styled.span``;

const ShowButton = styled.button`
  background-color: transparent;
  border: none;
  /* padding: 1rem 3rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  align-self: center;
  justify-self: center;
  font-size: 2.4rem;
  transition: all 0.2s;

  &:hover {
    color: var(--color-red-700);
  }
`;

const Notification = styled.div`
  position: absolute;
  top: -0.8rem;
  left: -1.2rem;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  background-color: var(--color-red-500);
  border: 1px solid var(--color-red-600);
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const RequestScroll = () => {
  return (
    <RequestsContainer>
      <RequestCard>
        <Notification>2</Notification>
        <ImageContainer>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s" />
        </ImageContainer>
        <TextContainer>
          <TextTitle>No. de Empleado</TextTitle>
          <TextCont>20251081</TextCont>
        </TextContainer>
        <TextContainer>
          <TextTitle>Nombre</TextTitle>
          <TextCont>José Armando Rodriguez Hernández</TextCont>
        </TextContainer>
        <TextContainer>
          <TextTitle>Solicitudes Pendientes</TextTitle>
          <TextCont>2 Solicitudes</TextCont>
        </TextContainer>
        <TextContainer>
          <TextTitle>Departamento</TextTitle>
          <TextCont>Tecnologias de la Información</TextCont>
        </TextContainer>
        <ShowButton>
          <HiOutlineEye />
          Ver
        </ShowButton>
      </RequestCard>
    </RequestsContainer>
  );
};

export default RequestScroll;
