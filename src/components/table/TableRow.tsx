import React, { Component } from 'react';

export interface ITableRowValueProps<V> {
  rowInstance: V;
}

class TableHead<V> extends Component<ITableRowValueProps<V>, {}> {

  render() {

    return (
      <tr >
        {
          // Object.entries(v).map(([key, value]) => {
          //   this.print(value)
          //   return <td>{value + ""}</td>
          // })
        }
      </tr>)
  }
}

export default TableHead;