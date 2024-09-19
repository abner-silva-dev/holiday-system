import styled from 'styled-components';

import { HiOutlineCheck } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';

const AuthorizationContainer = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem;
  grid-column: 1 /3;
  border-radius: 9px;
  box-shadow: var(--shadow-sm);
`;

const StateColor = styled.div`
  background-color: #03682a;
  padding: 1.6rem;
  height: 0.6rem;
  width: 0.6rem;
  align-self: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const AuthorizationButtons = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
  gap: 4rem;
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
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-400);
  resize: none;
  box-shadow: var(--shadow-sm);
`;

const RowComponents = styled.div`
  display: flex;
  padding: 0 3.2rem;
  justify-content: space-between;
`;

const HeadingMain = styled.h3`
  margin-bottom: 2rem;
`;

const AuthorizationCard = () => {
  return (
    <>
      <AuthorizationContainer>
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
      </AuthorizationContainer>
      <AuthorizationContainer>
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
      </AuthorizationContainer>
    </>
  );
};

export default AuthorizationCard;
