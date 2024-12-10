import { useQuery } from '@tanstack/react-query';
import { getSeniorities } from '../../services/apiSeniority';

export const useSeniorities = () => {
  const {
    isPending,
    error,
    data: seniorities,
  } = useQuery({
    queryKey: ['seniorities'],
    queryFn: getSeniorities,
  });

  return { isPending, error, seniorities };
};
