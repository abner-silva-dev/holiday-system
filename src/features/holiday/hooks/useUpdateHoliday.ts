import toast from 'react-hot-toast';
import { updateHoliday as updateHolidayApi } from '../../../services/apiHolidays';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HolidayInfo } from '../type';

export const useUpdateHoliday = () => {
  const queryClient = useQueryClient();

  const { mutate: updateHoliday, isPending: isPending } = useMutation({
    mutationFn: ({ id, newHoliday }: { id: string; newHoliday: HolidayInfo }) =>
      updateHolidayApi(id, newHoliday),
    onSuccess: () => {
      toast.success('Holiday actualizado exitosamente');
      queryClient.invalidateQueries({ queryKey: ['holidays'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    updateHoliday,
    isPending,
  };
};
