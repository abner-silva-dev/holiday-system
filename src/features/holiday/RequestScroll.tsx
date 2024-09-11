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
  align-items: center;

  background-color: var(--color-grey-0);
  padding: 2rem;
  border-radius: 9px;
  box-shadow: var(--shadow-sm);
  position: relative;
  cursor: pointer;
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

// const ShowButton = styled.button`
//   background-color: transparent;
//   border: none;
//   /* padding: 1rem 3rem; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
//   align-self: center;
//   justify-self: center;
//   font-size: 2.4rem;
//   transition: all 0.2s;

//   &:hover {
//     color: var(--color-red-700);
//   }
// `;

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

  user-select: none;
`;

// REQUEST LISTS

const RequestListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* background-color: grey; */
  padding: 0.8rem;
  overflow-y: scroll;
  height: 9rem;
  background-color: var(--color-grey-0);
  /* border: 1px solid var(--color-grey-300); */
  border-radius: 11px;
  /* box-shadow: var(--shadow-sm); */
  /* background-color: var(--color-grey-50); */
`;

const RequestListCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-brand-100);
  padding: 0.8rem;
  box-shadow: var(--shadow-sm);
  color: var(--color-brand-800);
  border-radius: 11px;
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

const Group = styled.div``;

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
            <Group>
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
            </Group>
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

{
  /* <Modal>
<Modal.Open opens="ver">
  <ShowButton>
    <HiOutlineEye />
    Ver
  </ShowButton>
</Modal.Open>

<Modal.Window name="ver">
  <HolidayInfo />
</Modal.Window>
</Modal> */
}
