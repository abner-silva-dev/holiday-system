import styled from 'styled-components';
// import { HiOutlineEye } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import HolidayInfo from './holidayInfo';

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr;
  /* align-items: center; */

  background-color: var(--color-grey-0);
  padding: 2rem;
  border-radius: 9px;
  box-shadow: var(--shadow-sm);
  position: relative;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  align-self: center;
  justify-self: center;
`;

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

const Notification = styled.div`
  background-color: #b91c1c;
  color: #fff;
  border: 1px solid var(--color-red-600);
  border-radius: 50%;
  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  position: absolute;
  top: -0.8rem;
  left: -1.2rem;
  width: 3rem;
  height: 3rem;
`;

// REQUEST LISTS
const RequestListContainer = styled.div`
  background-color: var(--color-grey-0);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0.8rem;
  height: 9rem;
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

const RequestScroll = () => {
  return (
    <RequestsContainer>
      <Modal>
        <Modal.Open opens="ver">
          <RequestCard title="Ver más">
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
              <TextTitle>Puesto</TextTitle>
              <TextCont>Hombre de Negocios</TextCont>
            </TextContainer>
            <TextContainer>
              <TextTitle>Departamento</TextTitle>
              <TextCont>Tecnologias de la Información</TextCont>
            </TextContainer>
            <div>
              <TextTitle>Solicitudes</TextTitle>
              <RequestListContainer>
                <RequestListCard>
                  <TitleCreation>Solicitud 1</TitleCreation>
                  <TextCreation>
                    Creada: <span>28/08/2024 21:23 hrs</span>
                  </TextCreation>
                </RequestListCard>
                <RequestListCard>
                  <TitleCreation>Solicitud 2</TitleCreation>
                  <TextCreation>
                    Creada: <span>21/09/2024 18:50 hrs</span>
                  </TextCreation>
                </RequestListCard>
              </RequestListContainer>
            </div>
          </RequestCard>
        </Modal.Open>
        <Modal.Window name="ver">
          <HolidayInfo />
        </Modal.Window>
      </Modal>
    </RequestsContainer>
  );
};

export default RequestScroll;
