import { useQuery } from '@tanstack/react-query';
import { getMe } from '../../services/apiUsers';
import { UserInfo } from '../users/types';

export const useMe = () => {
  const {
    isPending,
    error,
    data: userAuthenticated,
  } = useQuery<UserInfo | null>({
    queryKey: ['authUser'],
    queryFn: getMe,
  });

  return {
    isPending,
    error,
    userAuthenticated,
    isAuthenticated: userAuthenticated ? true : false,
  };
};
