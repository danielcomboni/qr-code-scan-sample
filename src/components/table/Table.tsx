
import { Component } from 'react';

import './table.css'
import TableBody, { ITableBodyProps } from './TableBody';
import { ITDAttributes } from './TableData';
import TableHead, { ITableHeadNamesProps } from './TableHeader';

export interface ITableProps<K, V> {
    columnNames: ITableHeadNamesProps;
    tableRowsData: ITableBodyProps<K, V>;
    tableId: string;
    tdAttributes: ITDAttributes;
    dataDisplayFunction: (key: string, data: any) => any
}

class Table<K, V> extends Component<ITableProps<K, V>, {}> {

    render() {

        return (
            <div>
                <table id={this.props.tableId}>
                    <TableHead columnNames={this.props.columnNames.columnNames} />
                    <TableBody items={this.props.tableRowsData.items} tdAttributes={this.props.tdAttributes} dataDisplayFunction={this.props.dataDisplayFunction} />
                </table>
            </div >
        );
    }
}

export default Table;