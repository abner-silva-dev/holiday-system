import { NavLink } from 'react-router-dom';
import {
  HiOutlineBuildingOffice2,
  HiOutlineFolder,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from 'react-icons/hi2';

import styled from 'styled-components';

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
  &:hover {
    transform: translateX(2px);
    color: var(--color-red-800);
  }

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

  &:hover svg {
    color: var(--color-red-800);
  }

  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-red-800);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li title="Solicitudes de Vacaciones">
          <StyledNavLink to="holidays">
            <HiOutlineCalendarDays />
            <span>Vacaciones</span>
          </StyledNavLink>
        </li>
        <li title="Administrar Usuarios">
          <StyledNavLink to="users">
            <HiOutlineUsers />
            <span>Empleados</span>
          </StyledNavLink>
        </li>
        <li title="Administrar Empresas">
          <StyledNavLink to="enterprise">
            <HiOutlineBuildingOffice2 />
            <span>Empresas</span>
          </StyledNavLink>
        </li>
        <li title="Administrar Departamentos">
          <StyledNavLink to="departments">
            <HiOutlineFolder />
            <span>Departamentos</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
