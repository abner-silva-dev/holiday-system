import { createOne, deleteOne, getAll, updateOne } from '../shared/utils/apiFactory';

import { HolidayInfo } from './../features/holiday/type';

// type HolidayInfoWithStringUsers = Omit<HolidayInfo, 'user' | 'admin' | 'manager'> & {
//   user?: string;
//   admin?: string;
//   manager?: string;
// };

export const getHolidays = getAll('holiday');
export const deleteHolidays = deleteOne('holiday');
export const updateHoliday = updateOne('holiday');
export const createHoliday = createOne<HolidayInfo>('holiday');
