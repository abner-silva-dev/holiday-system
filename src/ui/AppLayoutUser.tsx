import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

import styled from 'styled-components';
import Header from '../features/user-app/Header';

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  /* grid-template-columns: 28rem 1fr; */
  /* grid-template-rows: auto 1fr; */
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 4rem 8rem;
  /* overflow-y: scroll; */
`;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`;

function AppLayoutUser() {
  return (
    <StyledAppLayout>
      {/* <Header /> */}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayoutUser;
