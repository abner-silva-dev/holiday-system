import styled from 'styled-components';
import {
  HiCalendarDays,
  HiMiniClipboardDocumentCheck,
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';
import { FaHouse } from 'react-icons/fa6';
import { useEffect } from 'react';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { NavLink } from 'react-router-dom';
import logo from './../../../public/logo-dai.png';
import { useMe } from '../authentication/useMe';
import { API_DAI_BASE } from '../../config';
import UserPhoto from '../users/UserPhoto';
import { useLogout } from '../authentication/useLogout';

const HeaderContainer = styled.div`
  background-color: #000;
  padding: 0 2rem 0rem 2rem;
  /* position: fixed;  */
  width: 100%;
  z-index: 200;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 12rem;
`;

const UserIcon = styled(UserPhoto)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: none;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 20rem;
  padding: 1.2rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  cursor: pointer;
  color: #d1d5db;

  & span {
    font-size: 1.2rem;
  }

  &:hover {
    color: #dc2626;
    border-bottom: 2px solid #dc2626;
  }

  & svg {
    height: 4rem;
    width: 4rem;
  }
`;

const DarkMode = styled.div`
  display: inline-block;

  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    stroke: #d1d5db;
    transition: all 0.2s;

    &:hover {
      stroke: #dc2626;
    }
  }

  position: relative;
`;

const HeaderRightSide = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const LogOff = styled.div`
  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    width: 2.8rem;
    stroke: var(--color-grey-600);
  }
`;

const Header = () => {
  const { userAuthenticated } = useMe();
  const [isDark, setIsDark] = useLocalStorageState(
    window.matchMedia('(prefers-color-sc|heme: dark)').matches,
    'isDarkMode'
  );
  const { logout } = useLogout();

  useEffect(() => {
    const switchDark = document.querySelector('html');

    if (isDark) switchDark?.classList.add('dark-mode');
    else switchDark?.classList.remove('dark-mode');
  }, [isDark]);

  if (!userAuthenticated) return null;

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <Logo src={logo}></Logo>
        </div>
        <div>
          <nav>
            <NavList>
              <li>
                <NavButton to="/user/home">
                  <FaHouse />
                  <span>Inicio</span>
                </NavButton>
              </li>
              <li>
                <NavButton to={`/user/holidays/${userAuthenticated.id}?history=request`}>
                  <HiCalendarDays />
                  <span>Solicitar Vacaciones</span>
                </NavButton>
              </li>
              <li>
                <NavButton to="">
                  <HiMiniClipboardDocumentCheck />

                  <span>Consultar Vacaciones</span>
                </NavButton>
              </li>
            </NavList>
          </nav>
        </div>

        <HeaderRightSide>
          <DarkMode title="Modo Oscuro / Modo Claro" onClick={() => setIsDark(!isDark)}>
            {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
          </DarkMode>
          <UserIcon
            src={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
            alt="user photo"
            $border={true}
          ></UserIcon>
          <LogOff
            title="Cerrar Sesión"
            onClick={() => {
              logout();
            }}
          >
            <HiOutlineArrowRightOnRectangle />
          </LogOff>
        </HeaderRightSide>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
