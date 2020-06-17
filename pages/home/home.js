// pages/home/home.js
Page({
  data: {
    name: 'fake',
    age: 20,
    students: [
      {id:110,name: 'fake',age:30},
      {id:111,name: 'faker',age:30},
      {id:113,name: 'fake6',age:30}
    ],
    count: 0,
  },
  handleButton() {
    //错误做法，界面是不会刷新的
    //this.data.count++
    this.setData({
      count:this.data.count + 1
    })
  },
  handlesupbutton() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handelegetuserInfo(event) {
    console.log(event);
    
  }
})