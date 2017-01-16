// pages/home/home.js

Page({
  data: {
    "image": "../../images/91ef76c6a7efce1b620971c3ad51f3deb48f659d.jpg",
    "title": "活着，为了学习",
    "content": "Learn and live",
    "mode": "aspectFit",
    "submit_val": "开始学习",
    "status": "none"
  },
  loadSub: function () {
    // console.log(123)
    this.setData({
      status: "block"
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    setTimeout(this.loadSub, 1500)
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})