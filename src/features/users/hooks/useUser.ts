import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../services/apiUsers';
import { UserInfo } from '../types';

export function useUser() {
  const { holidayId } = useParams();

  const {
    isPending,
    data: user,
    error,
  } = useQuery<UserInfo>({
    queryKey: ['user', holidayId],
    queryFn: () => getUser(holidayId || ''),
    retry: false,
  });

  return { isPending, user, error };
}

export function useUser2() {
  const { userId } = useParams();

  const {
    isPending,
    data: user,
    error,
  } = useQuery<UserInfo>({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId || ''),
    retry: false,
  });

  return { isPending, user, error };
}
