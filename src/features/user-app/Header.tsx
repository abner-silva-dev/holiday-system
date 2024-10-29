import styled from 'styled-components';
import {
  HiCalendarDays,
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';

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

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  /* width: 20rem; */
  padding: 1.2rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  color: #d1d5db;

  & span {
    font-size: 1.2rem;
  }

  & svg {
    height: 4rem;
    width: 4rem;
  }
`;

const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  /* width: 20rem; */
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

const LogOff = styled.div`
  cursor: pointer;

  & svg {
    height: 4rem;
    width: 4rem;
    stroke: #e5e7eb;
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
        <NavButton to="/user/home">
          <div>
            <Logo src={logo}></Logo>
          </div>
        </NavButton>

        <NavGroup>
          <UserPhoto
            src={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
            alt="user photo"
          />
          <span>{userAuthenticated.name}</span>
        </NavGroup>

        <NavButton to={`/user/holidays/${userAuthenticated.id}?history=request`}>
          <HiCalendarDays />
          <span>Solicitar Vacaciones</span>
        </NavButton>

        <DarkMode title="Modo Oscuro / Modo Claro" onClick={() => setIsDark(!isDark)}>
          {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </DarkMode>

        <LogOff
          title="Cerrar Sesión"
          onClick={() => {
            logout();
          }}
        >
          <HiOutlineArrowRightOnRectangle />
        </LogOff>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
