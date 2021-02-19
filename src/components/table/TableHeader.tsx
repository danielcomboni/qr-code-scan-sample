import React, { Component } from 'react';

export interface ITableHeadNamesProps {
  columnNames: string[];
}

class TableHead extends Component<ITableHeadNamesProps, {}> {

  render() {
    return (
      <thead>
        <tr>
          {this.props.columnNames.map((title, index) => {
            return <th key={index}>{title}</th>
          })}
        </tr>
      </thead>

    );
  }
}
export default TableHead;