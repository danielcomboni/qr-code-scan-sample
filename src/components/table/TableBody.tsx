
import { Component } from 'react';

import IKeyValueMap from '../../Utils/collections/Map';
import { ITDAttributes } from './TableData';

export interface ITableBodyProps<K, V> {
  items: IKeyValueMap<K, V>;
  tdAttributes: ITDAttributes;
  dataDisplayFunction: (key: string, data: any) => any
}

class TableBody<K, V> extends Component<ITableBodyProps<K, V>, {}> {

  render() {

    return (

      <tbody>
        {

          this.props.items.getValues().toArray().map((v, index) => {

            return (<tr key={index}>
              {
                Object.entries(v).map(([key, value], i) => {
                  if (i > 0) {
                    const tdValue = this.props.dataDisplayFunction(key, value);
                    return <td key={i} className={this.props.tdAttributes.className.get(key)} >{tdValue}</td>
                  }
                })
              }
            </tr>)

          })

        }

      </tbody>

    );
  }
}

export default TableBody;