import { createOne, deleteOne, getAll, updateOne } from '../utils/apiFactory';

import { HolidayInfo } from './../features/holiday/type';

export const getHolidays = getAll('holiday');
export const deleteHolidays = deleteOne('holiday');
export const updateHoliday = updateOne('holiday');
export const createHoliday = createOne<HolidayInfo>('holiday');
