import styled from 'styled-components';
import { HiCalendarDays, HiMiniClipboardDocumentCheck } from 'react-icons/hi2';
import { FaHouse } from 'react-icons/fa6';

const HeaderContainer = styled.div`
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1rem 2rem 0rem 2rem;
  @media (max-width: 48em) {
    font-size: 0.9rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 12rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const UserIcon = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavButton = styled.div`
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

  @media (max-width: 48em) {
    border-bottom: none;
    border-top: 2px solid transparent;
  }

  & span {
    font-size: 1.2rem;
  }

  &:hover,
  &:visited,
  &:active {
    color: #7c0b0b;
    border-bottom: 2px solid #7c0b0b;

    @media (max-width: 48em) {
      border-bottom: none;
      border-top: 2px solid #7c0b0b;
    }
  }

  & svg {
    height: 4rem;
    width: 4rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <Logo src="logo-dai.png"></Logo>
        </div>
        <div>
          <nav>
            <NavList>
              <li>
                <NavButton>
                  <FaHouse />
                  <span>Inicio</span>
                </NavButton>
              </li>
              <li>
                <NavButton>
                  <HiCalendarDays />
                  <span>Solicitar Vacaciones</span>
                </NavButton>
              </li>
              <li>
                <NavButton>
                  <HiMiniClipboardDocumentCheck />

                  <span>Consultar Vacaciones</span>
                </NavButton>
              </li>
            </NavList>
          </nav>
        </div>

        <div>
          <UserIcon src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"></UserIcon>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
