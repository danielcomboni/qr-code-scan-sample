(this["webpackJsonpqr-code-scan-sample"]=this["webpackJsonpqr-code-scan-sample"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),d=c(1),a=c(9),r=c.n(a),s=(c(17),c.p,c(18),c(2)),o=c(3),i=c(11),l=c(10),u=c(4),m=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"openCamera",value:function(){}}],[{key:"resetCamera",value:function(){e.codeReader.reset(),document.getElementById("result").textContent="",document.getElementById("result-card-id").hidden=!0,console.log("Reset.")}},{key:"startScan",value:function(){document.getElementById("video-card-id").hidden=!1,document.getElementById("result-card-id").hidden=!0,console.log("res:".concat(e.selectedDeviceId," -- ").concat(e.codeReader)),e.codeReader.decodeFromVideoDevice(e.selectedDeviceId,"video",(function(t,c){t&&(console.log(t),document.getElementById("video-card-id").hidden=!0,document.getElementById("result-card-id").hidden=!1,document.getElementById("result").textContent=t.getText(),console.log("the result:",t.getText()),e.codeReader.reset()),!c||c instanceof u.NotFoundException||console.error(c)})),console.log("Started continous decode from camera with id ".concat(e.selectedDeviceId))}},{key:"displayCamerasNames",value:function(){e.getAllCameras().then((function(t){var c=document.getElementById("sourceSelect");c.childNodes.length>0&&(null===c||void 0===c||c.childNodes.forEach((function(e){return e.remove()}))),e.selectedDeviceId=t[0].deviceId;var n=new Map;t.length>=1&&t.forEach((function(e){n.set(e.deviceId,e.label)})),n.forEach((function(e,t){var n=document.createElement("option");n.text=e,n.value=t,null===c||void 0===c||c.appendChild(n)})),c.onchange=function(){e.selectedDeviceId=null===c||void 0===c?void 0:c.value}}))}},{key:"getAllCameras",value:function(){return e.codeReader=new u.BrowserMultiFormatReader,e.codeReader.listVideoInputDevices()}}]),e}();m.selectedDeviceId=void 0,m.codeReader=void 0;c(38);var h=function(){return Object(n.jsxs)("div",{className:"input-group mb-3",id:"sourceSelectPanel",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("label",{className:"input-group-text",children:"Options"})}),Object(n.jsx)("select",{className:"custom-select",id:"sourceSelect"})]})},j=function(){return Object(n.jsxs)("div",{className:"card",hidden:!0,id:"video-card-id",children:[Object(n.jsx)("h5",{className:"card-header",children:"Focus camera on barcode(qr code)"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("div",{children:Object(n.jsx)("video",{id:"video",width:"100%",style:{border:"0px solid gray"}})})})]})},b=function(){return Object(n.jsxs)("div",{className:"card",hidden:!0,id:"result-card-id",children:[Object(n.jsx)("h5",{className:"card-header",children:"decoded result"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("p",{className:"card-text",id:"result"})})]})},v=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,d=new Array(n),a=0;a<n;a++)d[a]=arguments[a];return(e=t.call.apply(t,[this].concat(d))).state={qrCodeResult:"",allCameras:[]},e.startScan=function(){return m.startScan()},e.resetCamera=function(){return m.resetCamera()},e.getAllCameras=function(){return m.displayCamerasNames()},e}return Object(o.a)(c,[{key:"render",value:function(){return this.getAllCameras(),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",id:"startButton",onClick:this.startScan,children:"Scan"}),Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",id:"resetButton",onClick:this.resetCamera,children:"Reset"}),Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.getAllCameras,children:"all cameras"}),Object(n.jsx)(h,{}),Object(n.jsx)(j,{}),Object(n.jsx)(b,{})]})}}]),c}(d.Component);var p=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(v,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,d=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),d(e),a(e),r(e)}))};r.a.render(Object(n.jsx)(p,{}),document.getElementById("root")),f()}},[[39,1,2]]]);
//# sourceMappingURL=main.b4423049.chunk.js.map