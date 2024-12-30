import {
  HiCalendarDays,
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';

import styled from 'styled-components';
import { API_DAI_BASE } from '../../../../config';

// import logo from './../../../../../public/logo-dai.png';
import UserPhoto from '../../../users/components/UserPhoto';
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocalStorageState } from '../../../../shared/hooks/useLocalStorageState';
import { useLogout } from '../../../authentication/hooks/useLogout';
import { useMe } from '../../../authentication/hooks/useMe';

const HeaderContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(50px);
  padding: 0 2rem;
  color: #fff;
  width: 100%;
  z-index: 200;

  & svg {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 10rem;
`;

const NavButton = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 1.2rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  cursor: pointer;
`;

const DarkMode = styled.div`
  display: inline-block;

  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  position: relative;
`;

const LogOff = styled.div`
  cursor: pointer;
`;

const HeaderText = styled.span`
  /* font-size: 1.6rem;
  font-weight: 600; */
  color: #fff;
  /* color: var(--color-grey-700); */
`;

const Group = styled.div`
  display: flex;
  gap: 3rem;
  text-align: center;
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
        <Group>
          <NavButton to="/user/home">
            <div>
              <Logo src={'/logo-dai.png'}></Logo>
            </div>
          </NavButton>

          <NavButton to="/user/me">
            <UserPhoto
              src={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
              alt="user photo"
            />
            <HeaderText>{userAuthenticated.name}</HeaderText>
          </NavButton>

          <NavButton to={`/user/holidays/${userAuthenticated.id}?history=request`}>
            <HiCalendarDays />
            <HeaderText>Solicitar Vacaciones</HeaderText>
          </NavButton>
        </Group>
        <Group>
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
        </Group>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
