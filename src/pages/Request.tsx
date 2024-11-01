import styled from 'styled-components';

import RequestForm from '../features/request/RequestForm';
import ProcessBarRequest from '../features/users/ProcessBarRequest';

const Header = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);

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
        <ProcessBarRequest numStates={9} progress={1} />
      </Header>
      <RequestForm />
    </Container>
  );
};
export default Request;
