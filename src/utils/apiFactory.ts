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

export function createOne<Model>(sourceName: SourceName) {
  return async (newData: Model) => {
    const res = await fetch(`${API_DAI_SYSTEM}/${sourceName}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(newData),
    });

    if (!res.ok) throw new Error('Users does not was created');

    const { data } = await res.json();

    return data;
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
  return async (id: string, newData: Model) => {
    const res = await fetch(`${API_DAI_SYSTEM}/${sourceName}/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newData),
    });

    if (!res.ok) throw new Error(`${sourceName} does not was deleted`);

    const { data } = await res.json();

    return data;
  };
}
