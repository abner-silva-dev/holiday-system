import styled from 'styled-components';
import MainNav from './MainNav';
import Logo from './Logo';

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 2.4rem 2.4rem;

  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

function Sidebar() {
  return (
    <StyleSidebar>
      <Logo src="/logo-dai.png" />
      <MainNav />
    </StyleSidebar>
  );
}

export default Sidebar;
