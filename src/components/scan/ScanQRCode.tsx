import React, { Component } from "react";
import HandleScanQRCode from "./HandleScanQRCode";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../main/Main";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import MainBody from "../main/MainBody";

// dropdown list of cameras available
const CameraSelectionPanel = () => {
  return (
    <div className="input-group mb-3" id="sourceSelectPanel">
      <div className="input-group-prepend">
        <label className="input-group-text">Camera options</label>
      </div>
      <select className="custom-select" id="sourceSelect"></select>
    </div>
  );
};

// video scan area
const VideoCardPanel = () => {
  return (
    <div className="card" hidden={true} id="video-card-id">
      <h5 className="card-header">Focus camera on barcode(qr code)</h5>
      <div className="card-body">
        <div>
          <video
            id="video"
            width="100%"
            style={{ border: "0px solid gray" }}
          ></video>
        </div>
      </div>
    </div>
  );
};

// video scan result
const VideoScanResult = () => {
  return (
    <div className="card" hidden={true} id="result-card-id">
      <h5 className="card-header">decoded result</h5>
      <div className="card-body">
        {/* <h5 className="card-title">Count</h5> */}
        <p className="card-text" id="result"></p>
      </div>
    </div>
  );
};

class ScanQRCode extends Component {


  startScan = () => HandleScanQRCode.startScan();

  resetCamera = () => HandleScanQRCode.resetCamera();

  getAllCameras = () => HandleScanQRCode.displayCamerasNames();

  render() {
    // performScan();
    this.getAllCameras();
    return (

      <Main>

        <Header />

        <Sidebar />

        <MainBody>
          <div className="container">
            <button type="button" className="btn btn-primary m-1" id="startButton" onClick={this.startScan}>
              Scan
      </button>

            <button
              type="button"
              className="btn btn-primary m-1"
              id="resetButton"
              onClick={this.resetCamera}
            >
              Reset
        </button>

            {/* <button
              type="button"
              className="btn btn-secondary"
              onClick={this.getAllCameras}
            >
              all cameras
        </button> */}

            <CameraSelectionPanel />
            <VideoCardPanel />
            <VideoScanResult />
          </div>
        </MainBody>

      </Main>


    );
  }
}

// const mapStateToProps = (state: any) => {
//   return {
//     quantity: state
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     justPrint: () => dispatch({ type: Constants.PRINT })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ScanQRCode);
export default ScanQRCode
