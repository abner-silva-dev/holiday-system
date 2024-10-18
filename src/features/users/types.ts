import { DepartmentInfo } from '../departments/types';
import { EnterpriseInfo } from '../enterprises/types';
import { HolidayInfo } from '../holiday/type';

type Seniority = {
  years: number;
  moths: number;
  days: number;
};

export interface UserInfo {
  employNumber: string;
  id?: string;
  name: string;
  role?: string;
  paternSurname?: string;
  motherSurname?: string;
  photo?: string;
  dateHiring: string;
  seniority?: Seniority;
  email: string;
  phoneNumber: string;
  enterprise: EnterpriseInfo;
  department: DepartmentInfo;
  holidays?: HolidayInfo[];
  daysGrantedBySeniority?: number;
  daysGrantedBySeniorityPast?: number;
  daysGrantedBySeniorityFuture?: number;
  credit?: { balance: number; exp: string };
  creditFuture?: { balance: number };
  creditPast?: { balance: number; exp: string };
}
