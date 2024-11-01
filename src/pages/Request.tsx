import styled from 'styled-components';
import Logo from '../ui/Logo';
import logoImg from '../../public/logo-dai.png';
import RequestForm from '../features/request/RequestForm';
import ProcessBarRequest from '../features/users/processBarRequest';

const Header = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-grey-200);
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 22;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Request = () => {
  return (
    <Container>
      <Header>
        <ProcessBarRequest />
      </Header>
      <RequestForm />
    </Container>
  );
};
export default Request;
