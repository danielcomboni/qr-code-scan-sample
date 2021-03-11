import { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

interface ICheckboxProps {
  flag: boolean;
  label: string;
  className?: string;
  id?: string;
  name?: string
  action?: () => boolean
}

class Checkbox extends Component<ICheckboxProps, {}> {
  render() {
    return (
      <div className="form-check">
        <input type="checkbox" className={`form-check-input ${this.props.className}`} id={this.props.id} />
        <label className="form-check-label" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    )
  }
}

export default Checkbox;