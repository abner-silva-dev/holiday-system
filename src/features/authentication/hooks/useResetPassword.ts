import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { resetPassword as resetPasswordService } from '../../../services/apiAuthentication';
import { useUser2 } from '../../users/hooks/useUser';

export const useResetPassword = () => {
  const queryClient = useQueryClient();
  const { user } = useUser2();

  const {
    mutate: resetPassword,
    isPending,
    error,
  } = useMutation({
    mutationFn: () => {
      if (!user?.id) {
        throw new Error('El usuario no está definido.');
      }
      return resetPasswordService(user.id);
    },
    onSuccess: () => {
      toast.success('La contraseña se envió a su correo.');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      toast.error(err.message || 'Hubo un error al enviar la contraseña.');
    },
  });

  return {
    resetPassword, // Exponer la función para ser utilizada
    isPending,
    error,
  };
};
