App({
  globalData: {
    userLocation: null,
  },

  onLaunch() {
    const submissions = wx.getStorageSync('userLocations');
    if (!Array.isArray(submissions)) {
      wx.setStorageSync('userLocations', []);
    }
  },
});
