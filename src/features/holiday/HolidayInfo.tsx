import styled from 'styled-components';

import { HiCalendarDays } from 'react-icons/hi2';
import Stat from '../../ui/Start';

const HolidayInfoStyles = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50rem 1fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;
`;

const UserInfo = styled.aside`
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  grid-row: 1/-1;
`;

const UserImage = styled.div`
  &image {
    border-radius: 50%;
    border: 2px solid #991b1b;
    width: 4rem;
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;

  & span:first-child {
    color: red;
  }
`;

const UserData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
`;

const HolidayOptions = styled.header`
  display: flex;
  justify-content: space-around;
`;
const HolidayMain = styled.main`
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);
  padding: 2rem 4rem 8rem;
  overflow-y: scroll;
`;

const HolidayInfo = () => {
  return (
    <HolidayInfoStyles>
      <UserInfo>
        <UserImage>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s"
            alt=""
          />
        </UserImage>
        <UserData>
          <Group>
            <span>No. Empleado</span>
            <span>20251086</span>
          </Group>
          <Group>
            <span>Departamento</span>
            <span>Tecnologias de la informacion</span>
          </Group>
          <Group>
            <span>Nombre</span>
            <span>Silva Araujo Dylan Abner</span>
          </Group>
          <Group>
            <span>Jefe directo</span>
            <span>Ricardo Anaya Obrador</span>
          </Group>
          <Group>
            <span>Antiguedad</span>
            <span>2 años 2 meses 1 dia</span>
          </Group>
          <Group>
            <span>Puesto</span>
            <span>Hombre de negocios</span>
          </Group>
        </UserData>
      </UserInfo>
      <HolidayOptions>
        <Stat
          color="green"
          icon={<HiCalendarDays />}
          title="Solicitudes pendientes"
          value="2 solicitules"
        />
        <Stat
          color="red"
          icon={<HiCalendarDays />}
          title="Días restantes"
          value="2 dias"
        />
        <Stat
          color="brand"
          icon={<HiCalendarDays />}
          title="Vaciones del periodo"
          value="12 días"
        />
      </HolidayOptions>
      <HolidayMain>MAin</HolidayMain>
    </HolidayInfoStyles>
  );
};

export default HolidayInfo;
