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

## BOM部分
```
alert(window.location);     //获取当前的URL
alert(location);		     //window可以省略
location.hash = ‘#1’;	//设置#后的字符串，并跳转
console.log(location.hash);	  //获取#后的字符串

console.log(location.port);	 //获取当前端口号

console.log(location.hostname);   //获取主机名(域名)

console.log(location.pathname);   //获取当前路径(服务器地址后部分)

console.log(location.search);   //获取?后面的字符串

location.href = “http://www.baidu.com”;   //设置跳转的URL，并跳转
以上是location对象属性，下面是location对象方法
location.assign(‘http://www.baidu.com’);	//跳转到指定的URL，和href那个作用一样
location.reload();            //最有效的重新加载,有缓存加载
location.reload(true);	//强制加载,从服务器源头重新加载
location.replace(“http://www.baidu.com”);  //可以避免产生历史记录




【navigator对象】
       navigator对象是window对象的属性，它保存了浏览器的信息, 如: 浏览器名称,版本,浏览器所在的电脑操作系统等。
属性
console.log(navigator.userAgent);//用户代理信息, 通过该属性可以获取浏览器及操作系统信息
```

## DOM部分
```
节点的种类
<div title="属性节点">测试Div</div>
<div></div>:  元素节点
title="属性节点":  属性节点
测试Div :  文本节点

元素节点对象, 拥有以下两个常用的节点属性
tagName: 元素节点对象所指向的标签名称
innerHTML: 元素节点中的内容
box.tagName;  
box.innerHTML;  

document.getElementById('box').id;    //获取 id document.getElementById('box').id='person';   //设置 id
document.getElementById('box').title;     //获取 title document.getElementById('box').title='标题';    //设置 title
document.getElementById('box').style;   //获取 CSSStyleDeclaration 对象 document.getElementById('box').style.color;    //获取 style 对象中 color 的值 document.getElementById('box').style.color='red';  //设置 style 对象中 color 的值
document.getElementById('box').className;   //获取 class document.getElementById('box').className='box';   //设置 class
console.log(document.getElementById('box').bbb);   //获取自定义属性的值,不支持

 getAttribute()方法将获取元素中某个属性的值。它和直接使用点语法(.属性)获取属性值的方法有一定区别。
document.getElementById('box').getAttribute('id');  //获取元素的 id 值 document.getElementById('box').id;  //获取元素的 id 值(点语法)

//获取元素的自定义属性值(不可以使用点语法)
document.getElementById('box').getAttribute(bbb);  document.getElementById('box').bbb; //无法获取元素的自定义属性值
document.getElementById('box').getAttribute('class');//获取元素的class值
document.getElementById('box').className'; //获取元素的class值(点语法)


setAttribute()方法将设置元素中某个属性和值。它需要接受两个参数：属性名和值。如果属性本身已存在，那么就会被覆盖。
//设置属性和值 document.getElementById('box').setAttribute('align','center');
//设置自定义的属性和值document.getElementById('box').setAttribute('bbb','ccc');

removeAttribute() 可以移除 HTML 属性。
//移除属性
 document.getElementById('box').removeAttribute('style'); 

DOM节点可以分为元素节点、属性节点和文本节点，而这些节点又有三个非常有用的属性， 分别为：nodeName、nodeType 和 nodeValue。元素，属性，文本的nodeType分别为1,2,3
document.getElementById('box').nodeType;  //1，元素节点

childNodes: 某一个元素节点的所有子节点，这些子节点包含元素子节点 和文本子节点。

var box = document.getElementById(‘box'); //获取一个元素节点
alert(box.childNodes.length); //获取这个元素节点的所有子节点
alert(box.childNodes[0]); //获取第一个子节点对象

使用 childNodes[n]返回子节点对象的时候，有可能返回的是元素子节点，比如 HTMLElement；也有可能返回的是文本子节点，比如 Text。元素子节点可以使用 nodeName 或者 tagName 获取标签名称，而文本子节点可以使用 nodeValue 获取值。

for (var i=0; i<oDiv.childNodes.length; i++) {
	if (oDiv.childNodes[i].nodeType == 1) {
		//元素节点
		console.log("元素节点: " + oDiv.childNodes[i].nodeName);
	}
	else if (oDiv.childNodes[i].nodeType == 3) {
		//文本节点
		console.log("文本节点: " + oDiv.childNodes[i].nodeValue);
	}
}


innerHTML和nodeValue的区别
1, innerHTML 和 nodeValue 第一个区别，就是取值;
nodeValue可以获取文本节点的内容和属性节点的值。
innerHTML只能获取元素节点中的内容。 

2, innerHTML 和 nodeValue 第二个区别: 赋值;
nodeValue 会把包含在文本里的HTML标签按原样输出。
innerHTML 可以解析内部的HTML标签

box.childNodes[0].nodeValue='<strong>abc</strong>';
//结果为：<strong>abc</strong> 
box.innerHTML='<strong>abc</strong>'; 
//结果为：abc 加粗




attributes属性: 返回该元素节点的属性节点集合。
 
box.attributes //[object NamedNodeMap]
box.attributes.length; //返回属性节点个数 
box.attributes[0]; //[object Attr], 返回第一个属性节点 

box.attributes[0].nodeType; //2，节点类型 
box.attributes[0].nodeName; //属性名称 
box.attributes[0].nodeValue; //属性值 

box.attributes['id']; //返回属性名称为id的节点
box.attributes.getNamedItem('id'); //返回属性名称为id的节点


parentNode 属性返回该节点的父节点，
previousSibling 属性返回该节点的前一个同级节点，
nextSibling 属性返回该节点的后一个同级节点。 





appendChild()方法将一个新节点添加到某个节点的子节点列表的末尾上。 

//获取某一个元素节点 
var box=document.getElementById('box'); 
//创建一个新元素节点<p> 
var p=document.createElement('p'); 
//把新元素节点<p>添加box节点的子节点末尾
box.appendChild(p); 



createTextNode() 方法创建一个文本节点。 

//创建一个文本节点
var text =document.createTextNode('段落');  
//将文本节点添加到子节点末尾
p.appendChild(text); 


insertBefore()方法可以把节点插入到指定节点的前面。 

//通过父节点调用, 在box之前插入一个节点p;
box.parentNode.insertBefore(p, box); 


replaceChild()方法可以把节点替换成指定的节点。 

//通过父节点调用, p替换了div
box.parentNode.replaceChild(p, div); 


cloneNode()方法可以把子节点复制出来。 

var box=document.getElementById('box');
//获取第一个子节点，   true表示复制标签和内容 , false表示只复制标签
var clone=box.firstChild.cloneNode(true); 
//添加到子节点列表末尾
box.appendChild(clone); 




removeChild()方法可以删除指定子节点

//通过父节点调用, 来删除指定子节点
box.parentNode.removeChild(box); 



键盘事件
(一般由window对象或者document对象调用)

keydown：当用户按下键盘上某个键触发，如果按住不放，会重复触发。
window.onkeydown = function() {
        console.log(按下了键盘上的某个键); 
};
keypress：当用户按下键盘上的字符键触发，如果按住不放，会重复触发
window.onkeypress = function() { 
        console.log('按下了键盘上的字符键'); 
};
keyup：当用户释放键盘上的某个键触发。
window.onkeyup = function() {
        console.log(松开键盘上的某个键); 
};


HTML事件
select：当用户选择文本框(input 或 textarea)中的内容触发。 
input.onselect = function() { 
        console.log('选择了文本框中的内容'); 
};
change：当文本框(input 或 textarea)内容改变且失去焦点后触发。 
input.onchange = function() { 
        console.log('文本框中内容改变了'); 
};
focus：当页面或者元素获得焦点时触发。 
input.onfocus = function() { 
        console.log('文本框获得焦点'); 
};
blur：当页面或元素失去焦点时触发。
input.onblur = function() { 
        console.log('文本框失去焦点'); 
};
submit：当用户点击提交按钮在<form>元素节点上触发。 form.onsubmit = function() { 
        console.log('提交form表单'); 
};

reset：当用户点击重置按钮在<form>元素节点上触发。 
form.onreset = function() { 
        console.log('重置form表单'); 
};

scroll：当用户滚动带滚动条的元素时触发。
window.onscroll= function() { 
        console.log('滚动了滚动条了'); 
};



this关键字
在JS事件中, this表示触发事件的元素节点对象;

var box = document.getElementById('box'); 
box.onclick = function() { 
      console.log(this.nodeName);  //this表示box对象 
};

通过for循环添加事件, 使用this
var aInput = document.getElementsByTagName('input');
for (var i=0; i<aInput.length; i++) { 
        aInput[i].onclick = function() { 
                console.log(this.value);  
	   //这里的this表示被点击的那个input元素节点对象 
        };
}


event对象(事件对象)是在触发事件时, 浏览器会通过函数把事件对象作为参数传递过来, 在事件触发执行函数时一般会得到一个隐藏的参数, 该参数也是放在arguments数组中.

//普通函数 
function func() { 
    console.log(arguments.length); //1，得到传递的参数 
}
func(“hello”);

//事件绑定的执行函数 
box.onclick = function(){ 
     console.log(arguments.length); //1，得到一个隐藏参数 
};
【注】通过上面两组函数中，我们发现，通过事件绑定的执行函数是可以得到一个隐藏参数的。 说明，浏览器会自动分配一个参数，这个隐藏参数其实就是event对象(事件对象)。 
//arguments[0] 
box.onclick = function() { 
     //获得该事件对象([object MouseEvent])
     console.log(arguments[0]); 
};

我们还可以使用更简单的获取事件对象的方式: 通过给函数添加一个参数
//接受事件对象，名称不一定非要evt(这里的evt是形参,也可以自己给定其他名称)
box.onclick = function(evt){ 
     console.log(evt);   //[object MouseEvent]
};
通过事件的执行函数传入的event对象(事件对象) 不是在所有浏览器都有值,  在IE浏览器上event对象并没有传过来, 这里我们要用window.event来获取, 而在火狐浏览器上window.event无法获取, 而谷歌浏览器支持event事件传参和window.event两种, 为了兼容所有浏览器, 我们使用以下方式来得到event事件对象

box.onclick = function(evt){ 
     if (evt) {
          alert("evt: " + evt);
     }
     else {
          alert("window.event: " + window.event);
     }
};
这里我们还有更简单的获取方式
box.onclick = function(evt){ 
     var oEvent = evt || window.event; //获取到event对象(事件对象)
     alert(oEvent);
};

其中window.event中的window可以省略, 最终我们可以写成: 
box.onclick = function(evt){ 
     var oEvent  = evt || event; //获取到event对象(事件对象)
     alert(oEvent);
};



事件监听器：
      事件监听器, 是JS事件中的一种事件触发机制, 我们可以通过添加事件监听器的方式给元素添加事件及执行函数

1, 添加事件监听器
   box.addEventListener("click", func, false) : 给box元素添加点击事件(click), 以及事件执行函数func
   针对该函数的三个参数作说明:
      第一个参数(“click”) : 事件名称(前面没有on)
      第二个参数(func): 事件执行函数名称(没有双引号, 也没有())
      第三个参数(false/true) : 是否使用捕捉(反向冒泡)，默认false，为冒泡
注: IE8及其以下不支持，火狐和谷歌支持。
2, 移除事件监听器
   box.removeEventListener("click", func) : 将box元素的点击事件(click), 以及对应的事件执行函数func移除

注: 这里只会删除使用box.addEventListener()方法添加的事件监听器

一般我们只在指定的节点上添加事件, 而不想让其传递到下层节点触发事件, 这样我们就需要阻止冒泡;

阻止冒泡的方式有两种: 
( 在指定不想再继续传递事件的节点的事件执行函数中使用)
//1, 取消冒泡
     oEvent.cancelBubble = true;
//2, 停止传播
     oEvent.stopPropagation();


document.getElementsByTagName('input')[0].onclick= function(){
     var oEvent = evt || window.event;
     //可以通过下述两种方式取消事件冒泡
     oEvent.cancelBubble = true; //1, 取消冒泡
     oEvent.stopPropagation(); //2, 停止传播
};



阻止右键菜单
在之前使用event对象的button属性时, 点击鼠标右键会弹出系统菜单, 如果我们想要创建自己的右键菜单, 则需要先阻止默认的右键菜单

document.oncontextmenu = function(){
	alert("右键被按下");
	return false;
}
```




