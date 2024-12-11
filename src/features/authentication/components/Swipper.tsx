import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';

const StyledSwiper = styled(Swiper)`
  position: relative;
  pointer-events: none;
  user-select: none;

  & img {
    filter: brightness(50%);
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
`;

const Swipper = () => {
  return (
    <StyledSwiper
      spaceBetween={30}
      effect={'fade'}
      navigation={false}
      allowTouchMove={false}
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
      <SwiperSlide>
        <img src="./daiphotos/photo5.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./daiphotos/photo6.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./daiphotos/photo7.jpeg" />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default Swipper;
