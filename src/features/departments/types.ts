type Enterprise = {
  name: string;
};

export interface DepartmentInfo {
  id?: string;
  name: string;
  nameAbreviate: string;
  enterprise: Enterprise;
}
