import { API_DAI_SYSTEM } from '../config';

export const getUsers = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/users`);

  if (!res.ok) throw new Error('Users could not loaded');

  const { data } = await res.json();

  return data;
};
