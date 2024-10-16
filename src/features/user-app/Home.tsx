import styled from 'styled-components';
import Heading from '../../ui/Heading';

import { Link } from 'react-router-dom';
import { useMe } from '../authentication/useMe';

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
  padding: 2rem;
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
  background-color: var(--color-grey-0);
`;

const HowToSection = styled.section`
  max-width: 130rem;
  margin: 0 auto;
  padding: 7.2rem 0;
`;

const HowToHeading = styled(Heading)`
  font-size: 8rem;
  color: #2980b9;
`;

const HowToContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 4.8rem;
  row-gap: 6.4rem;
`;

const StepContainer = styled.div``;

const ImageStepContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 60%;
    padding-bottom: 60%;
    background-color: #c5f6fa;
    z-index: 0;
  }

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 45%;
    padding-bottom: 45%;
    background-color: #99e9f2;
    z-index: 1;
  }
`;

const StepImage = styled.img`
  z-index: 10;
`;

const SubHeading = styled(Heading)`
  font-size: 3rem;
  margin-bottom: 3rem;
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
`;

const Home = () => {
  const { userAuthenticated } = useMe();

  const handleScrollToHowToSection = () => {
    const howToSection = document.getElementById('ht-section');
    if (howToSection) {
      howToSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!userAuthenticated) return null;

  return (
    <>
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
                Solicitar vacaciones ahora
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
            {/* <Heading as="h1">¿Cómo Solicitar Vacaciones?</Heading> */}

            <StepContainer>
              <HowToHeading as="h2">01</HowToHeading>
              <Heading as="h1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
              </Heading>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sapiente
                accusantium officiis tempora impedit deleniti animi fugiat quasi harum
                quas non praesentium aut corrupti corporis, nihil porro ipsa
                exercitationem sed?
              </p>
            </StepContainer>

            <ImageStepContainer>
              <StepImage src="https://png.pngtree.com/png-clipart/20220821/ourmid/pngtree-mockup-vector-iphone-6-background-transparent-png-image_6120221.png" />
            </ImageStepContainer>

            <ImageStepContainer>
              <StepImage src="https://png.pngtree.com/png-clipart/20220821/ourmid/pngtree-mockup-vector-iphone-6-background-transparent-png-image_6120221.png" />
            </ImageStepContainer>

            <StepContainer>
              <HowToHeading as="h2">02</HowToHeading>
              <Heading as="h1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
              </Heading>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero
                aspernatur suscipit asperiores temporibus, consequatur nemo, impedit quae
                debitis repellat officia modi maxime illum recusandae vel laboriosam
                deserunt cum a.
              </p>
            </StepContainer>
            <StepContainer>
              <HowToHeading as="h2">03</HowToHeading>
              <Heading as="h1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
              </Heading>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero
                aspernatur suscipit asperiores temporibus, consequatur nemo, impedit quae
                debitis repellat officia modi maxime illum recusandae vel laboriosam
                deserunt cum a.
              </p>
            </StepContainer>
            <ImageStepContainer>
              <StepImage src="https://png.pngtree.com/png-clipart/20220821/ourmid/pngtree-mockup-vector-iphone-6-background-transparent-png-image_6120221.png" />
            </ImageStepContainer>

            <ImageStepContainer>
              <StepImage src="https://png.pngtree.com/png-clipart/20220821/ourmid/pngtree-mockup-vector-iphone-6-background-transparent-png-image_6120221.png" />
            </ImageStepContainer>
            <StepContainer>
              <HowToHeading as="h2">04</HowToHeading>
              <Heading as="h1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
              </Heading>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero
                aspernatur suscipit asperiores temporibus, consequatur nemo, impedit quae
                debitis repellat officia modi maxime illum recusandae vel laboriosam
                deserunt cum a.
              </p>
            </StepContainer>
          </HowToContainer>
        </HowToSection>
      </HomeMain>
    </>
  );
};

export default Home;
