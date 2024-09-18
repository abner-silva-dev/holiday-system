import { API_DAI_SYSTEM } from '../config';

import { HolidayInfo } from './../features/holiday/type';

export const getHolidays = async () => {
  const res = await fetch(`${API_DAI_SYSTEM}/holiday`);

  if (!res.ok) throw new Error('holidays could not loaded');

  const { data } = await res.json();

  return data;
};

export const createHolidays = async (holiday: HolidayInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/holiday`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(holiday),
  });

  if (!res.ok) throw new Error('holidays does not was created');

  const { data } = await res.json();

  return data;
};

export const deleteHolidays = async (holidayId: string) => {
  const res = await fetch(`${API_DAI_SYSTEM}/holiday/${holidayId}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('holidays does not was deleted');

  const { data } = await res.json();

  return data;
};

export const updateHolidays = async (holiday: HolidayInfo) => {
  const res = await fetch(`${API_DAI_SYSTEM}/holiday`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(holiday),
  });

  if (!res.ok) throw new Error('holidays does not was created');

  const { data } = await res.json();

  return data;
};
