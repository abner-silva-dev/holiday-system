interface JoinName {
  name: string;
  paternSurname: string;
  motherSurname: string;
}

export const joinName = ({ name, paternSurname, motherSurname }: JoinName): string =>
  `${name} ${paternSurname} ${motherSurname}`;

export function formatDate(date: string): string {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  const dateFormated = `${day}/${month}/${year}`;
  return dateFormated;
}
