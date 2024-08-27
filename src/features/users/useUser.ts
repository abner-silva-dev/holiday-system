import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/apiUsers';

export const useUsers = () => {
  const {
    isPending,
    error,
    data: users,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return { isPending, error, users };
};
