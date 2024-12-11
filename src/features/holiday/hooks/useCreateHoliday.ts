import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createHoliday as createHolidayApi } from '../../../services/apiHolidays';

export const useCreateHoliday = () => {
  const queryClient = useQueryClient();

  const { mutate: createHoliday, isPending: isCreating } = useMutation({
    mutationFn: createHolidayApi,
    onSuccess: () => {
      toast.success('vacaciones creadas exitosamente');
      queryClient.invalidateQueries({ queryKey: ['holidays'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    createHoliday,
    isCreating,
  };
};
