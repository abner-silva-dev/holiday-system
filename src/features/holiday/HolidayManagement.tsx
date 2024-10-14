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
import { Link, useSearchParams } from 'react-router-dom';
import CreateHoliday from './CreateHoliday';
import { useState } from 'react';
import AuthorizationCard from './AuthorizationCard';
import { HolidayInfo } from './type';
import ContentEmpty from '../../ui/ContentEmpty';
import { media } from '../../style/media';

const HolidayInfoStyles = styled.div`
  display: grid;
  grid-template-columns: 50rem 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;

  @media (${media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const HolidayOptions = styled.header`
  display: flex;
  justify-content: space-between;
`;

//MAIN
const HolidayMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);

  overflow-y: scroll;
  border-radius: 9px;
  height: 55rem;
`;

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
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1.6rem;
  gap: 1rem;
  /* text-transform: uppercase; */

  display: flex;
  align-items: center;
  align-self: center;

  color: #fff;
  background: linear-gradient(to right top, #862e9c, #8031a6, #7834b0, #6d38ba, #5f3dc4);
  /* background-color: #862e9c; */
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-grey-200);
  transition: all 0.2s ease-in;

  &:hover {
    animation: gradientShift 0.5s ease-in-out forwards;
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
  const [searchParams] = useSearchParams();
  const history = searchParams.get('history');
  const [isClicked, setClicked] = useState(false);

  const { user } = useUser();

  if (!user) return null;
  const { holidays } = user;
  if (!holidays) return null;

  let holidaysFilter: HolidayInfo[] = [];

  //FILTERS
  switch (history) {
    case 'request':
      holidaysFilter = holidays.filter((holiday: HolidayInfo) => {
        return (
          holiday.authorizationAdmin !== 'approved' &&
          holiday.authorizationAdmin !== 'rejected'
        );
      });
      break;
    case 'successfull':
      holidaysFilter = holidays.filter((holiday: HolidayInfo) => {
        return (
          holiday.authorizationAdmin === 'approved' &&
          holiday.authorizationManager === 'approved'
        );
      });
      break;
    case 'rejected':
      holidaysFilter = holidays.filter((holiday: HolidayInfo) => {
        return (
          holiday.authorizationAdmin === 'rejected' ||
          holiday.authorizationManager === 'rejected'
        );
      });
      break;
    case 'all':
      holidaysFilter = holidays;
      break;
  }

  return (
    <Row>
      <Row type="horizontal">
        <GoBack to="/">
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
              value={`${user.credit} de ${user.daysGrantedBySeniority}`}
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
            value={`${
              holidays.filter(
                (holiday) =>
                  holiday.authorizationAdmin !== 'approved' ||
                  holiday.authorizationManager !== 'approved'
              ).length
            } solicitudes`}
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
            Solicitar
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

        <HolidayMain>
          {isClicked ? (
            <CreateHoliday onClose={setClicked} />
          ) : (
            <>
              {holidaysFilter.length === 0 && <ContentEmpty />}
              {holidaysFilter.map((holiday: HolidayInfo) => {
                return <AuthorizationCard holiday={holiday} key={holiday._id} />;
              })}
            </>
          )}
        </HolidayMain>
      </HolidayInfoStyles>
    </Row>
  );
};

export default HolidayManagement;
