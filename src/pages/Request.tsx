import styled from 'styled-components';
import Logo from '../ui/Logo';
import logoImg from '../../public/logo-dai.png';
import RequestForm from '../features/request/RequestForm';

const Header = styled.div`
  width: 100%;
  height: 10rem;
  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  justify-content: center;
`;

const Request = () => {
  return (
    <>
      <Header>
        <Logo src={logoImg}></Logo>
      </Header>
      <RequestForm />
    </>
  );
};
export default Request;
