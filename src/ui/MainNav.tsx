import { NavLink } from 'react-router-dom';
import {
  HiOutlineBuildingOffice2,
  HiOutlineFolder,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from 'react-icons/hi2';

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const Logo = styled.img`
  width: 15rem;
  align-self: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    border: none;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-red-800);
    background-color: var(--color-red-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-red-600);
  }
`;

// const Logo =

function MainNav() {
  return (
    <Nav>
      <Logo src="/Logo-dai.png" alt="" />
      <NavList>
        <li title="Administrar usuarios">
          <StyledNavLink to="users">
            <HiOutlineUsers />
            <span>Empleados</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="enterprise">
            <HiOutlineBuildingOffice2 />
            <span>Empresas</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="departments">
            <HiOutlineFolder />
            <span>Departamentos</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="holidays">
            <HiOutlineCalendarDays />
            <span>Vacaciones</span>
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
}

export default MainNav;
