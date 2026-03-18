# 狗狗地图小程序 MVP

一个偏小红书风格的原生微信小程序 MVP，核心页面为地图页，支持查看重庆狗狗友好地点、查看详情、发布地点并本地存储。

## 项目目录

```text
little-peeeets-house/
├── app.js
├── app.json
├── app.wxss
├── project.config.json
├── sitemap.json
├── data/
│   └── locations.json
├── utils/
│   └── location-store.js
└── pages/
    ├── index/
    │   ├── index.js
    │   ├── index.json
    │   ├── index.wxml
    │   └── index.wxss
    ├── detail/
    │   ├── detail.js
    │   ├── detail.json
    │   ├── detail.wxml
    │   └── detail.wxss
    └── publish/
        ├── publish.js
        ├── publish.json
        ├── publish.wxml
        └── publish.wxss
```

## 功能说明

- 首页地图：展示用户当前位置、重庆本地 JSON 点位、点击 marker 进入详情。
- 地点详情：展示名称、图片、标签、简介和前端模拟评论。
- 发布地点：提交名称、标签、位置、图片并保存到本地缓存。

## 使用方式

1. 使用微信开发者工具导入项目根目录。
2. AppID 可先使用测试号 `touristappid` 进行本地调试。
3. 首次打开建议在开发者工具中允许地理位置与相册/相机能力。
