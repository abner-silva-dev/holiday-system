import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser as deleteUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success('Empleado eliminado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    deleteUser,
    isDeleting,
  };
};
