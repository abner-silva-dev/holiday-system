import styled from 'styled-components';
import html2pdf from 'html2pdf.js';
import { HiOutlineCheck } from 'react-icons/hi2';
import letterhead from './../../public/membretado.png';
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
  position: relative;
  color: #000 !important;
  width: 210mm;

  border: 2px solid #b3b3b3;
  margin: auto;
  margin-top: 2rem;
  /* background-image: url(/membretado.png);
  background-position: center -25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 119%; */

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
  row-gap: 1.4rem;

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

const LetterHead = styled.img`
  height: 100%;
  width: 100%;
`;

const LetterHeadContainer = styled.div`
  position: absolute;
  right: -13%;
  z-index: -2;
  height: 100%;
  width: 130%;
`;

const tempHolidays = {
  _id: '67214ad899bdc0455950360a',
  days: [
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
    '2024-10-10T06:00:00.000Z',
    '2024-10-17T06:00:00.000Z',
    '2024-10-11T06:00:00.000Z',
  ],
  period: 'present',
  authorizationAdmin: 'rejected',
  authorizationManager: 'pending',
  observation:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=xg8s7vPEjkGHlb-yHsaGiaza-kZBmaRPsp5hEl7jw4lUQUM4RTRKVFNSNElaQ0QwRTRaV1dZU1IzTy4u&origin=QRCodehttps://forms.office.com/Pages/ResponsePage.aspx?id=xg8s7vPEjkGHlb-yHsaGiaza-kZBmaRPsp5hEl7jw4lUQUM4RTRKVFNSNElaQ0QwRTRaV1dZU1IzTy4u&origin=QRCodehttps://forms.office.com/Pages/ResponsePage.aspx?id=xg8s7vPEjkGHlb-yHsaGiaza-kZBmaRPsp5hEl7jw4lUQUM4RTRKVFNSNElaQ0QwRTRaV1dZU1IzTy4u&origin=QRCodehttps://forms.office.com/Pages/ResponsePage.aspx?id=xg8s7vPEjkGHlb-yHsaGiaza-kZBmaRPsp5hEl7jw4lUQUM4RTRKVFNSNElaQ0QwRTRaV1dZU1IzTy4u&origin=QRCode',
  createdAt: '2024-10-29T20:51:36.527Z',
  user: {
    daysGrantedBySeniority: {
      startDate: '2024-09-30T06:00:00.000Z',
      endDate: '2025-09-29T06:00:00.000Z',
      balance: 18,
    },
    daysGrantedBySeniorityFuture: {
      startDate: '2025-09-30T06:00:00.000Z',
      endDate: '2026-09-29T06:00:00.000Z',
      balance: 20,
    },
    daysGrantedBySeniorityPast: {
      startDate: '2023-09-30T06:00:00.000Z',
      endDate: '2024-09-29T06:00:00.000Z',
      balance: 16,
    },
    credit: {
      balance: 8,
      exp: '2025-09-29T06:00:00.000Z',
    },
    creditPast: {
      balance: 16,
      exp: '2025-11-29T06:00:00.000Z',
    },
    creditFuture: {
      balance: 20,
    },
    _id: '64fbf01e9b9f146bdc6a1a05',
    name: 'Sofía Martínez',
    paternSurname: 'Martínez',
    motherSurname: 'Moreno',
    employNumber: '5',
    photo: 'default.jpg',
    role: 'user',
    dateHiring: '2020-09-30T00:00:00.000Z',
    email: 'sofia.martinez@example.com',
    enterprise: {
      _id: '66d8b097a37e7c7823c03a11',
      name: 'Distribuidoras de Auto Industrias',
      nameAbreviate: 'DAI',
      phoneNumber: '34345343233',
      logo: 'default.png',
    },
    department: {
      _id: '66d8b2ee3a12eea2060d22fc',
      name: 'VENTAS NACIONALES',
      nameAbreviate: 'VN',
      enterprise: {
        _id: '66d8b097a37e7c7823c03a11',
        name: 'Distribuidoras de Auto Industrias',
        nameAbreviate: 'DAI',
        email: 'dai@gmail.com',
        phoneNumber: '34345343233',
        logo: 'default.png',
      },
    },
    password: 'Sofia1234',
    active: true,
    seniority: {
      years: 4,
      moths: 1,
      days: 13,
    },
    id: '64fbf01e9b9f146bdc6a1a05',
  },
  __v: 0,
  admin: {
    daysGrantedBySeniority: {
      startDate: '2024-08-09T06:00:00.000Z',
      endDate: '2025-08-08T06:00:00.000Z',
      balance: 16,
    },
    daysGrantedBySeniorityFuture: {
      startDate: '2025-08-09T06:00:00.000Z',
      endDate: '2026-08-08T06:00:00.000Z',
      balance: 18,
    },
    daysGrantedBySeniorityPast: {
      startDate: '2023-08-09T06:00:00.000Z',
      endDate: '2024-08-08T06:00:00.000Z',
      balance: 14,
    },
    credit: {
      balance: 16,
      exp: '2025-08-08T06:00:00.000Z',
    },
    creditPast: {
      balance: 14,
      exp: '2025-10-08T06:00:00.000Z',
    },
    creditFuture: {
      balance: 18,
    },
    _id: '64fbf01e9b9f146bdc6a1a0a',
    name: 'Roberto Moreno',
    paternSurname: 'Moreno',
    motherSurname: 'Ramírez',
    employNumber: '10',
    photo: 'default.jpg',
    role: 'admin',
    dateHiring: '2021-08-09T00:00:00.000Z',
    email: 'roberto.moreno@example.com',
    enterprise: {
      _id: '66d8b097a37e7c7823c03a11',
      name: 'Distribuidoras de Auto Industrias',
      nameAbreviate: 'DAI',
      phoneNumber: '34345343233',
      logo: 'default.png',
    },
    department: {
      _id: '66d8b2ee3a12eea2060d22ff',
      name: 'DIRECCIÓN COMERCIAL',
      nameAbreviate: 'DC',
      enterprise: {
        _id: '66d8b097a37e7c7823c03a11',
        name: 'Distribuidoras de Auto Industrias',
        nameAbreviate: 'DAI',
        email: 'dai@gmail.com',
        phoneNumber: '34345343233',
        logo: 'default.png',
      },
    },
    password: 'Roberto1234',
    active: true,
    seniority: {
      years: 3,
      moths: 3,
      days: 3,
    },
    id: '64fbf01e9b9f146bdc6a1a0a',
  },
  observationAdmin: '',
  id: '67214ad899bdc0455950360a',
};

const GroupContent = styled.div`
  padding: 4rem 5rem;
`;

const CutLeft = styled.div`
  position: absolute;
  z-index: 100;
  background-color: white;
  height: 100%;
  width: 500px;
  left: -63.6%;
`;

const CutRight = styled.div`
  position: absolute;
  z-index: 100;
  background-color: white;
  height: 100%;
  width: 500px;
  right: -63.6%;
`;

const Print: React.FC<{ holiday?: HolidayInfo }> = ({ holiday = tempHolidays }) => {
  console.log(holiday);

  return (
    <PrintContainer id="pdf-content">
      <CutRight />
      <LetterHeadContainer>
        <LetterHead src={letterhead} />
      </LetterHeadContainer>
      <CutLeft />
      <GroupContent>
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
      </GroupContent>
    </PrintContainer>
  );
};

export default Print;
