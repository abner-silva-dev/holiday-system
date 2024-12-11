import { EnterpriseInfo } from '../features/enterprises/types';
import { createOne, deleteOne, getAll, updateOne } from '../shared/utils/apiFactory';

export const getEnterprises = getAll('enterprise');
export const deleteEnterprises = deleteOne('enterprise');
export const updateEnterprises = updateOne('enterprise');
export const createEnterprises = createOne<EnterpriseInfo>('enterprise');
