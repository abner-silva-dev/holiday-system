import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API_DAI_SYSTEM } from '../../../../config';
import { RequestType } from './type';
import { useUser2 } from '../../hooks/useUser';

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

// Hook para actualizar un usuario
export const useUpdateRequest = <Model>(sourceName: RequestType) => {
  const queryClient = useQueryClient();

  const { user } = useUser2();

  const updateOneApi = updateOne(sourceName);

  const { mutate: updateRequest, isPending } = useMutation({
    mutationFn: ({ newData }: { newData: Model | FormData }) =>
      updateOneApi(user?.id || '', newData),
    onSuccess: () => {
      toast.success('Solicitud actualizada exitosamente');
      queryClient.invalidateQueries({ queryKey: [sourceName] }); // Refresca la lista de usuarios
    },
    onError: (err: Error) => {
      toast.error(err.message); // Muestra el error en una notificación
    },
  });

  return {
    updateRequest,
    isPending,
  };
};
