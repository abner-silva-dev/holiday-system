import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createOne } from '../../../utils/apiFactory';
import { useUser2 } from '../useUser';
import { RequestType } from './type';

export const useCreateRequest = <Model>(sourceName: RequestType) => {
  const queryClient = useQueryClient();

  const { user } = useUser2();

  const createRequestApi = createOne<Model>(`users/${user?.id}/${sourceName}`);

  const { mutate: createRequest, isPending: isCreating } = useMutation({
    mutationFn: createRequestApi,
    onSuccess: () => {
      toast.success('Empleado creado exitosamente');
      queryClient.invalidateQueries({ queryKey: [sourceName] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return {
    createRequest,
    isCreating,
  };
};
