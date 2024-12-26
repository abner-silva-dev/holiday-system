import React from 'react';
import styled from 'styled-components';
import { HolidayInfo } from '../type';

const HolidayPendingStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: start;

  padding: 1rem;
  background-color: var(--color-lime-100);
  /* border-top: 1px solid #ffe066;
  border-bottom: 1px solid #ffe066; */
`;

const ListDays = styled.ul`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  margin-bottom: 1rem;
  gap: 1rem;

  & :last-child {
    background-color: #e8590c;
  }

  & :first-child {
    background-color: #66a80f;
  }
`;

const ListDaysSeparated = styled.ul`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  align-items: center;
  justify-items: center;
`;

const Day = styled.span`
  font-size: 1.8rem;
  color: #fff;
  background-color: #1098ad;
  padding: 0.1rem 0.4rem;
  border-radius: 8px;
`;

const HolidayPendingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: var(--shadow-md);
  border: 1px solid #f3e39e;
  background-color: #fff3bf;
`;

const TitlePending = styled.p`
  color: #363636;
  font-weight: 600;
  line-height: 1;
`;

const DaysPendingNum = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #364fc7;
`;

interface HolidayPendingProps {
  holiday: HolidayInfo;
}

const separateDates = (
  dates: Date[]
): { consecutive: string[][]; unconsecutive: string[] } => {
  // Ordenar las fechas
  const sortedDates = [...dates]
    .map((date) => new Date(date))
    .sort((a, b) => a.getTime() - b.getTime());

  // Formato de fecha
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Inicializar resultados
  const consecutive: string[][] = [];
  const unconsecutive: string[] = [];
  let tempRange: string[] = [];

  sortedDates.forEach((date, index) => {
    const previousDate = sortedDates[index - 1];
    const dayDifference = previousDate
      ? (date.getTime() - previousDate.getTime()) / (1000 * 60 * 60 * 24)
      : null;

    if (tempRange.length === 0 || dayDifference === 1) {
      // Agrupar días consecutivos
      tempRange.push(formatDate(date));
    } else if (dayDifference === 2 && previousDate.getDay() === 6) {
      // Si solo hay un día de diferencia (domingo) y el día anterior es sábado
      tempRange.push(formatDate(date));
    } else {
      // Si no son consecutivos, guardar el rango y reiniciar
      if (tempRange.length === 1) {
        unconsecutive.push(tempRange[0]);
      } else {
        consecutive.push(tempRange);
      }
      tempRange = [formatDate(date)];
    }
  });

  // Verificar último grupo
  if (tempRange.length > 0) {
    if (tempRange.length === 1) {
      unconsecutive.push(tempRange[0]);
    } else {
      consecutive.push(tempRange);
    }
  }

  return { consecutive, unconsecutive };
};

// function groupConsecutiveDates(dates) {
//   // Asegúrate de que las fechas estén ordenadas
//   dates.sort((a, b) => new Date(a) - new Date(b));

//   const result = [];
//   let group = [dates[0]];

//   for (let i = 1; i < dates.length; i++) {
//     const currentDate = new Date(dates[i]);
//     const previousDate = new Date(dates[i - 1]);

//     // Calcular la diferencia en días entre las dos fechas
//     const diffInTime = currentDate - previousDate;
//     const diffInDays = diffInTime / (1000 * 60 * 60 * 24);

//     if (diffInDays === 1) {
//       // Si las fechas son consecutivas, añádelas al grupo actual
//       group.push(dates[i]);
//     } else {
//       // Si no son consecutivas, guarda el grupo actual y comienza uno nuevo
//       result.push(group);
//       group = [dates[i]];
//     }
//   }

//   // Añade el último grupo al resultado
//   if (group.length > 0) {
//     result.push(group);
//   }

//   return result;
// }

const HolidayPending: React.FC<HolidayPendingProps> = ({ holiday }) => {
  if (!holiday.days) return;

  const datesGrouping = separateDates(holiday.days);

  return (
    <HolidayPendingStyled>
      <div>
        {/* Renderizar Rangos Consecutivos */}
        {datesGrouping.consecutive.map((range, index) => (
          <ListDays key={index}>
            <Day>{range[0]}</Day>
            <span>al</span> <Day>{range[range.length - 1]}</Day>
          </ListDays>
        ))}

        {/* Renderizar Fechas No Consecutivas */}
        {datesGrouping.unconsecutive.length > 0 && (
          <ListDaysSeparated>
            {datesGrouping.unconsecutive.map((date, index) => (
              <Day key={index}>{date}</Day>
            ))}
          </ListDaysSeparated>
        )}
      </div>
      <HolidayPendingInfo>
        <TitlePending>Número de Dias</TitlePending>
        <DaysPendingNum>{holiday?.days?.length}</DaysPendingNum>
      </HolidayPendingInfo>
    </HolidayPendingStyled>
  );
};

export default HolidayPending;
