import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMe as updateMeApi } from '../../services/apiAuthentication';

import toast from 'react-hot-toast';
// import { UserInfo } from './../users/types';

export const useUpdateMe = () => {
  const queryClient = useQueryClient();

  const { mutate: updateMe, isPending: isPending } = useMutation({
    mutationFn: updateMeApi,
    onSuccess: () => {
      toast.success('User actualizado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    updateMe,
    isPending,
  };
};
