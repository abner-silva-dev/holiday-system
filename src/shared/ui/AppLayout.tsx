import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useStateApp } from '../../context/stateAppContext';
import { HiListBullet, HiMiniXMark } from 'react-icons/hi2';
import { media } from '../style/media';

const StyledAppLayout = styled.div<{ $isOpen: boolean }>`
  height: 100vh;
  display: grid;
  grid-template-columns: 28rem 1fr;
  grid-template-rows: auto 1fr;

  /* responsive */
  @media ${media.tablet} {
    grid-template-columns: 1fr;
    justify-content: center;
    overflow-x: hidden;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 4rem 8rem;
  overflow-y: scroll;

  padding: 1.5rem;
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

const ResponsiveBtn = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 999;
  padding: 1rem;
  background-color: transparent;
  border: none;

  & svg {
    width: 3rem;
    height: 3rem;
  }

  display: none;

  @media ${media.tablet} {
    display: block;
  }
`;

function AppLayout() {
  const location = useLocation();
  const { resetGlobalState } = useStateApp();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    resetGlobalState();
    setIsOpen(false);
  }, [location]);

  return (
    <StyledAppLayout $isOpen={isOpen}>
      <Sidebar $isOpen={isOpen} />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <ResponsiveBtn onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? <HiMiniXMark /> : <HiListBullet />}
      </ResponsiveBtn>
    </StyledAppLayout>
  );
}

export default AppLayout;
