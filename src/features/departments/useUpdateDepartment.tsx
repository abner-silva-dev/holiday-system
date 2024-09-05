import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateDepartments as updateDepartmentsApi } from '../../services/apiDepartments';
import toast from 'react-hot-toast';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDepartment, isPending: isPending } = useMutation({
    mutationFn: updateDepartmentsApi,
    onSuccess: () => {
      toast.success('Departamento actualizado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['department'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    updateDepartment,
    isPending,
  };
};
