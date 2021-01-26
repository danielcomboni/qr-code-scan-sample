import React, { Component } from "react";
import { ButtonTypeButton, justConsoleIt } from "../Buttons/Buttons";
import * as ZXing from "@zxing/library";
// import { BrowserMultiFormatReader } from "@zxing/library/esm/browser";
import HandleScanQRCode from "./HandleScanQRCode";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css'; // commented out but has no issues
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Buttons = (props: any) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label=""
      style={{ paddingTop: "10px" }}
    >
      <button type="button" className="btn btn-secondary" id="startButton">
        Scan
      </button>

      {/* <ButtonTypeButton
        className={"btn btn-secondary"}
        name={"Reset"}
        id={"resetButton"}
      /> */}
    </div>
  );
};

const CameraSelectionPanel = (/*props: Array<string> */) => {
  return (
    <div className="input-group mb-3" id="sourceSelectPanel">
      <div className="input-group-prepend">
        <label className="input-group-text">Options</label>
      </div>
      <select className="custom-select" id="sourceSelect"></select>
    </div>
  );
};

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

// const performScan = () => {
//   let selectedDeviceId: any;
//   const codeReader = new BrowserMultiFormatReader();
//   console.log("ZXing code reader initialized");
//   codeReader
//     .listVideoInputDevices()
//     .then((videoInputDevices) => {
//       const sourceSelect = document.getElementById("sourceSelect")! as HTMLSelectElement;
//       selectedDeviceId = videoInputDevices[0].deviceId;
//       if (videoInputDevices.length >= 1) {
//         videoInputDevices.forEach((element) => {
//           const sourceOption = document.createElement("option");
//           sourceOption.text = element.label;
//           sourceOption.value = element.deviceId;
//           sourceSelect.appendChild(sourceOption);
//         });

//         sourceSelect.onchange = () => {
//           selectedDeviceId = sourceSelect.value;
//         };

//         // const sourceSelectPanel = document.getElementById('sourceSelectPanel')
//         // sourceSelectPanel.style.display = 'block'
//       }

//       document.getElementById("startButton")!.addEventListener("click", () => {
//         // const screenWidth = screen.width;
//         // const screenHeight = screen.height;

//         // // add device detection
//         // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         //     document.getElementById('video').width = screenWidth - 1000
//         //     document.getElementById('video').height = screenHeight - 20
//         // } else {
//         //     document.getElementById('video').width = screenWidth
//         //     // document.getElementById('video').height = screenHeight - 20
//         // }

//         document.getElementById("video-card-id")!.hidden = false;
//         document.getElementById("result-card-id")!.hidden = true;

//         codeReader.decodeFromVideoDevice(
//           selectedDeviceId,
//           "video",
//           (result, err) => {
//             if (result) {
//               console.log(result);

//               document.getElementById("video-card-id")!.hidden = true;
//               document.getElementById("result-card-id")!.hidden = false;
//               document.getElementById("result")!.textContent = result.getText();
//               console.log("the result:", result.getText());
//               codeReader.reset();
//             }
//             if (err && !(err instanceof ZXing.NotFoundException)) {
//               // console.error(err);
//               // document.getElementById("result").textContent = err;
//             }
//           }
//         );
//         console.log(
//           `Started continous decode from camera with id ${selectedDeviceId}`
//         );
//       });

//       document.getElementById("resetButton")!.addEventListener("click", () => {
//         codeReader.reset();
//         document.getElementById("result")!.textContent = "";
//         document.getElementById("result-card-id")!.hidden = true;
//         console.log("Reset.");
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

class ScanQRCode extends Component {
  state = {
    qrCodeResult: "",
    allCameras: []
  };

  startScan = () => HandleScanQRCode.startScan();

  resetCamera = () => HandleScanQRCode.resetCamera();

  getAllCameras = () => HandleScanQRCode.displayCamerasNames();



  render() {
    // performScan();
    this.getAllCameras();
    return (
      <div className="container">
        <button type="button" className="btn btn-secondary" id="startButton" onClick={this.startScan}>
          Scan
      </button>

        <button
          type="button"
          className="btn btn-secondary"
          id="resetButton"
          onClick={this.resetCamera}
        >
          Reset
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.getAllCameras}
        >
          all cameras
        </button>

        <CameraSelectionPanel />
        <VideoCardPanel />
        <VideoScanResult />
      </div>
    );
  }
}

export default ScanQRCode;
