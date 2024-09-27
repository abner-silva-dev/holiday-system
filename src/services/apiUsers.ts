import { API_DAI_SYSTEM } from '../config';
import { UserInfo } from '../features/users/types';
import { createOne, deleteOne, getAll, getOne, updateOne } from '../utils/apiFactory';

export const getMe = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/me`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error(`User could not loaded`);

  const { data } = await res.json();

  return data;
};

export const getUsers = getAll('users');
export const getUser = getOne('users');
export const deleteUser = deleteOne('users');
export const createUser = createOne<UserInfo>('users');
export const updateUser = updateOne<UserInfo>('users');
