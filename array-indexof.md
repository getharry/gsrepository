# 数组居然也有indexOf方法

对于字符串有这个方法大家再熟悉不过了，却忽略了数组居然也有。
```javascript
let arr = ['orange', '2016', '2016'];
 
arr.indexOf('orange'); //0
arr.indexOf('o'); //-1
 
arr.indexOf('2016'); //1
arr.indexOf(2016); //-1
```