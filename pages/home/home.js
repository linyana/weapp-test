Page({
  onClickLeft() {
    wx.navigateBack({
      delta: 1 
    });
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
});