# SolidUI2架构分析
## 主文件载入顺序
jQuery-underscore-setting-loader-app
## 顶级属性和方法
- window.settings
- window.Loader(调用)
- window.app
## app.js
1. init函数
```javascript
$(intit);//DOM加载完成后执行init函数
```
- getParameters返回url后缀信息为一个对象{template:"hkc",platform:"pc"},然后对setting属性进行覆盖。
- 调用loadScripts和adjustMonitor
1. loadScipts函数
函数内部调用的是window.loader的挂载函数
