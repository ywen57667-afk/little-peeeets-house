const { getAllLocations } = require('../../utils/location-store');

Page({
  data: {
    location: null,
    comments: [],
  },

  onLoad(options) {
    const { id = '' } = options;
    const location = getAllLocations().find((item) => item.id === id) || null;

    this.setData({
      location,
      comments: location ? location.comments || [] : [],
    });
  },
});
