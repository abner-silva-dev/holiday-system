import styled from 'styled-components';
import Header from '../features/user-app/Header';

const Order = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  // Media query para pantallas pequeñas
  @media (max-width: 48em) {
    flex-direction: column-reverse;
  }
`;

const HeaderMain = styled(Header)``;

const UserAccess = () => {
  return (
    <>
      <Order>
        <HeaderMain />
        <div>CONTENT</div>
      </Order>
    </>
  );
};

export default UserAccess;
