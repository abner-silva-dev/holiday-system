import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEnterprises as createEnterpriseApi } from '../../services/apiEnterprise';
import toast from 'react-hot-toast';

export const useCreateEnterprise = () => {
  const queryClient = useQueryClient();

  const { mutate: createEnterprise, isPending: isCreating } = useMutation({
    mutationFn: createEnterpriseApi,
    onSuccess: () => {
      toast.success('Empresa creada exitosamente');
      queryClient.invalidateQueries({ queryKey: ['enterprise'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    createEnterprise,
    isCreating,
  };
};
