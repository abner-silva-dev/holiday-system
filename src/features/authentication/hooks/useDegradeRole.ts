import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUserBoss as deleteUserBossApi } from '../../../services/apiUsers';
import toast from 'react-hot-toast';

export const useDegradeRole = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteUserBoss, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserBossApi,
    onSuccess: () => {
      toast.success('Usuario degradado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['boss'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    deleteUserBoss,
    isDeleting,
  };
};
