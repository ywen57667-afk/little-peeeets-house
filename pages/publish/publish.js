const { saveLocation } = require('../../utils/location-store');

Page({
  data: {
    form: {
      name: '',
      tagsText: '',
      cover: '',
      address: '',
      latitude: 29.56301,
      longitude: 106.55156,
    },
  },

  handleNameInput(event) {
    this.updateForm('name', event.detail.value);
  },

  handleTagsInput(event) {
    this.updateForm('tagsText', event.detail.value);
  },

  updateForm(field, value) {
    this.setData({
      [`form.${field}`]: value,
    });
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: ({ tempFiles }) => {
        if (tempFiles && tempFiles.length) {
          this.updateForm('cover', tempFiles[0].tempFilePath);
        }
      },
    });
  },

  chooseLocation() {
    wx.chooseLocation({
      success: ({ name, address, latitude, longitude }) => {
        this.setData({
          'form.address': name || address,
          'form.latitude': Number(latitude.toFixed(5)),
          'form.longitude': Number(longitude.toFixed(5)),
        });
      },
    });
  },

  submitLocation() {
    const { form } = this.data;
    const tags = form.tagsText
      .split(/[，,]/)
      .map((item) => item.trim())
      .filter(Boolean);

    if (!form.name || !form.cover || !form.address || tags.length === 0) {
      wx.showToast({
        title: '请补全名称、标签、位置和图片',
        icon: 'none',
      });
      return;
    }

    saveLocation({
      id: `user-${Date.now()}`,
      name: form.name,
      address: form.address,
      latitude: form.latitude,
      longitude: form.longitude,
      cover: form.cover,
      tags,
      description: '用户发布地点，等待更多狗狗家长来补充体验。',
      comments: [
        {
          id: `comment-${Date.now()}`,
          user: '新发布用户',
          content: '我先来打卡，欢迎更多人补充遛狗体验。',
          time: new Date().toISOString().slice(0, 10),
        },
      ],
    });

    wx.showToast({
      title: '已保存到本地',
      icon: 'success',
    });

    this.setData({
      form: {
        name: '',
        tagsText: '',
        cover: '',
        address: '',
        latitude: 29.56301,
        longitude: 106.55156,
      },
    });

    setTimeout(() => {
      wx.switchTab({
        url: '/pages/index/index',
      });
    }, 400);
  },
});
