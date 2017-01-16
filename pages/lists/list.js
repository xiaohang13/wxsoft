// pages/lists/list.js
Page({
  data:{
    "newList":[
      {id:1, title:'aaaaaaa', img:'../../images/1.png', cTime:'2017-01-15 23:32'},
      {id:2, title:'bbbbbbb', img:'../../images/2.png', cTime:'2017-01-15 23:32'},
      {id:3, title:'ccccccc', img:'../../images/3.png', cTime:'2017-01-15 23:32'},
      {id:4, title:'ddddddd', img:'../../images/4.png', cTime:'2017-01-15 23:32'}
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.title);
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