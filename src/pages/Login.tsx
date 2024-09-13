// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';

const StyledSwiper = styled(Swiper)`
  position: relative;
  & img {
    filter: brightness(50%);
    display: block;
    width: 100%;
    height: 100vh;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  font-size: 2.4rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 22px;
  padding: 5rem;
  background-color: white;

  z-index: 99;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TextBox = styled.input`
  border: none;
  border-bottom: 3px solid var(--color-red-800);
`;

const Image = styled.img`
  width: 20rem;
`;

export default function App() {
  return (
    <>
      <LoginContainer>
        <SectionsContainer>
          <Image src="logo-dai.png" />
          <h2>¡Bienvenido!</h2>
          <blockquote>"El futuro, el hoy, el bien comienzo"</blockquote>
          <blockquote>Albert Einstein</blockquote>
        </SectionsContainer>
        <SectionsContainer>
          <h1>Iniciar Sesión</h1>
          <label>Usuario</label>
          <TextBox type="text" placeholder="Ingrese su Usuario"></TextBox>
          <label>Contraseña</label>
          <TextBox type="text" placeholder="Ingrese su Contraseña"></TextBox>
          <button>Ingresar</button>
        </SectionsContainer>
      </LoginContainer>
      <StyledSwiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./daiphotos/photo1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./daiphotos/photo4.jpeg" />
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
}

// const Login = () => {
//   return (
//     <div>
//       <h1>login</h1>
//     </div>
//   );
// };

// export default Login;
