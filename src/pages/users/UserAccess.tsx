import styled from 'styled-components';
// import Header from '../features/user-app/Header';
import Home from '../../features/users/components/user-app/Home';

const Order = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const UserAccess = () => {
  return (
    <>
      <Order>
        <Home />
      </Order>
    </>
  );
};

export default UserAccess;
