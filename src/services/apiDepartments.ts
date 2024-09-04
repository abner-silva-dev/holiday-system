import { API_DAI_SYSTEM } from '../config';

import { DepartmentInfo } from '../features/departments/types';

export const getDepartments = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/department`);

  if (!res.ok) throw new Error('departments could not loaded');

  const { data } = await res.json();

  return data;
};

<<<<<<< HEAD
export const createDepartments = async (department: DepartmentInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/departments`, {
=======
export const createDepartments = async (department: DepartmentesInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/department`, {
>>>>>>> 16aac5cdfe8538074893c4311a83783a26be5711
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(department),
  });

  if (!res.ok) throw new Error('departments does not was created');

  const { data } = await res.json();

  return data;
};

export const deleteDepartments = async (departmentId: string) => {
  const res = await fetch(`${API_DAI_SYSTEM}/department/${departmentId}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('departments does not was deleted');

  const { data } = await res.json();

  return data;
};

<<<<<<< HEAD
export const updateDepartments = async (department: DepartmentInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/departments`, {
=======
export const updateDepartments = async (department: DepartmentesInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/department`, {
>>>>>>> 16aac5cdfe8538074893c4311a83783a26be5711
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(department),
  });

  if (!res.ok) throw new Error('departments does not was created');

  const { data } = await res.json();

  return data;
};
