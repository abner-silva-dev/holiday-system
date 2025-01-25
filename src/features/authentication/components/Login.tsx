import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const LoginContainer = styled.div`
  display: flex;
  gap: 6rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 12px;
  padding: 4rem;
  box-shadow: var(--shadow-md);

  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
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
  text-align: center;

  & :last-child {
    margin: 2rem 0;
  }
`;

const Image = styled(Logo)`
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.459));

  @media ${media.mobile} {
    width: 25rem;
  }
`;

const Slogan = styled.blockquote`
  font-family: 'Brunshscn', sans-serif;
  font-size: 2rem;

  @media ${media.mobile} {
    font-size: 4rem;
  }
`;

const Title = styled.h1`
  font-family: 'Brunshscn', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  font-style: italic;

  @media ${media.mobile} {
    font-size: 5rem;
  }
`;

const SectionsContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${media.mobile} {
    gap: 4rem;
  }

  & h2 {
    text-align: center;
    font-weight: 700;
    font-size: 1.8rem;
    text-transform: uppercase;

    @media ${media.mobile} {
      font-size: 3rem;
    }
  }
`;

const TextBox = styled.input`
  border: none;
  background-color: transparent;
  color: #ced4da;
  letter-spacing: 0.7px;
  padding: 0.4rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  @media (${media.mobile}) {
    color: #ced4da;

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

const Labels = styled.label`
  color: #ced4da;
  font-weight: 600;
`;

const ButtonSubmit = styled.button`
  background-color: #b91c1c;
  color: #e5e7eb;
  border: none;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border-radius: 8px;
  padding: 0.7rem 0.7rem;

  &:hover {
    background-color: #991b1b;
  }

  @media ${media.mobile} {
    font-size: 2.5rem;
  }
`;

const Captcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.8);
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
      login(data);
    } else {
      alert('Por favor completa el captcha antes de iniciar sesión');
    }
  };
  const captcha = useRef(null);

  const onChange = (value: string | null) => {
    if (value) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  return (
    <LoginContainer>
      <SectionsContainerLeft>
        <div>
          <Image src={'/logo-dai.png'} />
          <Slogan>¡ Tu Soporte en el Camino !</Slogan>
          <Title>¡Bienvenido!</Title>
        </div>
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
              sitekey="6LdUnsIqAAAAAJ7drnNdDz0SS3MmFhiIZoz7kzW9"
              onChange={onChange}
              width={10}
            />
          </Captcha>

          <ButtonSubmit disabled={!isCaptchaValid}>Ingresar</ButtonSubmit>
        </SectionsContainerRight>
      </form>
    </LoginContainer>
  );
}
