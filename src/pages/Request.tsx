import styled from 'styled-components';
import Logo from '../ui/Logo';
import logoImg from '../../public/logo-dai.png';
import RequestForm from '../features/request/RequestForm';

const Header = styled.div`
  width: 100%;
  height: 10rem;
  border-bottom: 1px solid var(--color-grey-200);
  background-color: white;

  display: flex;
  justify-content: center;

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
        <Logo src={logoImg}></Logo>
      </Header>
      <RequestForm />
    </Container>
  );
};
export default Request;
