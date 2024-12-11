import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import toast from 'react-hot-toast';
import { API_DAI_SYSTEM } from '../../../../config';
import { useUser2 } from '../../hooks/useUser';
import { ArchiveInfo } from './type';

// Función genérica para actualizar un recurso
export function updateOne<Model>(sourceName: string) {
  return async (id: string, newData: Model | FormData) => {
    try {
      const isFormData = newData instanceof FormData;

      // Mostrar los campos de FormData en la consola (opcional, para depuración)
      if (isFormData) {
        newData.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        });
      }

      // Solicitud PATCH al API
      const { data } = await axios.patch(
        `${API_DAI_SYSTEM}/users/${id}/${sourceName}`,
        newData,
        {
          headers: {
            'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
          },
          withCredentials: true, // Asegura el envío de cookies para autenticación
        }
      );

      return data;
    } catch (error) {
      // Manejo de errores mejorado
      let errorMessage = 'An unknown error occurred';
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.error?.message || errorMessage;
      }

      throw new Error(errorMessage);
    }
  };
}

export const useUpdateArchive = () => {
  const queryClient = useQueryClient();

  const { user } = useUser2();

  const updateOneApi = updateOne<ArchiveInfo>('archive');

  const { mutate: updateArchive, isPending } = useMutation({
    mutationFn: ({ newData }: { newData: FormData }) =>
      updateOneApi(user?.id || '', newData),
    onSuccess: () => {
      toast.success('Archivo actualizado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['archive'] });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return {
    updateArchive,
    isPending,
  };
};
