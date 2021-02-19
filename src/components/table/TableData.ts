// import IList from "../../../utils/collections/List";
// import KeyValueMap from "../../../utils/collections/Map";

import { IKeyValueMap } from "../../Utils/collections/Map";

// export interface ITableData<T, Table> extends KeyValueMap<T, Table> {
//   addToTable(value: T): T;
//   addAllToTable(values: IList<T>): IList<T>;
// }

// export default class TableData<T, Table>
//   extends KeyValueMap<T, Table>
//   implements ITableData<T, Table> {
//   private table: HTMLTableElement;
//   // private rowData!: T;

//   constructor() {
//     super();
//     this.table = new HTMLTableElement();
//   }

//   addToTable(value: T): T {
//     const body = this.table.tBodies;
//     console.log(body.namedItem)
//     return value;
//   }

//   addAllToTable(values: IList<T>): IList<T> {
//     throw new Error("Method not implemented.");
//   }
// }

export interface ITDTargetAttributes {
  className: string;
}

export interface ITDAttributes {
  className: IKeyValueMap<string, string>;
}
// {key.toString().toLowerCase().includes('status') ? <span>{value}</span> : value+""}
