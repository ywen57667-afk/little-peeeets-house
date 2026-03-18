const baseLocations = require('../data/locations.json');

const STORAGE_KEY = 'userLocations';

function getStoredLocations() {
  const stored = wx.getStorageSync(STORAGE_KEY);
  return Array.isArray(stored) ? stored : [];
}

function getAllLocations() {
  return [...getStoredLocations(), ...baseLocations];
}

function saveLocation(location) {
  const next = [location, ...getStoredLocations()];
  wx.setStorageSync(STORAGE_KEY, next);
  return next;
}

function buildMarkers(locations) {
  return locations.map((item, index) => ({
    id: index,
    latitude: item.latitude,
    longitude: item.longitude,
    width: 36,
    height: 36,
    callout: {
      content: item.name,
      display: 'BYCLICK',
      borderRadius: 16,
      padding: 8,
      bgColor: '#ffffff',
      color: '#2f2a2c',
    },
  }));
}

module.exports = {
  STORAGE_KEY,
  getStoredLocations,
  getAllLocations,
  saveLocation,
  buildMarkers,
};
