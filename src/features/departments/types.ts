// type Enterprise = {
//   name: string;
// };

import { EnterpriseInfo } from '../enterprises/types';

export interface DepartmentInfo {
  _id?: string;
  id?: string;
  name?: string;
  nameAbreviate?: string;
  enterprise?: EnterpriseInfo;
}
