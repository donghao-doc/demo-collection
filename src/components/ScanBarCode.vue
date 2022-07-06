<template>
  <div>
    <button @click="cameraStart">扫描二维码</button>
    <div class="container">
      <div class="box-card">
        <video id="camera" autoplay width="300" height="400"></video>
        <canvas id="canvas" width="800" height="800" hidden="hidden"></canvas>
        <img id="Tagimg" style="display:none" src="" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
import Quagga from 'quagga'

console.log('Quagga:', Quagga);
export default {
  name: "ScanBarCode",
  data() {
    return {
      barCode: '',    //条码
      videoObj: null, //视频对象(全局)
    }
  },
  methods: {
    // 摄像头开启
    cameraStart() {
      if (navigator.mediaDevices === undefined) {
        const div = document.createElement("div");
        div.innerHTML = 'mediaDevices not supported';
        document.body.appendChild(div);
      }
      // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      console.log('navigator.mediaDevices.getUserMedia:', navigator.mediaDevices.getUserMedia)
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
              audio: false,
              video: {
                width: 300,
                height: 400
              }
            },
            function (stream) {
              const video = document.querySelector('video');
              video.srcObject = stream;
              video.onloadedmetadata = function () {
                video.play();
              };
            },
            function (err) {
              alert("The following error occurred: " + err.name);
            }
        );
      } else {
        const div = document.createElement("div");
        div.innerHTML = 'getUserMedia not supported';
        document.body.appendChild(div);
        alert("getUserMedia not supported");
      }

      let video = document.getElementById("camera");
      let canvas = document.getElementById("canvas");
      let Context = canvas.getContext("2d");
      //每过1秒获取一次图片
      setInterval(() => {
        this.takePhoto(video, canvas, Context)
      }, 3000);
      // this.$once('hook:beforeDestroy', () => {
      //   clearInterval(getimgsetInterval2);
      // })
    },
    //拍照
    takePhoto(video, canvas, Context) {
      Context.drawImage(video, 0, 0);
      // toDataURL  ---  可传入'image/png'  ---默认, 'image/jpeg'
      let imgurl = canvas.toDataURL("image/png");
      console.log('imgurl:', imgurl)
      //调用识别方法
      this.analysisbarcode(imgurl);//如果img不好使，就用imgurl
    },
    //识别二维码
    analysisbarcode(imgpath) {
      Quagga.decodeSingle({
        src: imgpath,
        numOfWorkers: 0,  // Needs to be 0 when used within node
        inputStream: {
          size: 800  // restrict input-size to be 800px in width (long-side)
        },
        decoder: {
          readers: ["code_128_reader"] // List of active readers
        },
      }, function (result) {
        console.log('result:', result)
        if (result.codeResult) {
          console.log('result.codeResult:', result.codeResult)
          // console(result.codeResult.code);
          //由于歪比八卜的原因，Vue的参数在这没起作用，就用原生的js先顶着
          // document.getElementById('barCode').value = result.codeResult.code;
        } else {
          console.log("not detected");
        }
      });
    },
    forgetLove() {
      this.barCode = document.getElementById('barCode').value;
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid green;
  margin-top: 10px;
}
</style>
