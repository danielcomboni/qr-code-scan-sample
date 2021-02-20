import React, { Component } from 'react';

export interface ITableHeadNamesProps {
  columnNames: string[];
}

class TableHead extends Component<ITableHeadNamesProps, {}> {


  // handleTableHeaderColumnResponsiveness = (index: number, title: string): string => {
  //   if (window.matchMedia("(max-width: 700px)").matches) {
  //     document.querySelectorAll(`table td:nth-of-type(${index}):before{content: ${title} }`)
  //   }

  // }

  componentDidMount() {
    const parent = document.getElementsByTagName("thead");
    // console.log(parent.length)

    const  result = document.querySelectorAll("table th:nth-of-type(1)");

    // console.log(result[0]);

    // if (window.matchMedia("(max-width: 700px)").matches) {
    //   const newTH = document.querySelector("td:nth-of-type(1):before")! as HTMLElement;
    //   console.log(newTH);

    //   if (newTH !== null) {
    //     newTH!.textContent = "test";

    //     const result = document.querySelector("td:nth-of-type(1):before");
        
    //     console.log(result);


    //   }
    // }
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columnNames.map((title, index) => {
            return <th key={index}> {title}</th>
          })}
        </tr>
      </thead>

    );
  }
}
export default TableHead;