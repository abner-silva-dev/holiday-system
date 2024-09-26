import { API_DAI_SYSTEM } from '../config';

export const login = async ({
  employNumber,
  password,
}: {
  employNumber: string;
  password: string;
}) => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      employNumber,
      password,
    }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};

export const logout = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/users/logout`, {
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};
