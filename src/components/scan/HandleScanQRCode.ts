import * as ZXing from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";
import Dom from "../../Utils/Dom";

export default class HandleScanQRCode {
  public static selectedDeviceId: any;
  public static codeReader: BrowserMultiFormatReader;

  public static resetCamera(): void {
    HandleScanQRCode.codeReader.reset();
    Dom.getElById("result")!.textContent = "";
    Dom.getElById("result-card-id")!.hidden = true;
    console.log("Reset.");
  }

  public static startScan(): void {
    Dom.getElById("video-card-id").hidden = false;
    Dom.getElById("result-card-id").hidden = true;
    HandleScanQRCode.codeReader.decodeFromVideoDevice(HandleScanQRCode.selectedDeviceId, "video", (result, err) => {
      if (result) {
        console.log(result);
        Dom.getElById("video-card-id")!.hidden = true;
        Dom.getElById("result-card-id")!.hidden = false;
        Dom.getElById("result")!.textContent = result.getText();
        console.log("the result:", result.getText());
        HandleScanQRCode.codeReader.reset();
      }
      if (err && !(err instanceof ZXing.NotFoundException)) {
        // console.error(err);
        // document.getElementById("result").textContent = err;
      }
    });
    console.log(`Started continous decode from camera with id ${HandleScanQRCode.selectedDeviceId}`);
  }

  public static displayCamerasNames(): void {
    HandleScanQRCode.getAllCameras().then((cams) => {
      const sourceSelect = Dom.getElById("sourceSelect") as HTMLSelectElement;

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
