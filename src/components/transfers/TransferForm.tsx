import React, { ChangeEvent, Component } from 'react';
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from '../main/Main';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

import MainBody from '../main/MainBody';

import logo from '../../assets/dfcu_logo.png'
import 'react-datepicker/dist/react-datepicker.css';
import Datepicker from '../subcomponents/DatePicker';

// import * as ZXing from "@zxing/library";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs

interface ITransferhtmlFormState {
  date: Date;
  branchName: string;
  htmlForeignRemittances: boolean;
  eft: boolean;
  rtgs: boolean;
  rtgsLocal: boolean;
  eaps: boolean;
  repss: boolean;
  htmlForeignDraft: boolean

  currency: string;
  amount: string;
  rate: string;

  qrCodeResult: string;
}

class TransferhtmlForm extends Component<{}, ITransferhtmlFormState> {

  state: ITransferhtmlFormState = {
    date: new Date(),
    branchName: '',
    htmlForeignRemittances: false,
    eft: false,
    rtgs: false,
    rtgsLocal: false,
    eaps: false,
    repss: false,
    htmlForeignDraft: false,

    currency: '',
    amount: '',
    rate: '',
    qrCodeResult: ''
  }

  asHTMLInputElement = (id: string): HTMLInputElement => (document.getElementById(id) as HTMLInputElement)!

  handleDate = (date: any): Date => {
    this.setState({ date: new Date(date) })
    console.log(this.state.date)
    return this.state.date
  }

  handleBranchName = (e: ChangeEvent<HTMLInputElement>): string => {
    this.setState({ branchName: e.target.value })
    console.log('branch name: ', this.state.branchName);
    return this.state.branchName;
  }

  providePDFValues = (): string => {
    let result = '';
    Object.entries(this.state).map(([key, value], i) => {
      result = result.concat(value).concat(";");
      this.setState({ qrCodeResult: result })
    });
    return this.state.qrCodeResult;
  }

  pdfMakeSample(): void {
    const docDefinition = {
      content: [{

        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: [
            ['First', 'Second', 'Third', 'Последняя'],
            ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Чё']
          ]
        }
      }]
    };
    pdfMake.createPdf(docDefinition).download('pdfmake.pdf');

    const pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.download("testdoc.pdf");
  }

  pdfMakeStylingSample = (): void => {

    console.log('tetetetete:', this.state.qrCodeResult)
    const documentDefinition = {

      content: [//start content

        // 'this is a standard paragraph, using default style',

        { text: this.state.branchName, fontSize: 15 },

        {
          text: [

            { text: this.state.qrCodeResult, fontSize: 15 },

          ]
        },

        {
          qr: `${this.state.branchName};${this.state.date}`,
          fit: 250
        }

      ]// end content
    };
    pdfMake.createPdf(documentDefinition).download("styling_test.pdf")
  }

  render() {

    return (

      <Main>

        <Header />

        <Sidebar />

        <MainBody>

          <h2 style={{ textAlign: 'center' }}>FUNDS TRANSFER REQUEST</h2>
          <img src={logo} />

          <h6>*PLEASE FILL THE htmlForM IN CAPITAL/BLOCK LETTER*</h6>

          {/* start branch name and date */}

          {/* <Checkbox label="htmlForeign Remittances" flag={this.state.htmlForeignRemittances} /> */}

          {/* <Checkbox label="EFT" flag={this.state.htmlForeignRemittances} /> */}

          {/* <Checkbox label="RTGS" flag={this.state.htmlForeignRemittances} />

            <Checkbox label="RTGS (Local)" flag={this.state.htmlForeignRemittances} />

            <Checkbox label="EAPS" flag={this.state.htmlForeignRemittances} />

            <Checkbox label="REPSS" flag={this.state.htmlForeignRemittances} />

            <Checkbox label="htmlForeign Draft" flag={this.state.htmlForeignRemittances} /> */}

          <form>
            <div className="form-row">

              <div className="form-group col-md-6">
                <label htmlFor="branchName">Branch Name</label>
                <input value={this.state.branchName} onChange={this.handleBranchName} />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="date">Date</label>
                <DatePicker onChange={this.handleDate} selected={this.state.date} />
              </div>
              {/*      
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
      </label>
              </div>
               */}
            </div>
            {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
          </form>

          <div>
            <button className="btn btn-primary m-1" id="saveButton" onClick={this.pdfMakeStylingSample}>Generate PDF</button>
          </div>

        </MainBody>

      </Main >
    );
  }
}

export default TransferhtmlForm;