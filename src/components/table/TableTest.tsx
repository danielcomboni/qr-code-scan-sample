import { Component } from 'react'
import { ITestModel, IKey } from '../../models/Test'
import KeyValueMap from '../../Utils/collections/Map'
import Table from './Table'
import { ITableProps } from './Table'
import { ITableBodyProps } from './TableBody'
import { ITDAttributes } from './TableData'
import { ITableHeadNamesProps } from './TableHeader'
import './table-test.css'
import { WorkflowConstants } from '../../constants/Workflow'

const titles: string[] = [
  "REF.NO",
  "APPLICATION DATE",
  "TYPE",
  "STATUS",
  "SUBSTATUS",
  "APPLICANT",
  "BENEFICIARY",
  "AMOUNT"
]

const testData: ITestModel = {
  id: 1,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Open",
  substatus: "AwaitingComparisonApproval",
  sender: 'DANIEL COMBONI',
  recipient: 'TIMOTHY E. KASASA',
  amount: 600
}

const keyData: IKey = {
  id: testData.id
}


const testData2: ITestModel = {
  id: 2,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Error",
  substatus: "Error",
  sender: 'NAMUGGA LISA',
  recipient: 'FRIEDA HAMSTER',
  amount: 600
}

const keyData2: IKey = {
  id: testData2.id
}

const testData3: ITestModel = {
  id: 3,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}
const keyData3: IKey = {
  id: testData3.id
}

const testData4: ITestModel = {
  id: 4,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData4: IKey = {
  id: testData4.id
}


const testData5: ITestModel = {
  id: 5,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData5: IKey = {
  id: testData5.id
}

const testData6: ITestModel = {
  id: 6,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData6: IKey = {
  id: testData6.id
}

const testData7: ITestModel = {
  id: 7,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData7: IKey = {
  id: testData7.id
}

const testData8: ITestModel = {
  id: 8,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData8: IKey = {
  id: testData8.id
}

const testData9: ITestModel = {
  id: 9,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData9: IKey = {
  id: testData9.id
}

const testData10: ITestModel = {
  id: 10,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData10: IKey = {
  id: testData10.id
}

const testData11: ITestModel = {
  id: 11,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData11: IKey = {
  id: testData11.id
}

const testData12: ITestModel = {
  id: 12,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData12: IKey = {
  id: testData12.id
}

const testData13: ITestModel = {
  id: 13,
  referenceNumber: '45678f',
  applicationDate: new Date(),
  type: "RTGS",
  status: "Closed",
  substatus: "Closed",
  sender: 'CHARLIE LWANGA',
  recipient: 'BENJI LUTAAYA',
  amount: 600
}

const keyData13: IKey = {
  id: testData13.id
}

let tdClassNames = new KeyValueMap<string, string>();
tdClassNames.put("id", "")
tdClassNames.put("referenceNumber", "reference-number")
tdClassNames.put("applicationDate", "application-date")
tdClassNames.put("type", "transfer-type")
tdClassNames.put("status", "transfer-status")
tdClassNames.put("subStatus", "transfer-sub-status")
tdClassNames.put("sender", "transfer-sender")
tdClassNames.put("recipient", "transfer-recipient")
tdClassNames.put("amount", "transfer-amount")

const tdAttributes: ITDAttributes = {
  className: tdClassNames
}

let tableRowData = new KeyValueMap<IKey, ITestModel>();
tableRowData.put(keyData, testData);
tableRowData.put(keyData2, testData2);
tableRowData.put(keyData3, testData3);
tableRowData.put(keyData4, testData4);
tableRowData.put(keyData5, testData5);
tableRowData.put(keyData6, testData6);
tableRowData.put(keyData7, testData7);
tableRowData.put(keyData8, testData8);
tableRowData.put(keyData9, testData9);
tableRowData.put(keyData10, testData10);
tableRowData.put(keyData11, testData11);
tableRowData.put(keyData12, testData12);
tableRowData.put(keyData13, testData13);

const dataDisplayFunction = (key: string, data: any) => {

  if (key === 'applicationDate') {
    const date = new Date(data);
    return date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear() + '';
  }

  if (key === 'status') {
    const statusClassName = WorkflowConstants.statusColours(data);
    const span = <span className={statusClassName}>{data}</span>
    return span;
  }

  if (key === 'substatus') {
    const statusClassName = WorkflowConstants.statusColours(data);
    const span = <span className={statusClassName}>{data}</span>
    return span;
  }

  return "".concat(data);
}

const tableItems: ITableBodyProps<IKey, ITestModel> = { items: tableRowData, tdAttributes, dataDisplayFunction: dataDisplayFunction }

const colNames: ITableHeadNamesProps = { columnNames: titles }

const props: ITableProps<IKey, ITestModel> = { columnNames: colNames, tableId: "test-table-id", tableRowsData: tableItems, tdAttributes, dataDisplayFunction }

class TableTest extends Component {

  render() {
    return (
      <Table columnNames={props.columnNames} tableId={props.tableId} tableRowsData={props.tableRowsData} tdAttributes={props.tdAttributes} dataDisplayFunction={props.dataDisplayFunction} />
    )
  }
}

export default TableTest;