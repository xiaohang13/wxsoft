// pages/details/list.js
Page({
  data:{
    "info":{
      title:"aaaaaaaa",
      img:'../../images/1.png',
      cTime:'2017-01-15 23:32',
      content:'本文档将带你一步步创建完成一个微信小程序，并可以在手机上体验该小程序的实际效果。'
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    this.setData({
      'info.id':options
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})