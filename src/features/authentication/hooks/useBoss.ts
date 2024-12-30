import { useQuery } from '@tanstack/react-query';
import { UserInfo } from '../../users/types';
import { getBoss } from '../../../services/apiAuthentication';
import { useUser } from '../../users/hooks/useUser';

export const useBoss = () => {
  const { user } = useUser();

  const {
    isPending,
    error,
    data: boss,
  } = useQuery<UserInfo | null>({
    queryKey: ['boss'],
    queryFn: () => getBoss(user?.department?._id || ''),
  });

  return {
    isPending,
    error,
    boss,
  };
};
