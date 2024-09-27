import { useNavigate } from 'react-router-dom';
import { ReactElement, useEffect } from 'react';
import { useMe } from '../features/authentication/useMe';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticathed } = useMe();

  // 1. If there is NO authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticathed) navigate('/login');
  }, [isAuthenticathed, navigate]);

  // 1. If there IS a user, render the app
  if (isAuthenticathed) return children;
};

export default ProtectedRoute;
