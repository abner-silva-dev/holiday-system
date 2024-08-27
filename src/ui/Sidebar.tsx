import styled from 'styled-components';
import MainNav from './MainNav';

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 2.4rem 2.4rem;

  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyleSidebar>
      <MainNav />
    </StyleSidebar>
  );
}

export default Sidebar;
