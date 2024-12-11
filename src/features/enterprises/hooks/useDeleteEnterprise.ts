import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteEnterprises as deleteEnterpriseApi } from '../../../services/apiEnterprise';
import toast from 'react-hot-toast';

export const useDeleteEnterprise = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteEnterprise, isPending: isDeleting } = useMutation({
    mutationFn: deleteEnterpriseApi,
    onSuccess: () => {
      toast.success('Empresa eliminada exitosamente');
      queryClient.invalidateQueries({ queryKey: ['enterprises'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    deleteEnterprise,
    isDeleting,
  };
};
