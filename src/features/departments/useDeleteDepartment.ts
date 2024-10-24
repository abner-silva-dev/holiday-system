import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDepartments as deleteDepartmentApi } from '../../services/apiDepartments';
import toast from 'react-hot-toast';

export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDepartments, isPending: isDeleting } = useMutation({
    mutationFn: deleteDepartmentApi,
    onSuccess: () => {
      toast.success('Departamento eliminado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['departments'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    deleteDepartments,
    isDeleting,
  };
};
