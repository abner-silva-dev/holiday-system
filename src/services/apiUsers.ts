import { API_DAI_SYSTEM } from '../config';

import { UserInfo } from '../features/users/types';

export const getUsers = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/users`);

  if (!res.ok) throw new Error('Users could not loaded');

  const { data } = await res.json();

  return data;
};

export const createUser = async (user: UserInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/users`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error('Users does not was created');

  const { data } = await res.json();

  return data;
};

export const deleteUser = async (userId: string) => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/${userId}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Users does not was deleted');

  const { data } = await res.json();

  return data;
};

export const updateUser = async (user: UserInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/users`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error('Users does not was created');

  const { data } = await res.json();

  return data;
};
