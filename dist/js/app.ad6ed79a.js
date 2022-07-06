(function(){"use strict";var e={2156:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("ScanBarCode")],1)},a=[],i=n(9821),c=n.n(i),d=function(){var e=this,t=e._self._c;return t("div",[t("button",{on:{click:e.cameraStart}},[e._v("扫描二维码")]),e._m(0)])},u=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"box-card"},[t("video",{attrs:{id:"camera",autoplay:"",width:"300",height:"400"}}),t("canvas",{attrs:{id:"canvas",width:"800",height:"800",hidden:"hidden"}}),t("img",{staticStyle:{display:"none"},attrs:{id:"Tagimg",src:"",alt:""}})])])}],s=n(928),l=n.n(s);console.log("Quagga:",l());var f={name:"ScanBarCode",data(){return{barCode:"",videoObj:null}},methods:{cameraStart(){let e=document.getElementById("camera"),t=document.getElementById("canvas"),n=t.getContext("2d");if(void 0===navigator.mediaDevices){const e=document.createElement("div");e.innerHTML="mediaDevices not supported",document.body.appendChild(e)}if(console.log("navigator.mediaDevices.getUserMedia:",navigator.mediaDevices.getUserMedia),navigator.mediaDevices.getUserMedia)navigator.mediaDevices.getUserMedia({audio:!1,video:{width:300,height:400,facingMode:{exact:"environment"}}},(function(t){e.srcObject=t,e.onloadedmetadata=function(){e.play()}}),(function(e){alert("The following error occurred: "+e.name)}));else{const e=document.createElement("div");e.innerHTML="getUserMedia not supported",document.body.appendChild(e),alert("getUserMedia not supported")}setInterval((()=>{this.takePhoto(e,t,n)}),3e3)},takePhoto(e,t,n){n.drawImage(e,0,0);let o=t.toDataURL("image/png");console.log("imgurl:",o),this.analysisbarcode(o)},analysisbarcode(e){l().decodeSingle({src:e,numOfWorkers:0,inputStream:{size:800},decoder:{readers:["code_128_reader"]}},(function(e){console.log("result:",e),e.codeResult?console.log("result.codeResult:",e.codeResult):console.log("not detected")}))},forgetLove(){this.barCode=document.getElementById("barCode").value}}},v=f,g=n(1001),m=(0,g.Z)(v,d,u,!1,null,"4926e997",null),p=m.exports,h={name:"App",components:{ScanBarCode:p},mounted(){new(c())}},b=h,y=(0,g.Z)(b,r,a,!1,null,null,null),w=y.exports;o.ZP.config.productionTip=!1,new o.ZP({render:e=>e(w)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var c=!0,d=0;d<o.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[d])}))?o.splice(d--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],d=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(d)var s=d(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkcollection"]=self["webpackChunkcollection"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2156)}));o=n.O(o)})();
//# sourceMappingURL=app.ad6ed79a.js.map