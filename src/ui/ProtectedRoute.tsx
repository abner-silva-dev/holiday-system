import { useNavigate } from 'react-router-dom';
import { ReactElement, useEffect } from 'react';
import { useStateApp } from '../context/stateAppContext';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();
  const {
    state: { userAuthenticated },
  } = useStateApp();

  // 1. If there is NO authenticated user, redirect to the /login
  useEffect(() => {
    if (!userAuthenticated) navigate('/login');
  }, [userAuthenticated, navigate]);

  // 1. If there IS a user, render the app
  if (userAuthenticated) return children;
};

export default ProtectedRoute;
