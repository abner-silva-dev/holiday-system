import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { changePassword } from '../../services/apiAuthentication';
import { useMe } from './useMe';

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  const { userAuthenticated } = useMe();

  const {
    mutate: changeUserPassword,
    isPending: isChangingPassword,
    error,
  } = useMutation({
    mutationFn: (credentials: {
      password: string;
      newPassword: string;
      confirmNewPassword: string;
    }) => {
      if (!userAuthenticated?.id) {
        throw new Error('El usuario no está definido.');
      }
      return changePassword(credentials);
    },
    onSuccess: () => {
      toast.success('La contraseña fue actualizada correctamente.');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      toast.error(err.message || 'Ocurrio un error');
    },
  });

  return {
    changeUserPassword,
    isChangingPassword,
    error,
  };
};
