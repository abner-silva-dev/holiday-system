import { NavLink } from 'react-router-dom';
import {
  HiOutlineAcademicCap,
  HiOutlineTruck,
  HiOutlineChartBar,
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
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-green-50);
    border-radius: var(--border-radius-sm);
    color: var(--color-green-600);
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
    color: var(--color-green-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li title="Administrar usuarios">
          <StyledNavLink to="graduates">
            <HiOutlineAcademicCap />
            <span>Egresados</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="status">
            <HiOutlineTruck />
            <span>Estatus </span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="stats">
            <HiOutlineChartBar />
            <span>Estadisticas</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
