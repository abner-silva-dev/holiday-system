import styled, { css } from 'styled-components';

import { HiCalendarDays, HiArrowLeft } from 'react-icons/hi2';

import { HiOutlineClock } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';

import Stat from '../../ui/Start';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Filter from '../../ui/Filter';

import { useUser } from '../users/useUser';
import UserCard from '../users/UserCard';
import { Link } from 'react-router-dom';
import CreateHoliday from './CreateHoliday';
import { useState } from 'react';
import AuthorizationCard from './AuthorizationCard';

const HolidayInfoStyles = styled.div`
  display: grid;
  grid-template-columns: 50rem 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;
`;

const HolidayOptions = styled.header`
  display: flex;
  justify-content: space-between;
`;

//MAIN
const HolidayMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);

  overflow-y: scroll;
  border-radius: 9px;
  height: 50rem;
`;

// const HeadingMain = styled.h3`
//   margin-bottom: 2rem;
// `;

// const AuthorizationCard = styled.div`
//   background-color: var(--color-grey-0);
//   padding: 2rem;
//   grid-column: 1 /3;
//   border-radius: 9px;
//   box-shadow: var(--shadow-sm);
// `;

// const StateColor = styled.div`
//   background-color: #03682a;
//   padding: 1.6rem;
//   height: 0.6rem;
//   width: 0.6rem;
//   align-self: center;
// `;

// const ColumnContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
// `;

// const AuthorizationButtons = styled.div`
//   background-color: transparent;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 1.8rem;
//   gap: 4rem;
// `;

// const Button = styled.button`
//   background-color: transparent;
//   border: none;
//   font-weight: bold;

//   display: flex;
//   align-items: center;
//   text-transform: uppercase;

//   & svg {
//     height: 2rem;
//     width: 2rem;
//   }

//   &:hover {
//   }
// `;

// const TitleBold = styled.span`
//   font-weight: bold;
// `;

// const SubTitle = styled.span`
//   color: var(--color-red-800);
//   font-weight: bold;
// `;

// const RowMain = styled.div`
//   display: flex;
//   gap: 1.8rem;
// `;

// const ObservationField = styled.textarea`
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-400);
//   resize: none;
//   box-shadow: var(--shadow-sm);
// `;

// const RowComponents = styled.div`
//   display: flex;
//   padding: 0 3.2rem;
//   justify-content: space-between;
// `;

const PeriodComponent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1rem;
`;

const PeriodTag = styled.div`
  background-color: var(--color-brand-50);
  color: var(--color-brand-900);
  font-size: 1.8rem;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 1.2rem;

  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--color-brand-200);
  padding: 1.6rem 3.2rem 1.6rem 1.2rem;
  border-radius: 9px;
  box-shadow: var(--shadow-md);

  & svg {
    height: 4rem;
    width: 4rem;
  }
`;

const TagTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const periodBtn = css`
  background-color: var(--color-brand-900);
  border: none;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;

  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  box-shadow: var(--shadow-md);
  transform: all 0.2s;
  & svg {
    height: 2rem;
    width: 2rem;
    stroke: var(--color-grey-100);
  }
  &:hover {
    background-color: var(--color-brand-800);
  }
`;

const PeriodButtonLeft = styled.button`
  ${periodBtn}

  left: -1.3rem;
`;
const PeriodButtonRight = styled.button`
  ${periodBtn}

  right: -1.3rem;
`;

const TagTitle = styled.span`
  font-weight: bold;
`;

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnIcon = styled.button`
  padding: 0.7rem 1rem;
  font-weight: 600;
  font-size: 1.3rem;
  gap: 1rem;

  display: flex;
  align-items: center;
  align-self: center;

  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-grey-200);

  &:hover {
    background-color: var(--color-green-100);
    color: black;
  }

  & svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

const GoBack = styled(Link)`
  border: none;
  background-color: transparent;

  & svg {
    color: var(--color-grey-900);
    width: 6rem;
    height: 3rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const HolidayManagement = () => {
  const { user } = useUser();

  const [isClicked, setClicked] = useState(false);
  return (
    <Row>
      <Row type="horizontal">
        <GoBack to="/holidays">
          <HiArrowLeft />
        </GoBack>
        <Heading as="h1">Administración de Vacaciones</Heading>
      </Row>
      <HolidayInfoStyles>
        <UserCard user={user}>
          <Stats>
            <Stat
              color="red"
              icon={<HiCalendarDays />}
              title="Días Restantes"
              value="2 de 12"
            />

            <Stat
              color="brand"
              icon={<HiCalendarDays />}
              title="Vacaciones del periodo"
              value="2024"
            />

            <Stat
              color="green"
              icon={<HiCalendarDays />}
              title="Vacaciones del periodo"
              value="2023 - 0/12"
            />

            <Stat
              color="blue"
              icon={<HiCalendarDays />}
              title="Vacaciones del periodo"
              value="2025 - 15/15"
            />
          </Stats>
        </UserCard>

        <HolidayOptions>
          <Stat
            color="green"
            icon={<HiOutlineClipboardDocumentList />}
            title="Solicitudes pendientes"
            value="2 solicitudes"
          />

          <PeriodComponent>
            <PeriodButtonLeft>
              <HiOutlineChevronLeft />
            </PeriodButtonLeft>
            <PeriodTag>
              <ClockContainer>
                <HiOutlineClock />
              </ClockContainer>
              <TagTextContainer>
                <TagTitle>Periodo</TagTitle>
                <span>2024</span>
              </TagTextContainer>
            </PeriodTag>
            <PeriodButtonRight>
              <HiOutlineChevronRight />
            </PeriodButtonRight>
          </PeriodComponent>
        </HolidayOptions>

        <Filters>
          <BtnIcon onClick={() => setClicked(!isClicked)} title="Crear vacaciones">
            <HiOutlineDocumentCheck />
            Registrar Vacaciones
          </BtnIcon>

          {isClicked ? null : (
            <Filter
              searchField="history"
              options={[
                { label: 'Solicitudes', value: 'request' },
                { label: 'Aceptadas', value: 'successfull' },
                { label: 'Rechazadas', value: 'rejected' },
                { label: 'Todas', value: 'all' },
              ]}
            />
          )}
        </Filters>

        {/* HOLIDAY MAIN */}
        <HolidayMain>
          {isClicked ? <CreateHoliday /> : <AuthorizationCard />}

          {/*  */}

          {/*  */}
        </HolidayMain>
      </HolidayInfoStyles>
    </Row>
  );
};

export default HolidayManagement;
