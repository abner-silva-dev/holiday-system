import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../../services/apiAuthentication';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useStateApp } from '../../../context/stateAppContext';

export function useLogin() {
  const navigate = useNavigate();
  const { setCurrentUser } = useStateApp();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      const { data } = user;
      setCurrentUser(data.user);
      navigate('/', { replace: true });
    },

    onError: (err) => {
      console.error(`Error: ${err}`);
      toast.error(`${err.message}`);
    },
  });

  return { login, isLoading };
}
