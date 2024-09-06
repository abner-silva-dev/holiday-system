type Enterprise = {
  name: string;
};

export interface DepartmentInfo {
  _id?: string;
  id?: string;
  name: string;
  nameAbreviate: string;
  enterprise: Enterprise;
}
