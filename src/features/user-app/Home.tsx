import styled from 'styled-components';
import Heading from '../../ui/Heading';
import Header from './Header';

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

const Button = styled.button`
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
  overflow-y: scroll;
`;

const HowToSection = styled.section``;

const Home = () => {
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
            <Button>Solicitar vacaciones ahora</Button>
          </TextContainer>
        </HeroSection>

        <HowToSection>
          <Heading as="h1">¿Cómo Solicitar Vacaciones?</Heading>
          <Heading as="h2">01</Heading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sapiente
            accusantium officiis tempora impedit deleniti animi fugiat quasi harum quas
            non praesentium aut corrupti corporis, nihil porro ipsa exercitationem sed?
          </p>
          <Heading as="h2">02</Heading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero
            aspernatur suscipit asperiores temporibus, consequatur nemo, impedit quae
            debitis repellat officia modi maxime illum recusandae vel laboriosam deserunt
            cum a.
          </p>
          <Heading as="h2">03</Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque natus alias
            nam veniam fuga facilis vel qui officiis. Laboriosam dicta reiciendis dolore
            ipsam dolorem quod ipsa aliquid tempora! Quisquam, veritatis.
          </p>
        </HowToSection>
      </HomeMain>
    </>
  );
};

export default Home;
