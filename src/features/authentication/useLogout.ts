import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from './../../services/apiAuthentication';
import { useNavigate } from 'react-router-dom';
import { useStateApp } from '../../context/stateAppContext';

export function useLogout() {
  const navigate = useNavigate();
  const queryCliente = useQueryClient();
  const { setCurrentUser } = useStateApp();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryCliente.removeQueries();
      setCurrentUser(null);
      navigate('/login', { replace: true });
    },
  });

  return { logout, isLoading };
}
