import { API_DEGREE_TITLES_GENERAL } from '../config';

export const getDegrees = async () => {
  const res = await fetch(`${API_DEGREE_TITLES_GENERAL}/degrees`);

  if (!res.ok) throw new Error('Career could not loaded');

  const { data } = await res.json();

  return data;
};
