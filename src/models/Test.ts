import IModel from "./IModel";

export interface ITestModel {
  id: number;
  referenceNumber: string;
  applicationDate: Date;
  type: string;
  status: string;
  substatus: string;
  sender: string;
  recipient: string;
  amount: number;
}

export interface IKey {
  id: any;
}

