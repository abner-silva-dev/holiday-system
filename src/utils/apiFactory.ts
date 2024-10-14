import axios from 'axios';
import { API_DAI_SYSTEM } from '../config';

type SourceName = 'users' | 'department' | 'enterprise' | 'holiday';

export const getAll = (sourceName: SourceName) => async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/${sourceName}`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error(`${sourceName} could not loaded`);

  const { data } = await res.json();

  return data;
};

export const getOne = (sourceName: SourceName) => async (id: string) => {
  const res = await fetch(`${API_DAI_SYSTEM}/${sourceName}/${id}`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error(`${sourceName} could not loaded`);

  const { data } = await res.json();

  return data;
};

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
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.error.message || 'An unknown error occurred'
          : 'An unknown error occurred';

      throw new Error(errorMessage);
    }
  };
}

export function deleteOne(sourceName: SourceName) {
  return async (id: string) => {
    const res = await fetch(`${API_DAI_SYSTEM}/${sourceName}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
    });

    if (!res.ok) throw new Error(`${sourceName} does not was deleted`);

    const { data } = await res.json();

    return data;
  };
}

export function updateOne<Model>(sourceName: SourceName) {
  return async (id: string, newData: Model | FormData) => {
    try {
      const isFormData = newData instanceof FormData;

      const { data } = await axios.patch(
        `${API_DAI_SYSTEM}/${sourceName}/${id}`,
        newData,
        {
          headers: {
            'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
          },
          withCredentials: true,
        }
      );

      return data;
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.error.message || 'An unknown error occurred'
          : 'An unknown error occurred';

      throw new Error(errorMessage);
    }
  };
}
