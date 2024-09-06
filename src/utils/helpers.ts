interface JoinName {
  name: string;
  paternSurname: string;
  motherSurname: string;
}

export const joinName = ({ name, paternSurname, motherSurname }: JoinName): string =>
  `${name} ${paternSurname} ${motherSurname}`;

type FormatDate = 'dd-mm-yyyy' | 'yyyy-mm-dd';

interface optionsptionsFormatDate {
  separationBy?: string;
  formatDate?: FormatDate;
}

export function formatDate(
  date: string,
  options: optionsptionsFormatDate = {
    separationBy: '/',
    formatDate: 'dd-mm-yyyy',
  }
): string {
  const { separationBy, formatDate } = options;

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  switch (formatDate) {
    case 'dd-mm-yyyy':
      return `${day}${separationBy}${month}${separationBy}${year}`;
    case 'yyyy-mm-dd':
      return `${year}${separationBy}${month}${separationBy}${day}`;
    default:
      return '';
  }
}

export function yearMothDay(
  years: number = 0,
  moths: number = 0,
  days: number = 0
): string {
  const yearsStr = years ? `${years} año${years === 1 ? ' ' : 's '} ` : '';
  const mothsStr = moths ? `${moths} mes${moths === 1 ? ' ' : 'es'}` : '';
  const daysStr = days ? `${days} dia${days === 1 ? ' ' : 's'}` : '';

  return `${yearsStr} ${mothsStr} ${daysStr}`;
}

export function formatText(text: string): string {
  const newText = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0301]/g, '');

  return newText;
}
