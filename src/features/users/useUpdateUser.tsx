import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser as updateUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';
import { UserInfo } from './types';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isPending } = useMutation({
    mutationFn: ({ id, newUser }: { id: string; newUser: UserInfo }) =>
      updateUserApi(id, newUser),
    onSuccess: () => {
      toast.success('Empleado actualizado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // ({ newCabin, id }) => createEditCabin(newCabin, id)

  return {
    updateUser,
    isPending,
  };
};
