import axios from 'axios';
import { API_DAI_SYSTEM } from '../config';

interface Login {
  employNumber: string;
  password: string;
}

export const login = async (credents: Login) => {
  try {
    const { data } = await axios.post(`${API_DAI_SYSTEM}/users/login`, credents, {
      headers: {
        'Content-Type': 'application/json',
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
};

export const logout = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/logout`, {
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

export const updateMe = async (newData) => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/updateMe`, {
    method: 'PATCH',
    credentials: 'include',
    body: newData,
  });

  if (!res.ok) throw new Error(`El usuario no se pudo actualizar`);

  const { data } = await res.json();

  return data;
};

export const resetPassword = async (id: string) => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/${id}/resetPassword`, {
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

interface ChangePasswordCredentials {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const changePassword = async (credentials: ChangePasswordCredentials) => {
  try {
    const response = await axios.post(
      `${API_DAI_SYSTEM}/users/resetPassword`,
      credentials,
      {
        withCredentials: true,
      }
    );

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Error desconocido';
      throw new Error(message);
    }

    throw new Error('No se pudo actualizar las credenciales');
  }
};
