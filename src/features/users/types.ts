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
  enterprise: EnterpriseInfo;
  department: DepartmentInfo;
  holidays?: HolidayInfo[];
  daysGrantedBySeniority?: {
    balance: number;
    startDate: Date;
    endDate: Date;
  };
  daysGrantedBySeniorityPast?: {
    balance: number;
    startDate: Date;
    endDate: Date;
  };
  daysGrantedBySeniorityFuture?: {
    balance: number;
    startDate: Date;
    endDate: Date;
  };
  credit?: { balance: number; exp: string };
  creditFuture?: { balance: number };
  creditPast?: { balance: number; exp: string };
}
