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
2. loadScipts方法
函数内部调用的是window.loader的挂载函数，接下来要载入的js文件打包为一个数组对其传参，接下来class,format,platform的init,translation,template的init,web_views,app_manager这些js文件在页面载入成功，其中有两个由方法返回的js：platform和template的init.js文件
3. initTranslation
translation.js载入成功之后，里面的window.Translation.init可调用，接下来就是一系列嵌套调用。
