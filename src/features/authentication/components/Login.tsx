import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../../shared/style/fonts.css';

// @ts-expect-error have not typesss
import ReCAPTCHA from 'react-google-recaptcha';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineEyeSlash } from 'react-icons/hi2';

import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLogin } from '../hooks/useLogin';
import { media } from '../../../shared/style/media';
import Logo from '../../../shared/ui/Logo';
import logoImg from '../../../../public/logo-dai.png';

const LoginContainer = styled.div`
  gap: 5rem;
  font-size: 2rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 60rem;

  border-radius: 12px;
  padding: 5rem;
  box-shadow: var(--shadow-md);

  background-color: #ebebeb;
  color: #000;
  z-index: 99;

  @media (${media.mobile}) {
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;

    width: 100vw;
    height: 100vh;
    border-radius: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 2.5rem;

    & h2 {
      font-size: 3.5rem;
      color: var(--color-grey-700);
      color: white;
      font-weight: 600;
    }
  }
`;

const SectionsContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  justify-content: space-around;

  & :last-child {
    margin: 2rem 0;
  }
`;

const SectionsContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  & h2 {
    text-align: center;
  }
`;

const TextBox = styled.input`
  border: none;
  background-color: transparent;
  color: black;
  letter-spacing: 0.7px;
  padding: 0.4rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  @media (${media.mobile}) {
    color: #fff;

    &::placeholder {
      color: #bbbfc5;
    }
  }
`;

const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #9ca3af;
  margin-bottom: 2rem;

  & svg {
    width: 3rem;
    height: 3rem;
    color: #6b7280;
    transition: all 0.2s;
  }

  @media (${media.mobile}) {
    & svg {
      height: 4.6rem;
      width: 4.6rem;
    }
  }
`;

const EyeContainer = styled.div`
  cursor: pointer;

  & svg:hover {
    color: #374151;
  }
`;

const Image = styled(Logo)`
  width: 20rem;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.459));

  @media ${media.mobile} {
    width: 25rem;
  }
`;

const Labels = styled.label`
  font-weight: bold;
`;

const ButtonSubmit = styled.button`
  margin-top: 2rem;
  background-color: #b91c1c;
  color: #e5e7eb;
  border: none;
  padding: 0.7rem;

  &:hover {
    background-color: #991b1b;
  }
`;

const Slogan = styled.blockquote`
  font-family: 'Brunshscn', sans-serif;
  font-size: 2rem;

  @media ${media.mobile} {
    font-size: 3rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 4rem;
`;

const Captcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

//TEMPORAL INTERFACE
interface TempForm {
  employNumber: string;
  password: string;
}

export default function Login() {
  const [isClicked, setClicked] = useState(false);
  const { register, handleSubmit } = useForm<TempForm>({});
  const { login } = useLogin();

  const [isCaptchaValid, setCaptchaValid] = useState(false);

  const onSubmit = (data: TempForm) => {
    if (isCaptchaValid) {
      console.log('El usuario no es un robot');
      console.log(data);
      login(data);
    } else {
      console.log('Por favor acepta el captcha antes de enviar el formulario');
      alert('Por favor completa el captcha antes de iniciar sesión');
    }
  };
  const captcha = useRef(null);

  const onChange = (value: string | null) => {
    if (value) {
      console.log('Captcha validado');
      setCaptchaValid(true);
    } else {
      console.log('Por favor acepta el captcha');
      setCaptchaValid(false);
    }
  };

  return (
    <LoginContainer>
      <SectionsContainerLeft>
        <Image src={logoImg} />
        <Slogan>¡ Tu Soporte en el Camino !</Slogan>
        <Title>¡Bienvenido!</Title>
      </SectionsContainerLeft>

      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionsContainerRight>
          <h2>Iniciar Sesión</h2>

          <Labels>Usuario</Labels>
          <TextFieldContainer>
            <TextBox
              title="Completa este campo"
              type="text"
              placeholder="Ingrese su usuario"
              id="employNumber"
              {...register('employNumber')}
              required
            ></TextBox>
            <HiOutlineUserCircle />
          </TextFieldContainer>
          <Labels>Contraseña</Labels>
          <TextFieldContainer>
            <TextBox
              title="Completa este campo"
              type={isClicked ? 'text' : 'password'}
              id="password"
              {...register('password')}
              placeholder="Ingrese su contraseña"
              required
            ></TextBox>
            <EyeContainer
              title={isClicked ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
              onClick={() => setClicked(!isClicked)}
            >
              {isClicked ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
            </EyeContainer>
          </TextFieldContainer>
          <Captcha>
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LdOB5kqAAAAAJGqkKSO16YP5sfExmhGSrut9vBJ"
              onChange={onChange}
            />
          </Captcha>
          <ButtonSubmit disabled={!isCaptchaValid}>Ingresar</ButtonSubmit>
        </SectionsContainerRight>
      </form>
    </LoginContainer>
  );
}
