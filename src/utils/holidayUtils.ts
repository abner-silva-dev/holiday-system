import { HolidayInfo } from '../features/holiday/type';

export const getStatusHoliday = (holidays: HolidayInfo[] = []) => {
  const approvedHolidays = holidays.filter(
    (holiday) =>
      holiday.authorizationAdmin === 'approved' &&
      holiday.authorizationManager === 'approved'
  );

  const pendingHolidays = holidays.filter(
    (holiday) =>
      (holiday.authorizationAdmin === 'pending' ||
        holiday.authorizationManager === 'pending') &&
      holiday.authorizationAdmin !== 'rejected' &&
      holiday.authorizationManager !== 'rejected'
  );

  return { approvedHolidays, pendingHolidays };
};
