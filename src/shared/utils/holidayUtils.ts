import { HolidayInfo } from '../../features/holiday/type';

export const getStatusHoliday = (holidays: HolidayInfo[] = []) => {
  const approvedHolidays = holidays.filter(
    (holiday) =>
      holiday.authorizationAdmin === 'approved' &&
      holiday.authorizationManager === 'approved'
  );

  const pendingHolidays = holidays.filter((holiday) => {
    const { authorizationAdmin, authorizationManager } = holiday;

    if (authorizationAdmin === 'approved' && authorizationManager === 'approved')
      return false;

    if (authorizationAdmin === 'rejected' || authorizationManager === 'rejected')
      return false;

    return authorizationAdmin === 'pending' || authorizationManager === 'pending';
  });

  const rejectedHolidays = holidays.filter((holiday: HolidayInfo) => {
    return (
      holiday.authorizationAdmin === 'rejected' ||
      holiday.authorizationManager === 'rejected'
    );
  });

  return { approvedHolidays, pendingHolidays, rejectedHolidays };
};
