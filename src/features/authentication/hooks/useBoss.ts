import { useQuery } from '@tanstack/react-query';
import { UserInfo } from '../../users/types';
import { getBoss } from '../../../services/apiAuthentication';
import { useUser } from '../../users/hooks/useUser';
import { DepartmentInfo } from '../../departments/types';

interface IBoss {
  user: UserInfo;
  department: DepartmentInfo;
}

export const useBoss = () => {
  const { user } = useUser();

  const {
    isPending,
    error,
    data: boss,
  } = useQuery<IBoss | null>({
    queryKey: ['boss'],
    queryFn: () => getBoss(user?.department?._id || ''),
  });

  return {
    isPending,
    error,
    boss,
  };
};
