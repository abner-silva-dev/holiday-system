import styled from 'styled-components';
import MainNav from './MainNav';
import Logo from './Logo';
import { media } from '../style/media';
// import logoImg from '../../../public/logo-dai.png';

interface PropsSidebar {
  $isOpen?: boolean;
}

const StyleSidebar = styled.aside<PropsSidebar>`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 3rem 1.4rem;

  grid-row: 1/-1;

  display: flex;
  flex-direction: column;

  gap: 6rem;

  @media ${media.tablet} {
    transition: all 0.4s ease-out;

    align-items: center;
    gap: 15rem;
    width: 100vw;
    height: 100vh;

    transform: translateY(-200%);
    position: absolute;
    z-index: 99;

    ${(props) =>
      props.$isOpen ? 'transform: translateY(0);' : 'transform: translateY(-100%)'}
  }
`;

const Sidebar: React.FC<PropsSidebar> = ({ $isOpen }) => {
  return (
    <StyleSidebar $isOpen={$isOpen}>
      <Logo src={'/logo-dai.png'} />
      <MainNav />
    </StyleSidebar>
  );
};

export default Sidebar;
