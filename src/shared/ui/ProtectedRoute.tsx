import { useNavigate } from 'react-router-dom';
import { ReactElement, useEffect } from 'react';
import { useMe } from '../../features/authentication/hooks/useMe';
import styled from 'styled-components';
import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();

  // 1. Load the autenticated user
  const { isAuthenticated, isPending } = useMe();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate('/login');
  }, [isAuthenticated, isPending, navigate]);

  // 3. While loading, show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. If there IS a user, render the app
  return children;
};

export default ProtectedRoute;
