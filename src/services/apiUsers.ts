import { UserInfo } from '../features/users/types';
import { createOne, deleteOne, getAll, getOne, updateOne } from '../utils/apiFactory';

export const getUsers = getAll('users');
export const getUser = getOne('users');
export const deleteUser = deleteOne('users');
export const createUser = createOne<UserInfo>('users');
export const updateUser = updateOne<UserInfo>('users');
