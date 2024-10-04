import styled from 'styled-components';
import {
  HiCalendarDays,
  HiMiniClipboardDocumentCheck,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';
import { FaHouse } from 'react-icons/fa6';
import { useEffect } from 'react';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { NavLink } from 'react-router-dom';
import logo from './../../../public/logo-dai.png';
const HeaderContainer = styled.div`
  padding: 1rem 2rem 0rem 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 12rem;
`;

const UserIcon = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
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
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  cursor: pointer;
  color: var(--color-grey-600);

  & span {
    font-size: 1.2rem;
  }

  &:hover {
    color: #7c0b0b;
    border-bottom: 2px solid #7c0b0b;
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
    stroke: var(--color-grey-600);
  }

  position: relative;
`;

const HeaderRightSide = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const Header = () => {
  const [isDark, setIsDark] = useLocalStorageState(
    window.matchMedia('(prefers-color-sc|heme: dark)').matches,
    'isDarkMode'
  );
  useEffect(() => {
    const switchDark = document.querySelector('html');

    if (isDark) switchDark?.classList.add('dark-mode');
    else switchDark?.classList.remove('dark-mode');
  }, [isDark]);

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
                <NavButton to="">
                  <FaHouse />
                  <span>Inicio</span>
                </NavButton>
              </li>
              <li>
                <NavButton to="">
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
          <UserIcon src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"></UserIcon>
        </HeaderRightSide>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
