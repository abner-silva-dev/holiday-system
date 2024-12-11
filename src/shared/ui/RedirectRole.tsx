import { Navigate } from 'react-router-dom';
import { useMe } from '../../features/authentication/hooks/useMe';
// import { useEffect, useState } from 'react';

const RedirectRole = () => {
  const { userAuthenticated, isAuthenticated } = useMe();

  console.log(userAuthenticated);

  if (!isAuthenticated || !userAuthenticated) return <Navigate to="login" />;
  if (userAuthenticated.role === 'user') return <Navigate to="user" />;
  if (userAuthenticated.role === 'admin' || userAuthenticated.role === 'manager')
    return <Navigate to="admin" />;
};

export default RedirectRole;
