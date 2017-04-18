# JS课件常用方法
## 数组方法
```
push()方法可以接收任意数量的参数，把它们逐个添加到数组的末尾，并返回修改后数组的长度。
pop()方法则从数组末尾移除最后一个元素，减少数组的 length 值，然后返回移除的元素。
shift() 方法从数组前端移除一个元素,
unshift() 方法从数组前端添加一个或多个元素。
reverse()        // 逆向排序, 原数组也被逆向排序了
sort()     //从小到大排序 ,  原数组也被升序排序了
可以给sort方法传递函数参数：

//如果一定要使用sort()进行排序, 可以传递一个函数
function compare (value1, value2) {
	if (value1 < value2) {
		return -1;  //返回0和-1, 表示不交换值
	}
	else if (value1 == value2) {
		return 0;
	}
	else {
	   	return 1;   //返回1, 表示会交换值
	}
}
var box = [0, 1, 10, 5, 15];
var aseBox = box.sort(compare);   //返回升序的数组

concat() : 追加数据, 创建一个新数组, 不改变原数组
	var box = [2, 3, 4, '绿箭侠', '黑寡妇'];
	var box2 = box.concat('美队', '雷神');
slice():  不修改原数组, 将原数组中的指定区域数据提取出来
var box = [2, 3, 4, "绿巨人"];
var box2 = box.slice(1, 3); //并没有修改原数组,将原数组中的元素提取出来,生成新数组, 取的是下标在区域: [1,3)
splice(): 截取原数组中指定的数据, 会改变原数组
    var box = [2, 3, 4, '绿箭侠', '黑寡妇'];
	var box2 = box.splice(2, 1);   //第一个参数代表我要开始截取的下标位置, 第二个参数截取的长度, 如果只有两个参数, 则表示删除操作
    alert(box);     //[2, 3, '绿箭侠', '黑寡妇'];
	alert(box2);  //4
splice(): 截取原数组中指定的数据, 会改变原数组
插入: 如果有3个或以上参数,且第二个参数(长度)为0,则表示插入
	box.splice(1, 0, "绿巨人", "冬兵"); 
        //在下标为1的位置插入: "绿巨人","冬兵"

替换: 如果有3个或以上的参数, 且第二个参数(长度)不为0, 则表示替换
	box.splice(1, 1, "绿巨人", "冬兵"); 
        //在下标为1的位置替换成: "绿巨人","冬兵"
	
删除: 如果只有两个参数, 则表示删除指定区域的数据
	box.splice(0, 2);  //删除原数组的部分数据, 并返回截取的数据
用数组的元素组成字符串 - box.join() 
```

## 字符串方法
```
str.charAt(3)    //获取下标为3的字符
str.concat()  连接字符串
	var str1 = "hello";
	var str2 = str1.concat(" world");

字符串的查找方法
 str.indexOf("abc")  查找字符串第一次出现的位置,
如果没找到则返回-1
	var str = "abcdabcd";
	var subStr = "bcd";
	var index = str.indexOf(subStr); 

 str.lastIndexOf("abc")  查找字符串最后一次出现的位置, 
如果没找到则返回-1
	var index = str.lastIndexOf(“abc”);

str.search() 正则匹配 (返回第一次出现的位置)
var str = "Abcdabcd";
var index = str.search(/abc/gi);
	注: g表示进行全局匹配，i表示匹配的时候忽略大小写

 str.replace() 替换字符串
       var str = "how are Are are you!";
	var newStr = str.replace("are", "old are");
这里的替换只能执行一次，不能够进行全局匹配，如果需要全局匹配，则应使用正则表达式： str.replace(/are/gi, "old are")

substring(start,end); //截取字符串 范围是[start, end)
split(separator, howmany)—根据分隔符、拆分成数组
	separator(字符串或正则表达式)
	howmany(可以指定返回的数组的最大长度, 可以省略)
【注】如果空字符串(“”)用作separator,那么stringObject中的每个字符之间都会被分割。

toLowerCase() 方法用于把字符串转换成小写
toUpperCase() 方法用于把字符串转换成大写
```