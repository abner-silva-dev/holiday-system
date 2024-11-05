import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API_DAI_SYSTEM } from '../../../config';

type RequestType = 'complementaryData';

const getOne = async (sourceName: string, id: string) => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/${id}/${sourceName}`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error(`${sourceName} could not loaded`);

  const { data } = await res.json();

  return data;
};

export function useRequest(sourceName: RequestType) {
  const { userId } = useParams();

  const { isPending, data, error } = useQuery({
    queryKey: ['complementaryData', userId],
    queryFn: () => getOne(sourceName, userId || ''),
    retry: false,
  });

  console.log(data);

  return { isPending, data, error };
}
