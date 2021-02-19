import { Component } from 'react'
import { IKeyValueMap } from '../../Utils/collections/Map';
import { ITDAttributes } from './TableData';

interface ITableDataProps<K, V> {
  items: IKeyValueMap<K, V>;
  tdAttributes: ITDAttributes;
}

class TableData<K, V> extends Component<ITableDataProps<K, V>, {}> {
  render() {
    return (
      <td></td>
    );
  }
}