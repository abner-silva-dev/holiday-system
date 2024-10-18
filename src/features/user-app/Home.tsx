import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../ui/Heading';
import { Link } from 'react-router-dom';
import { useMe } from '../authentication/useMe';
import step1 from '../../../public/mockups/step1.png';
import step2 from '../../../public/mockups/step2.png';
import step3 from '../../../public/mockups/step3.png';
import step4 from '../../../public/mockups/step4.png';
import { media } from '../../style/media';

// --- Modal Styles ---
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.616);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: var(--color-grey-100);
  padding: 2rem;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.6rem;

  &:hover {
    background: #2980b9;
  }
`;

// --- Other Styles ---
const HeroSection = styled.section`
  background-image: linear-gradient(rgba(34, 34, 34, 0.7), rgba(0, 0, 0, 0.7)),
    url(./../../../public/banner.jpg);
  background-size: cover;
  height: 100vh;
  background-position: center;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 3.2rem 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

const HeroHeading = styled(Heading)`
  font-size: 4rem;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 2.4rem;
`;

const Button = styled(Link)`
  background-color: #3498db;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const HomeMain = styled.main`
  background-color: var(--color-grey-100);
  background-position: center;
  background-repeat: no-repeat;
`;

const HowToSection = styled.section`
  max-width: 140rem;
  margin: 0 auto;
  padding: 7.2rem 0;
`;

const HowToNumber = styled(Heading)`
  font-size: 5rem;
  color: var(--color-blue-300);
`;

const HowToHeading = styled(Heading)`
  font-size: 2.4rem;
`;

const HowToContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4.8rem;
  row-gap: 6rem;
  padding: 0 3.6rem;

  @media ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 0.8rem;
  border-radius: 9px;
  border: 1px solid var(--color-grey-100);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-0);
  padding: 2.8rem 3.2rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }
`;

const ImageStepContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepImage = styled.img`
  width: 90%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubHeading = styled(Heading)`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 8rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  & :last-child {
    background-color: #f59f00;

    &:hover {
      background-color: #f08c00;
    }
  }

  @media ${media.tablet} {
    flex-direction: column;
  }
`;

const Home = () => {
  const { userAuthenticated } = useMe();
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleScrollToHowToSection = () => {
    const howToSection = document.getElementById('ht-section');
    if (howToSection) {
      howToSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!userAuthenticated) return null;

  return (
    <>
      {modalImage && (
        <ModalBackground onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={modalImage} alt="Step Image" />
            <CloseButton onClick={closeModal}>Cerrar</CloseButton>
          </ModalContent>
        </ModalBackground>
      )}

      <HomeMain>
        <HeroSection>
          <TextContainer>
            <HeroHeading as="h1">¡BIENVENIDO!</HeroHeading>
            <Description>
              Portal de vacaciones, diseñado para hacer más fácil la gestión de vacaciones
              de los empleados. Solicita tus vacaciones sin complicaciones.
            </Description>
            <ButtonGroup>
              <Button to={`/user/holidays/${userAuthenticated.id}?history=request`}>
                ¡Solicitar vacaciones!
              </Button>
              <Button to={''} onClick={handleScrollToHowToSection}>
                ¿Cómo solicitar vacaciones?
              </Button>
            </ButtonGroup>
          </TextContainer>
        </HeroSection>

        <HowToSection id="ht-section">
          <SubHeading as="h1">¿Cómo Solicitar Vacaciones?</SubHeading>

          <HowToContainer>
            <StepContainer onClick={() => openModal(step1)}>
              <Group>
                <HowToNumber as="h2">01</HowToNumber>
                <Text>
                  <HowToHeading as="h2">
                    Haga clic al botón "Solicitar Vacaciones"
                  </HowToHeading>
                  <p>
                    Lo llevará a la "Administración de Vacaciones", donde podrá visualizar
                    su información y crear solicitudes.
                  </p>
                </Text>
              </Group>
              <ImageStepContainer>
                <StepImage src={step1} />
              </ImageStepContainer>
            </StepContainer>

            <StepContainer onClick={() => openModal(step2)}>
              <Group>
                <HowToNumber as="h2">02</HowToNumber>
                <Text>
                  <HowToHeading as="h2">Haga clic en el botón "Solicitar"</HowToHeading>
                  <p>
                    Lo llevará a un formulario donde podrá ingresar las fechas deseadas y
                    notas personales.
                  </p>
                </Text>
              </Group>
              <ImageStepContainer>
                <StepImage src={step2} />
              </ImageStepContainer>
            </StepContainer>

            <StepContainer onClick={() => openModal(step3)}>
              <Group>
                <HowToNumber as="h2">03</HowToNumber>
                <Text>
                  <HowToHeading as="h2">Seleccione sus fechas deseadas</HowToHeading>
                  <p>
                    Haga clic en el primer campo de texto para abrir el calendario y
                    seleccione los días que desea solicitar de vacaciones.
                  </p>
                </Text>
              </Group>
              <ImageStepContainer>
                <StepImage src={step3} />
              </ImageStepContainer>
            </StepContainer>

            <StepContainer onClick={() => openModal(step4)}>
              <Group>
                <HowToNumber as="h2">04</HowToNumber>
                <Text>
                  <HowToHeading as="h2">
                    Consulte el estado de sus vacaciones
                  </HowToHeading>
                  <p>
                    Una vez creada su solicitud podrá visualizar el estado actual de sus
                    vacaciones en la misma página.
                  </p>
                </Text>
              </Group>
              <ImageStepContainer>
                <StepImage src={step4} />
              </ImageStepContainer>
            </StepContainer>
          </HowToContainer>
        </HowToSection>
      </HomeMain>
    </>
  );
};

export default Home;
