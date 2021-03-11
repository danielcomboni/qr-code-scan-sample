import { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

class FormTop extends Component {

  render() {
    return (

      <div className="form-row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="branchName"></label>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTop