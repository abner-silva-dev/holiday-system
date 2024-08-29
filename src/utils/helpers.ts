interface JoinName {
  name: string;
  paternSurname: string;
  motherSurname: string;
}

export const joinName = ({ name, paternSurname, motherSurname }: JoinName): string =>
  `${name} ${paternSurname} ${motherSurname}`;
