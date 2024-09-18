import { UserInfo } from '../users/types';

type StateAutorization = 'Pending' | 'Approved' | 'Rejected';

export interface HolidayInfo {
  _id?: string;
  days?: string[];
  authorizationAdmin?: StateAutorization;
  authorizationMannager?: StateAutorization;
  observation?: string;
  observationMannager?: string;
  observationAdmin?: string;
  createdAt?: string;
  admin?: UserInfo;
  mannager?: UserInfo;
  user?: UserInfo;
}
