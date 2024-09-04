type Seniority = {
  years: number;
  moths: number;
  days: number;
};

export interface UserInfo {
  employNumber: string;
  id?: string;
  name: string;
  dateHiring: string;
  seniority?: Seniority;
  email: string;
  phoneNumber: string;
  enterprise: string;
  department: string;
}
