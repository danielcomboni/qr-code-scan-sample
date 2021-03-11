import { Component } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';



interface IDatepickerProps {
  name?: string;
  style?: any;
}

class Datepicker extends Component<IDatepickerProps, {}> {
  state: any = {
    date: new Date()
  }

  dateChange = (date: Date) => {
    this.setState({ date: date });
  }
  render() {
    return (
      <div>
        <DatePicker selected={this.state.date} onChange={this.dateChange} name={this.props.name} />
      </div>
    )
  }
}

export default Datepicker;