import { useQuery } from '@tanstack/react-query';
import { getEnterprises } from '../../services/apiEnterprise';

export const useEnterprises = () => {
  const {
    isPending,
    error,
    data: enterprises,
  } = useQuery({
    queryKey: ['enterprises'],
    queryFn: getEnterprises,
  });

  return { isPending, error, enterprises };
};
