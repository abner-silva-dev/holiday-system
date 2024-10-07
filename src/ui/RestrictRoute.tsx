import { ReactElement } from 'react';
import { useMe } from '../features/authentication/useMe';

interface PropsProtectedRoute {
  children: ReactElement;
  restrictTo: string[];
}

const RestrictRoute: React.FC<PropsProtectedRoute> = ({ children, restrictTo }) => {
  const { userAuthenticated } = useMe();

  if (!userAuthenticated) return;

  if (!restrictTo.includes(userAuthenticated.role || '')) return children;
};

export default RestrictRoute;
