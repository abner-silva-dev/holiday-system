import { UserInfo } from '../users/types';

export type StateAutorization = 'pending' | 'approved' | 'rejected';

export interface HolidayInfo {
  _id?: string;
  days?: Date[];
  authorizationAdmin?: StateAutorization;
  authorizationManager?: StateAutorization;
  observation?: string;
  observationManager?: string;
  observationAdmin?: string;
  createdAt?: string;
  admin?: UserInfo;
  manager?: UserInfo;
  user?: UserInfo;
}
