import React from 'react';
import styled from 'styled-components';
import { HolidayInfo } from '../type';

const HolidayPendingStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: start;

  padding: 1rem;
  background-color: var(--color-brand-400);
  /* border-top: 1px solid #ffe066;
  border-bottom: 1px solid #ffe066; */
`;

const ListDays = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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
  background-color: #fff3bf;
`;

const TitlePending = styled.p`
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

const sortDates = (dates: Date[]): Date[] => {
  return [...dates]
    .map((dates) => new Date(dates))
    .sort((a: Date, b: Date) => a.getTime() - b.getTime());
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

  return (
    <HolidayPendingStyled>
      <ListDays>
        <Day>2/10/2024</Day>
        al
        <Day>2/10/2024</Day>
      </ListDays>
      <HolidayPendingInfo>
        <TitlePending>Numero de Dias</TitlePending>
        <DaysPendingNum>{holiday?.days?.length}</DaysPendingNum>
      </HolidayPendingInfo>
    </HolidayPendingStyled>
  );
};

export default HolidayPending;
