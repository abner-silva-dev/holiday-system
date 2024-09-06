import { API_DAI_SYSTEM } from '../config';
import { EnterpriseInfo } from '../features/enterprises/types';

export const getEnterprises = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/enterprise`);

  if (!res.ok) throw new Error('Enterprises could not loaded');

  const { data } = await res.json();

  return data;
};

export const createEnterprises = async (department: EnterpriseInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/enterprise`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(department),
  });

  if (!res.ok) throw new Error('Enterprises does not was created');

  const { data } = await res.json();

  return data;
};

export const deleteEnterprises = async (departmentId: string) => {
  const res = await fetch(`${API_DAI_SYSTEM}/enterprise/${departmentId}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Enterprises does not was deleted');

  const { data } = await res.json();

  return data;
};

export const updateEnterprises = async (department: EnterpriseInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/enterprise`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(department),
  });

  if (!res.ok) throw new Error('Enterprises does not was created');

  const { data } = await res.json();

  return data;
};
