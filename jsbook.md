# 扎卡斯JavaScript
## 第8章 BOM 20170510
- 全局变量不能通过delete操作符删除，而直接在window对象上的定义的属性可以。
- 太好了，太完美了。写到这里，我在sublime上安装了一个markdown插件叫做OmniMarkupPreviewer，来预览效果，惊喜的发现它居然是在浏览器中实时预览的，预览快捷键是ctrl+alt+o。
```javascript
var age = 29;
window.color = 'red';
delete window.age;//删不掉
delete window.color;//可以删掉
```
- 在这第八章的前面部分，扎卡斯讲述了一些对浏览器窗口在屏幕中的位置操作，但是浏览器一般都会对主窗口禁用这些方法。如果是open出来的小窗口，那么这种情况下，例如resizeTo和moveTo、close这样的方法是可以奏效的。
## 第6章 面向对象
- 构造函数模式，没有return语句，直接将属性和方法赋给this对象。