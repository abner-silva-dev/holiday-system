import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import toast from 'react-hot-toast';
import { API_DAI_SYSTEM } from '../../../config';
import { useUser2 } from '../useUser';
import { ArchiveInfo } from './type';

export function createOne<Model>(sourceName: string) {
  return async (newData: Model | FormData) => {
    try {
      const isFormData = newData instanceof FormData;

      const { data } = await axios.post(`${API_DAI_SYSTEM}/${sourceName}`, newData, {
        headers: {
          'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
        },
        withCredentials: true,
      });

      return data;
    } catch (error) {
      // console.log(error.response);
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.message || 'An unknown error occurred'
          : 'An unknown error occurred';

      throw new Error(errorMessage);
    }
  };
}

export const useCreateArchive = () => {
  const queryClient = useQueryClient();

  const { user } = useUser2();

  const createArchiveApi = createOne<ArchiveInfo>(`users/${user?.id}/archive`);

  const { mutate: createArchive, isPending: isCreating } = useMutation({
    mutationFn: createArchiveApi,
    onSuccess: () => {
      toast.success('Archivo creado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return {
    createArchive,
    isCreating,
  };
};
