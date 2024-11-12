import { HiOutlineBell } from 'react-icons/hi2';
import { HiOutlineMoon } from 'react-icons/hi2';
import { HiOutlineSun } from 'react-icons/hi2';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';

import FloatFeat from './FloatFeat';
import UserPhoto from './../../src/features/users/UserPhoto';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../features/authentication/useLogout';
import { API_DAI_BASE } from '../config';
import { useMe } from '../features/authentication/useMe';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useHolidays } from '../features/holiday/useHolidays';
import { getStatusHoliday } from '../utils/holidayUtils';
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledHeader = styled.header`
  position: relative;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  background-color: var(--color-grey-0);
`;

const UserView = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-left: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Bell = styled.div`
  display: inline-block;
  border-radius: 50%;

  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    width: 2.8rem;
    stroke: var(--color-grey-600);
  }
  position: relative;
`;

const Notification = styled.div`
  position: absolute;
  top: -0.7rem;
  right: -0.5rem;
  padding: 0.9rem;
  width: 0.6rem;
  height: 0.6rem;
  font-size: 1.2rem;
  font-weight: 500;

  background-color: #ef4444;
  border: 1px solid var(--color-red-600);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  user-select: none;
`;

const DarkMode = styled.div`
  display: inline-block;

  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    width: 2.8rem;
    stroke: var(--color-grey-600);
  }

  position: relative;
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

const IconSpacing = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

function Header() {
  const [isDark, setIsDark] = useLocalStorageState(
    window.matchMedia('(prefers-color-sc|heme: dark)').matches,
    'isDarkMode'
  );

  const [isVisible, setIsVisible] = useState(false);
  const { logout } = useLogout();
  const { userAuthenticated } = useMe();

  const { holidays } = useHolidays();

  const { pendingHolidays } = getStatusHoliday(holidays);

  useEffect(() => {
    const switchDark = document.querySelector('html');

    if (isDark) switchDark?.classList.add('dark-mode');
    else switchDark?.classList.remove('dark-mode');
  }, [isDark]);

  return (
    <StyledHeader>
      <UserView to="/admin/me" title="Configuración de Usuario">
        <ImageContainer>
          <UserPhoto
            src={`${API_DAI_BASE}/img/user/${userAuthenticated?.photo}`}
            alt="user photo"
          />
        </ImageContainer>
        <span>{userAuthenticated?.name}</span>
      </UserView>

      <IconSpacing>
        <DarkMode title="Modo Oscuro / Modo Claro" onClick={() => setIsDark(!isDark)}>
          {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </DarkMode>

        <Bell title="Notificaciones" onClick={() => setIsVisible(!isVisible)}>
          {pendingHolidays?.length !== 0 ? (
            <Notification>{pendingHolidays.length}</Notification>
          ) : null}
          <HiOutlineBell />
        </Bell>

        {isVisible ? <FloatFeat onClose={() => setIsVisible(false)} /> : null}
        <LogOff
          title="Cerrar Sesión"
          onClick={() => {
            logout();
          }}
        >
          <HiOutlineArrowRightOnRectangle />
        </LogOff>
      </IconSpacing>
    </StyledHeader>
  );
}

export default Header;
