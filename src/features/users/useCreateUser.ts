import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser as createUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: createUser, isPending: isCreating } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      toast.success('Empleado creado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return {
    createUser,
    isCreating,
  };
};
