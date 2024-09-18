import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'; // Importa el local en español
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer

function Calendary() {
  const events = [
    {
      title: 'Vacaciones',
      allDay: true,
      start: new Date(),
      end: new Date(),
    },
    // Agrega más eventos aquí
  ];

  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    monday: 'lunes',
    showMore: (total: number) => `+ Ver más (${total})`,
  };

  return (
    <div style={{ height: '80vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', fontSize: '2.4rem' }}
        messages={messages}
      />
    </div>
  );
}

export default Calendary;
