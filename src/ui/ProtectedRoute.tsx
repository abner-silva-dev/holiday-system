import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Children, ReactElement, useEffect } from 'react';
import { useMe } from '../features/authentication/useMe';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticathed, userAuthenticated } = useMe();

  // 1. If there is NO authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticathed) navigate('/login');
  }, [isAuthenticathed, navigate]);

  if (!userAuthenticated) return null;

  return children;
};

export default ProtectedRoute;
