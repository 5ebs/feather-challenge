import { Status } from "../components/common/Badge";

export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}
export interface IPolicyData {
  id: string;
  provider: string;
  insuranceType: string;
  status: Status;
  startDate: Date;
  endDate?: Date | null;
  customer: ICustomer;
}

export interface IPoliciesData extends IPolicyData {
  items: IPolicyData[];
}
