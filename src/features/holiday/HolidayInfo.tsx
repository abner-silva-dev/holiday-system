import styled, { css } from 'styled-components';

import { HiCalendarDays } from 'react-icons/hi2';
import { HiOutlineCheck } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';
import { HiOutlineClock } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { HiOutlineChevronLeft } from 'react-icons/hi2';

import Stat from '../../ui/Start';
import UserPhoto from '../users/UserPhoto';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';

const HolidayInfoStyles = styled.div`
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 50rem 1fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;
  width: 75vw;
`;

const UserInfo = styled.aside`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 9px;
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

const TextTitle = styled.main`
  color: var(--color-red-800);
  font-weight: bold;
`;

//MAIN
const HolidayMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);
  /* padding: 2rem 4rem 8rem; */
  overflow-y: scroll;
  border-radius: 9px;
  height: 40rem;
`;

const HeadingMain = styled.h3`
  margin-bottom: 2rem;
`;

const AuthorizationCard = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  grid-column: 1 /3;
  border-radius: 9px;
  box-shadow: var(--shadow-sm);
`;

const StateColor = styled.div`
  height: 0.6rem;
  width: 0.6rem;
  padding: 1.6rem;
  /* background-color: #35e478; */
  background-color: #03682a;
  /* border-radius: 50%; */
  align-self: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  /* font-size: 2rem; */
`;

const AuthorizationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  background-color: transparent;

  margin-bottom: 1.8rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  & svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover {
  }
`;

const TitleBold = styled.span`
  font-weight: bold;
`;

const SubTitle = styled.span`
  color: var(--color-red-800);
  font-weight: bold;
`;

const RowMain = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const ObservationField = styled.textarea`
  resize: none;
  /* height: 8rem; */
  /* border-radius: 9px; */
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
`;

const RowComponents = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */

  display: flex;
  justify-content: space-between;
  padding: 0 3.2rem;
`;

// Periods Component

const PeriodComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const PeriodTag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1.2rem;
  color: var(--color-brand-900);

  border: 1px solid var(--color-brand-200);
  box-shadow: var(--shadow-md);
  border-radius: 9px;
  font-size: 1.8rem;
  padding: 1.6rem 3.2rem 1.6rem 1.2rem;
  background-color: var(--color-brand-50);

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
  top: 50%;
  transform: translateY(-50%);

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
  /* background-color: var(--color-green-100); */
  display: flex;
  align-items: center;
  /* border-radius: 50%; */
`;

