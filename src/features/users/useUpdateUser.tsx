import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser as updateUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success('Empleado actualizado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    updateUser,
    isPending,
  };
};
