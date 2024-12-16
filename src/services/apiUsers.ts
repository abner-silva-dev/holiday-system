import axios from 'axios';
import { API_DAI_SYSTEM } from '../config';
import { UserInfo } from '../features/users/types';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '../shared/utils/apiFactory';

export const getMe = async () => {
  try {
    const res = await axios.get(`${API_DAI_SYSTEM}/users/me`, {
      withCredentials: true,
    });

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', error.response?.data || error.message);
      throw new Error(
        `User could not be loaded. Status: ${error.response?.status || 'unknown'}`
      );
    } else {
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
};

export async function updateRoleUser<Model>(id: string, newData: Model | FormData) {
  try {
    const isFormData = newData instanceof FormData;
    if (isFormData) {
      newData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
    }

    const { data } = await axios.patch(`${API_DAI_SYSTEM}/users/${id}/role`, newData, {
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      withCredentials: true,
    });

    return data;
  } catch (error) {
    const errorMessage =
      axios.isAxiosError(error) && error.response
        ? error.response.data.message || 'An unknown error occurred'
        : 'An unknown error occurred';

    throw new Error(errorMessage);
  }
}

export const getUsers = getAll('users');
export const getUser = getOne('users');
export const deleteUser = deleteOne('users');
export const createUser = createOne<UserInfo>('users');
export const updateUser = updateOne<UserInfo>('users');
