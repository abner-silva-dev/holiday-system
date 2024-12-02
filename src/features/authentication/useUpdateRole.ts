import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRoleUser as updateRoleUserApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

interface RoleInfo {
  password: string;
  role: string;
}

export const useUpdateRole = () => {
  const queryClient = useQueryClient();

  const { mutate: updateRoleUser, isPending } = useMutation({
    mutationFn: ({ newData, id }: { newData: FormData | RoleInfo; id: string }) =>
      updateRoleUserApi<RoleInfo>(id, newData),
    onSuccess: () => {
      toast.success('Privilegios asignados exitosamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    updateRoleUser,
    isPending,
  };
};
