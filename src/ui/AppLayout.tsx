import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

import styled from 'styled-components';

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 4rem 8rem;
  overflow-y: scroll;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
