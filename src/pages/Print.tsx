import styled from 'styled-components';
import html2pdf from 'html2pdf.js';
import { HiOutlineCheck } from 'react-icons/hi2';

import logo from './../../public/logo-dai.png';
import { HolidayInfo } from '../features/holiday/type';
import { formatDate, joinName } from '../utils/helpers';

const Logo = styled.img`
  width: 14rem;
  align-self: center;
  justify-self: center;
`;

const HeadingContainer = styled.div`
  text-align: center;
  & h1 {
    font-size: 2.4rem;
    width: 350px;
  }
`;

const PrintContainer = styled.div`
  color: #000 !important;
  width: 210mm;
  padding: 1rem 5rem;
  border: 2px solid #b3b3b3;
  margin: auto;
  margin-top: 2rem;
  background-image: url(/membretado.png);
  background-position: center -25px;
  background-size: cover;
  background-size: 119%;

  & header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & p {
    width: 100%;
    padding: 1rem;
    border: none;
    background-color: #f3f4f6;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
  align-items: center;
  row-gap: 0.8rem;

  & :first-child {
    grid-column: 1/-1;
  }

  & :nth-child(5) {
    grid-column: 1/-1;
  }

  & :nth-child(6) {
    grid-column: 1/-1;
  }
`;

const Section = styled.section`
  margin: 2rem 0;

  & h1 {
    font-size: 2rem;
    width: 350px;
  }
`;

const Input = styled.input`
  align-self: center;
  border: none;
  background-color: #f3f4f6;
  padding: 1rem;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 700;
`;

const ApprovalsContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }

  & svg {
    color: green;
    height: 2rem;
    width: 2rem;
  }
`;

const EmployeerFirmContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & div {
    height: 6rem;
    border-bottom: 1.7px solid black;
  }
`;

const Print: React.FC<{ holiday: HolidayInfo }> = ({ holiday }) => {
  console.log(holiday);

  return (
    <PrintContainer id="pdf-content">
      <header>
        <Logo src={logo} />
        <HeadingContainer>
          <h1>Solicitud de Vacaciones</h1>
        </HeadingContainer>
      </header>

      {/* CONTENT */}
      <Section>
        <GroupGrid>
          <Group>
            <Label>Nombre</Label>
            <Input
              type="text"
              defaultValue={joinName({
                name: holiday.user?.name || '',
                motherSurname: holiday.user?.motherSurname || '',
                paternSurname: holiday.user?.paternSurname || '',
              })}
            />
          </Group>

          <Group>
            <Label>No. de Empleado</Label>
            <Input type="text" defaultValue={holiday?.user?.employNumber} />
          </Group>
          <Group>
            <Label>Departamento</Label>
            <Input type="text" defaultValue={holiday?.user?.department?.name} />
          </Group>

          <Group>
            <Label>No. de días pedidos</Label>
            <Input type="text" defaultValue={holiday?.days?.length} />
          </Group>

          <Group>
            <Label>Fechas</Label>
            <p>
              {holiday?.days
                ?.map((day) =>
                  formatDate(day + '', {
                    monthsName: true,
                    spaces: false,
                    separationBy: '-',
                  })
                )
                .join(', ')}
            </p>
          </Group>

          <Group>
            <Label>Notas del Empleado</Label>
            <p>{holiday?.observation}</p>
          </Group>

          <ApprovalsContainer>
            <label>
              {joinName({
                name: holiday.manager?.name || '',
                motherSurname: holiday.manager?.motherSurname || '',
                paternSurname: holiday.manager?.paternSurname || '',
              })}
            </label>
            <label>Jefe Directo</label>
            <span>
              <HiOutlineCheck />
              Aprobado
            </span>
          </ApprovalsContainer>

          <ApprovalsContainer>
            <label>
              {joinName({
                name: holiday.admin?.name || '',
                motherSurname: holiday.admin?.motherSurname || '',
                paternSurname: holiday.admin?.paternSurname || '',
              })}
            </label>
            <label>Administrador - R.H</label>
            <span>
              <HiOutlineCheck />
              Aprobado
            </span>
          </ApprovalsContainer>

          <EmployeerFirmContainer>
            <div></div>
            <label>Firma del Empleado</label>
          </EmployeerFirmContainer>
        </GroupGrid>
      </Section>
    </PrintContainer>
  );
};

export default Print;
