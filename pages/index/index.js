const { getAllLocations, buildMarkers } = require('../../utils/location-store');

Page({
  data: {
    latitude: 29.56301,
    longitude: 106.55156,
    scale: 12,
    markers: [],
    locations: [],
    markerLocationMap: {},
  },

  onLoad() {
    this.mapContext = wx.createMapContext('dog-map');
    this.loadLocations();
    this.fetchUserLocation();
  },

  onShow() {
    this.loadLocations();
  },

  loadLocations() {
    const locations = getAllLocations();
    const markerLocationMap = locations.reduce((result, item, index) => {
      result[index] = item.id;
      return result;
    }, {});

    this.setData({
      locations,
      markers: buildMarkers(locations),
      markerLocationMap,
    });
  },

  fetchUserLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: ({ latitude, longitude }) => {
        getApp().globalData.userLocation = { latitude, longitude };
        this.setData({ latitude, longitude, scale: 14 });
      },
    });
  },

  moveToUserLocation() {
    this.fetchUserLocation();
    if (this.mapContext) {
      this.mapContext.moveToLocation();
    }
  },

  handleMarkerTap(event) {
    const { markerId } = event.detail;
    const locationId = this.data.markerLocationMap[markerId];

    if (!locationId) {
      return;
    }

    wx.navigateTo({
      url: `/pages/detail/detail?id=${locationId}`,
    });
  },

  openDetail(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
  },
});
