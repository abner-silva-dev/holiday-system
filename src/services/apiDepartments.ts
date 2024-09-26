import { DepartmentInfo } from '../features/departments/types';
import { createOne, deleteOne, getAll, updateOne } from '../utils/apiFactory';

export const getDepartments = getAll('department');
export const deleteDepartments = deleteOne('department');
export const createDepartments = createOne<DepartmentInfo>('department');
export const updateDepartments = updateOne<DepartmentInfo>('department');
