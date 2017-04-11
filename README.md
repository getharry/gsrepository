# gsrepository
主要以放一些js的demo

## jsx ReactDOM.render
接受两个参数：一个虚拟DOM节点和一个真实DOM节点，作用是将虚拟DOM挂载到真实DOM

```javascript
ReactDOM.render(
  <span>Hello World!</span>,
  document.getElementById('example')
);
```

## React 的优点
- 组件模式：代码复用和团队分工
- 虚拟DOM：性能优势
- 移动端支持：跨终端
- React非常先进和强大，但是只有采用它的整个技术栈，才能发挥最大威力

---

![](./images/react-logo.png)

## 目前任务
1. React的实例
1. 记录solidui的源码问题
1. 入门高级JavaScript

## SolidUI源码细节
- 发现声明中new作用于函数，就会执行
```javascript
	 var app = new function(){
	 	console.log('running...');
	 }
	 window.app = app;
```

```javascript
	window.app = new function(){
		this.init = new function(){
			console.log('being');
		};
		//上面如果不是new，则不会执行啊
		console.log('appbeing');
	};
	// app.init();
```




