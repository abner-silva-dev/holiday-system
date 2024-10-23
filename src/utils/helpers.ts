interface JoinName {
  name: string;
  paternSurname: string;
  motherSurname: string;
}

export const joinName = ({ name, paternSurname, motherSurname }: JoinName): string =>
  `${name} ${paternSurname} ${motherSurname}`;

type FormatDate = 'dd-mm-yyyy' | 'yyyy-mm-dd';

interface OptionsFormatDate {
  separationBy?: string;
  formatDate?: FormatDate;
  monthsName?: boolean;
  spaces?: boolean;
}

export function formatDate(date: string, options: OptionsFormatDate = {}): string {
  const defaultOptions: OptionsFormatDate = {
    separationBy: '/',
    formatDate: 'dd-mm-yyyy',
    monthsName: false,
    spaces: true,
  };

  const { separationBy, formatDate, monthsName, spaces } = {
    ...defaultOptions,
    ...options,
  };

  const year = date.slice(0, 4);
  let month = date.slice(5, 7);
  const day = date.slice(8, 10);

  const months = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'Jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ];

  if (monthsName) {
    month = months[parseInt(month) - 1];
  }

  switch (formatDate) {
    case 'dd-mm-yyyy':
      return `${day}${spaces ? ' ' : ''}${separationBy}${spaces ? ' ' : ''}${month}${
        spaces ? ' ' : ''
      }${separationBy}${spaces ? ' ' : ''}${year}`;
    case 'yyyy-mm-dd':
      return `${year}${spaces ? ' ' : ''}${separationBy}${spaces ? ' ' : ''}${month}${
        spaces ? ' ' : ''
      }${separationBy}${spaces ? ' ' : ''}${day}`;
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

export function upperCaseText(txt: string) {
  return txt.toUpperCase();
}
