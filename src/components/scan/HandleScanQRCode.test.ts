import { render, screen } from "@testing-library/react";
import * as ZXing from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";
import HandleScanQRCode from "./HandleScanQRCode";

it("getCameraNames", () => {
  // expect.assertions(1);
  
  // expect(HandleScanQRCode.add(4,4)).toBe(8);
  // return expect(8).toEqual(8);
  // .resolves.toContain(
  [
    "OBS Virtual Camera",
    "9971ff4809409b81d930a39bc9a7e3075d309d89d44d45c5596a5d100cc78fa2",
  ];
  // value:OBS Virtual Camera key:9971ff4809409b81d930a39bc9a7e3075d309d89d44d45c5596a5d100cc78fa2
  // );
});
