import * as ZXing from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";

export default class HandleScanQRCode {
  public static selectedDeviceId: any;
  public static codeReader: BrowserMultiFormatReader;

  public openCamera(): void {}

  public static resetCamera(): void {
    HandleScanQRCode.codeReader.reset();
    document.getElementById("result")!.textContent = "";
    document.getElementById("result-card-id")!.hidden = true;
    console.log("Reset.");
  }

  public static startScan(): /** selectedDeviceId: any,
    codeReader: BrowserMultiFormatReader */
  void {
    document.getElementById("video-card-id")!.hidden = false;
    document.getElementById("result-card-id")!.hidden = true;
    console.log(
      `res:${HandleScanQRCode.selectedDeviceId} -- ${HandleScanQRCode.codeReader}`
    );

    HandleScanQRCode.codeReader.decodeFromVideoDevice(
      HandleScanQRCode.selectedDeviceId,
      "video",
      (result, err) => {
        if (result) {
          console.log(result);
          document.getElementById("video-card-id")!.hidden = true;
          document.getElementById("result-card-id")!.hidden = false;
          document.getElementById("result")!.textContent = result.getText();
          console.log("the result:", result.getText());
          HandleScanQRCode.codeReader.reset();
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
          console.error(err);
          // document.getElementById("result").textContent = err;
        }
      }
    );
    console.log(
      `Started continous decode from camera with id ${HandleScanQRCode.selectedDeviceId}`
    );
  }

  // public clearQRCodeScanResult = () => (this.qrCodeScanResult = "");
  public static displayCamerasNames(): void {
    HandleScanQRCode.getAllCameras().then((cams) => {
      const sourceSelect = document.getElementById(
        "sourceSelect"
      ) as HTMLSelectElement;

      if (sourceSelect!.childNodes.length > 0) {
        sourceSelect?.childNodes.forEach((child) => child.remove());
      }

      HandleScanQRCode.selectedDeviceId = cams[0].deviceId;
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
        HandleScanQRCode.selectedDeviceId = sourceSelect?.value;
      };
    });
  }

  public static getAllCameras(): Promise<MediaDeviceInfo[]> {
    HandleScanQRCode.codeReader = new BrowserMultiFormatReader();
    const codeReader = HandleScanQRCode.codeReader;
    return codeReader.listVideoInputDevices();
  }
}

// const performScan = () => {
//   let selectedDeviceId;
//   const codeReader = new BrowserMultiFormatReader();
//   console.log("ZXing code reader initialized");
//   codeReader
//     .listVideoInputDevices()
//     .then((videoInputDevices) => {
//       const sourceSelect = document.getElementById("sourceSelect");
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

//       document.getElementById("startButton").addEventListener("click", () => {
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

//         document.getElementById("video-card-id").hidden = false;
//         document.getElementById("result-card-id").hidden = true;

//         codeReader.decodeFromVideoDevice(
//           selectedDeviceId,
//           "video",
//           (result, err) => {
//             if (result) {
//               console.log(result);

//               document.getElementById("video-card-id").hidden = true;
//               document.getElementById("result-card-id").hidden = false;
//               document.getElementById("result").textContent = result.getText();
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

//       document.getElementById("resetButton").addEventListener("click", () => {
//         codeReader.reset();
//         document.getElementById("result").textContent = "";
//         document.getElementById("result-card-id").hidden = true;
//         console.log("Reset.");
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };
