import styled from 'styled-components';
import Header from '../features/user-app/Header';
import Home from '../features/user-app/Home';

const Order = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const HeaderMain = styled(Header)``;

const UserAccess = () => {
  return (
    <>
      <Order>
        <HeaderMain />
        <Home />
      </Order>
    </>
  );
};

export default UserAccess;
