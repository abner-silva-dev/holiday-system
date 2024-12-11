import { useQuery } from '@tanstack/react-query';
import { getHolidays } from '../../../services/apiHolidays';

export const useHolidays = () => {
  const {
    isPending,
    error,
    data: holidays,
  } = useQuery({
    queryKey: ['holidays'],
    queryFn: getHolidays,
  });

  return { isPending, error, holidays };
};
