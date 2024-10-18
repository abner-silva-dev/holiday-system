import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 4rem 8rem;
`;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`;

function AppLayoutUser() {
  return (
    <StyledAppLayout>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayoutUser;