const HolidayInfo = () => {
  return (
    <Row>
      <Heading as="h1">Admnistracion de vacaciones</Heading>
      <HolidayInfoStyles>
        <UserInfo>
          <UserImage>
            <UserPhoto
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s"
              alt="User Photo"
              $size="large"
              $type="square"
            />
          </UserImage>
          <UserData>
            <Group>
              <TextTitle>No. Empleado</TextTitle>
              <span>20251086</span>
            </Group>
            <Group>
              <TextTitle>Departamento</TextTitle>
              <span>Tecnologias de la informacion</span>
            </Group>
            <Group>
              <TextTitle>Nombre</TextTitle>
              <span>Silva Araujo Dylan Abner</span>
            </Group>
            <Group>
              <TextTitle>Jefe directo</TextTitle>
              <span>Ricardo Anaya Obrador</span>
            </Group>
            <Group>
              <TextTitle>Antiguedad</TextTitle>
              <span>2 años 2 meses 1 dia</span>
            </Group>
            <Group>
              <TextTitle>Puesto</TextTitle>
              <span>Hombre de negocios</span>
            </Group>
            <Group>
              <Stat
                color="red"
                icon={<HiCalendarDays />}
                title="Días Restantes"
                value="2 de 12"
              />
            </Group>
            <Group>
              <Stat
                color="brand"
                icon={<HiCalendarDays />}
                title="Vacaciones del periodo"
                value="2024"
              />
            </Group>
          </UserData>
        </UserInfo>
        <HolidayOptions>
          <Stat
            color="green"
            icon={<HiCalendarDays />}
            title="Solicitudes pendientes"
            value="2 solicitudes"
          />

          {/* PERIOD COMPONENT */}
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

        {/* HOLIDAY MAIN */}
        <HolidayMain>
          <AuthorizationCard>
            <HeadingMain>Solicitud 1: 12/09/2024 - 22/09/2024</HeadingMain>
            <RowComponents>
              <ColumnContainer>
                <ColumnContainer>
                  <TitleBold>Jefe Directo</TitleBold>
                  <RowMain>
                    <StateColor></StateColor>
                    <span>Aprobado</span>
                  </RowMain>
                </ColumnContainer>

                <ColumnContainer>
                  <TitleBold>Administrador</TitleBold>
                  <RowMain>
                    <StateColor></StateColor>
                    <span>Aprobado</span>
                  </RowMain>
                </ColumnContainer>
              </ColumnContainer>

              <ColumnContainer>
                <ColumnContainer>
                  <RowMain>
                    <SubTitle>Observación</SubTitle>
                    <span>Lic. Juan Lopez Gonzalez</span>
                  </RowMain>
                  <ObservationField></ObservationField>
                  <AuthorizationButtons>
                    <Button>
                      <HiOutlineCheck />
                      Aceptar
                    </Button>
                    <Button>
                      <HiOutlineXMark />
                      Rechazar
                    </Button>
                  </AuthorizationButtons>
                </ColumnContainer>

                <ColumnContainer>
                  <RowMain>
                    <SubTitle>Observación</SubTitle>
                    <span>Lic. José Crisóstomo Cortés</span>
                  </RowMain>
                  <ObservationField></ObservationField>
                  <AuthorizationButtons>
                    <Button>
                      <HiOutlineCheck />
                      Aceptar
                    </Button>
                    <Button>
                      <HiOutlineXMark />
                      Rechazar
                    </Button>
                  </AuthorizationButtons>
                </ColumnContainer>
              </ColumnContainer>
            </RowComponents>
          </AuthorizationCard>
          <AuthorizationCard>
            <HeadingMain>Solicitud 1: 12/09/2024 - 22/09/2024</HeadingMain>
            <RowComponents>
              <ColumnContainer>
                <ColumnContainer>
                  <TitleBold>Jefe Directo</TitleBold>
                  <RowMain>
                    <StateColor></StateColor>
                    <span>Aprobado</span>
                  </RowMain>
                </ColumnContainer>

                <ColumnContainer>
                  <TitleBold>Administrador</TitleBold>
                  <RowMain>
                    <StateColor></StateColor>
                    <span>Aprobado</span>
                  </RowMain>
                </ColumnContainer>
              </ColumnContainer>

              <ColumnContainer>
                <ColumnContainer>
                  <RowMain>
                    <SubTitle>Observación</SubTitle>
                    <span>Lic. Juan Lopez Gonzalez</span>
                  </RowMain>
                  <ObservationField></ObservationField>
                  <AuthorizationButtons>
                    <Button>
                      <HiOutlineCheck />
                      Aceptar
                    </Button>
                    <Button>
                      <HiOutlineXMark />
                      Rechazar
                    </Button>
                  </AuthorizationButtons>
                </ColumnContainer>

                <ColumnContainer>
                  <RowMain>
                    <SubTitle>Observación</SubTitle>
                    <span>Lic. José Crisóstomo Cortés</span>
                  </RowMain>
                  <ObservationField></ObservationField>
                  <AuthorizationButtons>
                    <Button>
                      <HiOutlineCheck />
                      Aceptar
                    </Button>
                    <Button>
                      <HiOutlineXMark />
                      Rechazar
                    </Button>
                  </AuthorizationButtons>
                </ColumnContainer>
              </ColumnContainer>
            </RowComponents>
          </AuthorizationCard>
        </HolidayMain>
      </HolidayInfoStyles>
    </Row>
  );
};

export default HolidayInfo;
