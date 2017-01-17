// pages/aboutme/about.js
//获取应用实例
var app = getApp()
// console.log(app.globalData)
Page({
  data: {
    motto: '上面那个是我...',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    // 如果本地存在用户信息，则不需要通过网络获取
    wx.getStorage({
      key: 'userinfo',
      success: function (res) {
        // success
        console.log("从缓存中读取。")
        that.setData({
          userInfo: res.data
        })
      },
      fail: function () {
        console.log("缓存中没有数据，需要通过网络获取。。。")
        that.getUserInfoAndSetStorage()
      }
    })
  },
  getUserInfoAndSetStorage: function () {
    var that = this
    console.log("getUserInfoAndSetStorage....")
    app.getUserInfo(function (userInfo) {
      // 将用户数据缓存在本地
      wx.setStorage({
        key: 'userinfo',
        data: userInfo,
        success: function (res) {
          // success
          console.log("缓存成功。")
        }
      })
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
