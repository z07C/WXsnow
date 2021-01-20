wxml：

<canvas canvas-id="snowCanvas" style="width:{{W}}px;height:{{H}}px"></canvas>


js:

onLoad: function (options) {
    this.setData({
      W:wx.getSystemInfoSync().windowWidth,
      H:wx.getSystemInfoSync().windowHeight
    })
    var DropAnimation=require("../entity.js")
    new DropAnimation({
      ctx:wx.createCanvasContext('snowCanvas'),
      count:80,
      systemW:this.data.W,
      systemH:this.data.H,
      speed:1.5
   

    })
  },



wxss:

page{
  background-color: #111122;
}