import { Scheduler, SchedulerData } from '@bitnoi.se/react-scheduler';
import dayjs from 'dayjs';
import { useState, useCallback } from 'react';
import isBetween from 'dayjs/plugin/isBetween';
import styled from 'styled-components';
import enDayjsTranslations from 'dayjs/locale/en';

const Section = styled.section`
  position: relative;

  height: 50vh;
  width: 100%;
  /* width: 30rem;
  z-index: -99;
  height: 30rem; */

  & #reactSchedulerOutsideWrapper {
    font-family: inherit;

    & p {
      font-size: 1.2rem;
    }

    & .jLTkLQ {
      width: 3rem !important;
      height: 3rem !important;
    }

    .react-scheduler-header {
      background-color: #007bff;
      color: white;
    }

    & :first-child {
      & :first-child {
        & :first-child {
        }
      }
    }
  }
`;

dayjs.extend(isBetween);
dayjs.locale('es'); // Establece el idioma

// Al formatear una fecha, asegúrate de usar el formato adecuado

interface DateRange {
  startDate: Date;
  endDate: Date;
}

export default function Gantt() {
  const [filterButtonState, setFilterButtonState] = useState(0);

  // Especificar el tipo de 'range' como 'DateRange'
  const [range, setRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleRangeChange = useCallback((range: DateRange) => {
    setRange(range);
  }, []);

  // Filtering events that are included in current date range
  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter(
      (project) =>
        dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
        dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
        (dayjs(project.startDate).isBefore(range.startDate, 'day') &&
          dayjs(project.endDate).isAfter(range.endDate, 'day'))
    ),
  }));

  const langs = [
    {
      id: 'es', // Cambia esto a 'es' para español
      lang: {
        feelingEmpty: 'Vacío...',
        free: 'Libre',
        loadNext: 'Siguiente',
        loadPrevious: 'Anterior',
        over: 'Superado',
        taken: 'Tomado',
        topbar: {
          filters: 'Filtros',
          next: 'Siguiente',
          prev: 'Anterior',
          today: 'Hoy',
          view: 'Ver',
        },
        search: 'Buscar',
        week: 'Semana',
        month: 'Mes',
      },
      translateCode: 'es-ES', // Cambia a español
      dayjsTranslations: enDayjsTranslations, // Asegúrate de estar usando las traducciones de dayjs en español
    },
  ];

  console.log(langs);
  return (
    <Section>
      <Scheduler
        data={filteredMockedSchedulerData}
        isLoading={false}
        onRangeChange={handleRangeChange}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) => console.log(item)}
        onFilterData={() => {
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          setFilterButtonState(0);
        }}
        config={{
          zoom: 0,
          filterButtonState,
          lang: 'es',
          translations: langs,
          defaultTheme: 'dark',
        }}
      />
    </Section>
  );
}

const mockedSchedulerData: SchedulerData = [
  {
    id: '070ac5b5-8369-4cd2-8ba2-0a209130cc60',
    label: {
      icon: 'https://picsum.photos/24',
      title: 'Joe Doe',
      subtitle: 'Frontend Developer',
    },
    data: [
      {
        id: '8b71a8a5-33dd-4fc8-9caa-b4a584ba3762',
        startDate: new Date('2023-04-13T15:31:24.272Z'),
        endDate: new Date('2023-08-28T10:28:22.649Z'),
        occupancy: 3600,
        title: 'Project A',
        subtitle: 'Subtitle A',
        description: 'array indexing Salad West Account',
        bgColor: 'hsl(351.91011235955057, 97.80219780219781%, 82.15686274509804%)',
      },
      {
        id: '22fbe237-6344-4c8e-affb-64a1750f33bd',
        startDate: new Date('2023-10-07T08:16:31.123Z'),
        endDate: new Date('2023-11-15T21:55:23.582Z'),
        occupancy: 2852,
        title: 'Project B',
        subtitle: 'Subtitle B',
        description: 'Tuna Home pascal IP drive',
        bgColor: 'rgb(254,165,177)',
      },
      {
        id: '3601c1cd-f4b5-46bc-8564-8c983919e3f5',
        startDate: new Date('2023-03-30T22:25:14.377Z'),
        endDate: new Date('2023-09-01T07:20:50.526Z'),
        occupancy: 1800,
        title: 'Project C',
        subtitle: 'Subtitle C',
        bgColor: 'rgb(254,165,177)',
      },
      {
        id: 'b088e4ac-9911-426f-aef3-843d75e714c2',
        startDate: new Date('2023-10-28T10:08:22.986Z'),
        endDate: new Date('2023-10-30T12:30:30.150Z'),
        occupancy: 11111,
        title: 'Project D',
        subtitle: 'Subtitle D',
        description: 'Garden heavy an software Metal',
        bgColor: 'rgb(254,165,177)',
      },
    ],
  },

  {
    id: '070ac5b5-8369-4cd2-8ba2-0a209130cc60',
    label: {
      icon: 'https://picsum.photos/24',
      title: 'Dylan Abner',
      subtitle: 'Backend Developer',
    },
    data: [
      {
        id: '8b71a8a5-33dd-4fc8-9caa-b4a584ba3762',
        startDate: new Date('2023-04-13T15:31:24.272Z'),
        endDate: new Date('2023-08-28T10:28:22.649Z'),
        occupancy: 3600,
        title: 'Project A',
        subtitle: 'Subtitle A',
        description: 'array indexing Salad West Account',
        bgColor: '#992d2d',
      },
      {
        id: '22fbe237-6344-4c8e-affb-64a1750f33bd',
        startDate: new Date('2023-10-07T08:16:31.123Z'),
        endDate: new Date('2023-11-15T21:55:23.582Z'),
        occupancy: 2852,
        title: 'Project B',
        subtitle: 'Subtitle B',
        description: 'Tuna Home pascal IP drive',
        bgColor: 'rgb(254,165,177)',
      },
      {
        id: '3601c1cd-f4b5-46bc-8564-8c983919e3f5',
        startDate: new Date('2023-03-30T22:25:14.377Z'),
        endDate: new Date('2023-09-01T07:20:50.526Z'),
        occupancy: 1800,
        title: 'Project C',
        subtitle: 'Subtitle C',
        bgColor: 'rgb(254,165,177)',
      },
      {
        id: 'b088e4ac-9911-426f-aef3-843d75e714c2',
        startDate: new Date('2023-10-28T10:08:22.986Z'),
        endDate: new Date('2023-10-30T12:30:30.150Z'),
        occupancy: 11111,
        title: 'Project D',
        subtitle: 'Subtitle D',
        description: 'Garden heavy an software Metal',
        bgColor: 'rgb(254,165,177)',
      },
    ],
  },
];
