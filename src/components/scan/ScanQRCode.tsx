import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../main/Main";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import MainBody from "../main/MainBody";
import './video.css'

import * as ZXing from "@zxing/library";
import { BrowserMultiFormatReader, PDF417Reader } from "@zxing/library";

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

const VideoCardPanel = ({ hideVideo, hideResult, result, deviceId, codeReader, cameras }: IScanQRCodeState) => {

  const mystyle = {
    position: "absolute",
    top: "100px",
    color: "#FFF",
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "rgba(221, 221, 221, 0.3)",
    width: "640px",
    padding: "10px 0",
    zIndex: "2147483647"
  };
  return (
    <div className="card" hidden={hideVideo} id="video-card-id">
      <h5 className="card-header">Focus camera on barcode(qr code)</h5>
      <div className="card-body">
        <div>

          <video
            id="video"
            width="100%"
            // style={{ border: "0px solid gray" }}
            style={{ zIndex: 1 }}
          >
            {/* <div className="overlay"></div> */}

            {/* <hr /> */}

            {/* <div className="content-bottom"> */}
            <h1>Heading</h1>
            {/* <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
            <button >Pause</button> */}
            {/* </div> */}

            {/* <div id="overlay-top"><hr></hr></div> */}

          </video>


          <div id="overlay" className="overlay-top"></div>

          <div id="overlay-bottom" className="overlay-bottom"></div>

          <div id="overlay-left" className="overlay-left"></div>

          <div id="overlay-right" className="overlay-right"></div>


        </div>
      </div>
    </div>
  );
};

// video scan result
const VideoScanResult = ({ hideVideo, hideResult, result, deviceId, codeReader, cameras }: IScanQRCodeState) => {
  return (
    <div className="card" hidden={hideResult} id="result-card-id">
      <h5 className="card-header">decoded result</h5>
      <div className="card-body">
        {/* <h5 className="card-title">Count</h5> */}
        <p className="card-text" id="result">{result}</p>
      </div>
    </div>
  );
};

interface IScanQRCodeState {
  hideVideo: boolean;
  hideResult: boolean;
  result: string;
  deviceId: any;
  codeReader: BrowserMultiFormatReader;
  cameras: Promise<MediaDeviceInfo[]>;
}

class ScanQRCode extends Component<{}, IScanQRCodeState> {

  state: IScanQRCodeState = {
    hideVideo: false,
    hideResult: false,
    result: '',
    deviceId: '',
    codeReader: new BrowserMultiFormatReader(),
    cameras: new Promise<MediaDeviceInfo[]>(() => { })
  }

  crop = () => {
    const video = document.getElementById("video")!;
    const width = video.offsetWidth;
    const height = video.offsetHeight;
    console.log(width, height);
  }

  startScan = (): void => {

    this.setState({ hideVideo: false, hideResult: true })

    this.state.codeReader.decodeFromVideoDevice(this.state.deviceId, "video", (result, err) => {

      if (result) {

        this.setState({ hideVideo: true, hideResult: false, result: result.getText() })
        console.log("the result:", result);
        this.state.codeReader.reset();

      }

      if (err && !(err instanceof ZXing.NotFoundException)) {
        // console.error(err);
        // document.getElementById("result").textContent = err;
      }
    });
    console.log(`Started continous decode from camera with id ${this.state.deviceId}`);
  }

  resetCamera = (): void => {
    this.state.codeReader.reset();
    this.setState({ hideVideo: true, hideResult: true, result: "" })
    console.log("Reset.");
  }

  getAllCameras = () => this.displayCamerasNames(this.state.codeReader);

  displayCamerasNames = (codeReader: BrowserMultiFormatReader): void => {

    this.getCameras(codeReader).then((cams) => {

      const sourceSelect = document.getElementById("sourceSelect")! as HTMLSelectElement;

      if (sourceSelect!.childNodes.length > 0) {
        sourceSelect?.childNodes.forEach((child) => child.remove());
      }

      let camValues = new Map();
      // place camera in Map to avoid repetition
      if (cams.length >= 1) {
        cams.forEach((element) => {
          camValues.set(element.deviceId, element.label);
        });
      }
      // populate camera dropdown list
      camValues.forEach((value, key) => {
        const sourceOption = document.createElement("option");
        sourceOption.text = value;
        sourceOption.value = key;
        sourceSelect?.appendChild(sourceOption);
      });
      // choose camera
      sourceSelect!.onchange = () => {
      };
    });
  }

  getCameras = (codeReader: BrowserMultiFormatReader): Promise<MediaDeviceInfo[]> => {
    codeReader = new BrowserMultiFormatReader();

    return codeReader.listVideoInputDevices();
  }

  render() {
    this.getAllCameras();
    // this.crop();
    
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

            <CameraSelectionPanel />
            <VideoCardPanel hideVideo={this.state.hideVideo} hideResult={this.state.hideResult} result={this.state.result} deviceId={this.state.deviceId} codeReader={this.state.codeReader} cameras={this.state.cameras} />
            <VideoScanResult hideVideo={this.state.hideVideo} hideResult={this.state.hideResult} result={this.state.result} deviceId={this.state.deviceId} codeReader={this.state.codeReader} cameras={this.state.cameras} />
          </div>
        </MainBody>

      </Main>


    );
  }
}

export default ScanQRCode
