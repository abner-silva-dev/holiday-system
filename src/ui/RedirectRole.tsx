import { Navigate } from 'react-router-dom';
import { useMe } from '../features/authentication/useMe';

const RedirectRole = () => {
  console.log('*******');
  const { userAuthenticated } = useMe();
  console.log(userAuthenticated);

  if (!userAuthenticated) return null;

  console.log(userAuthenticated.role);

  if (userAuthenticated.role === 'user') return <Navigate to="user" />;
  if (userAuthenticated.role === 'admin' || userAuthenticated.role === 'manager')
    return <Navigate to="admin" />;
};

export default RedirectRole;
