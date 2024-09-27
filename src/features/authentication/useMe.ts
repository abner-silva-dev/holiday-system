import { useQuery } from '@tanstack/react-query';
import { getMe } from '../../services/apiUsers';

export const useMe = () => {
  const {
    isPending,
    error,
    data: userAuthenticated,
  } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getMe,
  });

  return {
    isPending,
    error,
    userAuthenticated,
    isAuthenticathed: userAuthenticated !== null,
  };
};
