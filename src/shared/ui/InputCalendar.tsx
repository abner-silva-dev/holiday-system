import { Dispatch, SetStateAction } from 'react';

import { Calendar } from 'primereact/calendar';
import { addLocale, locale } from 'primereact/api';

interface PropsInputCalendar {
  dates: Date[];
  setDates: Dispatch<SetStateAction<Date[]>>;
  maxDateCount?: number;
}

const InputCalendar: React.FC<PropsInputCalendar> = ({
  dates,
  setDates,
  maxDateCount,
}) => {
  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  });

  locale('es');

  return (
    <Calendar
      value={dates}
      onChange={(event) => setDates(event.value || [])}
      selectionMode="multiple"
      dateFormat="dd/mm/yy"
      showIcon
      className="p-inputtext p-component p-inputtext p-component"
      disabledDates={[new Date()]}
      disabledDays={[0]}
      required={true}
      maxDateCount={maxDateCount}
    />
  );
};

export default InputCalendar;
