import { HiBell } from 'react-icons/hi2';
// import { HiOutlineBell } from 'react-icons/hi2';

import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
`;

const Bell = styled.div`
  display: inline-block;

  border-radius: 50%;

  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    fill: var(--color-grey-600);
  }

  position: relative;
`;

const Notification = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;

  background-color: var(--color-red-500);
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

function Header() {
  return (
    <StyledHeader>
      <div>function 1</div>

      <div>
        <Bell>
          <Notification>1</Notification>
          <HiBell></HiBell>
        </Bell>
      </div>
    </StyledHeader>
  );
}

export default Header;
