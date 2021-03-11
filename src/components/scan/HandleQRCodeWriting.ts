import * as ZXing from "@zxing/library";

export default class HandleQRCodeWriting {
  public static writeQRCodeToDOM(textContext: string, buttonId: string, qrCodeViewId: string) {
    const codeWriter = new ZXing.BrowserQRCodeSvgWriter();

    console.log("ZXing code writer initialized");

    let svg;
    document.getElementById(buttonId)?.addEventListener("click", () => {
      console.log("yesy");

      svg = codeWriter.writeToDom(qrCodeViewId, textContext, 300, 300);
    });
  }
}
