import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateDepartments as updateDepartmentsApi } from '../../services/apiDepartments';
import toast from 'react-hot-toast';
import { DepartmentInfo } from './types';

export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDepartment, isPending: isPending } = useMutation({
    mutationFn: ({ newData, id }: { newData: FormData | DepartmentInfo; id: string }) =>
      updateDepartmentsApi(id, newData),
    onSuccess: () => {
      toast.success('Departamento actualizado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['departments'] });
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
