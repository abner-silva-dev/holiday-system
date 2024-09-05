import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createDepartments as createDepartmentApi } from '../../services/apiDepartments';
import toast from 'react-hot-toast';

export const useCreateDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: createDepartment, isPending: isCreating } = useMutation({
    mutationFn: createDepartmentApi,
    onSuccess: () => {
      toast.success('Departamento creado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['departments'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    createDepartment,
    isCreating,
  };
};
