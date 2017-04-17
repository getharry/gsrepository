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

## React细节初记(20170417)
- 凡是使用 JSX 的地方，都要加上 type="text/babel"
- Browser.js 的作用是将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成
- 声明组件类的方法React.createClass({})，组件类变量的首字母必须大写，否则报错。更重要的是，组件类只能包含一个顶层标签，否则也会报错。
```
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});
//组件的属性可以在组件类的 this.props 对象上获取
//添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。
ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```
- 提到了一个this.props.children不知道具体做什么用
- 组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
- getDefaultProps 方法可以用来设置组件属性的默认值
#### 获取真实的DOM节点
- 思想：组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。
- 从组件获取真实 DOM 的节点，这时就要用到 ref 属性。举个栗子，组件的子节点有一个文本输入框来获取用户输入，虚拟dom是拿不到输入的，就必须给输入框一个ref属性，而且必须等到虚拟dom插入文档之后才能使用这个属性。然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。下面是自己综合ref和state修改的栗子。
```js
    <script type="text/babel">
		var MyComponent = React.createClass({
		  getInitialState: function() {
		    return {val: 'harbin'};
		  },
		  handleClick: function () {
		    this.setState({val: this.refs.myTextInput.value});
		  },

		  render: function() {
		    return (
		      <div>
		        <input type="text" ref="myTextInput" />
		        <input type="button" value= {this.state.val} onClick={this.handleClick} />
		      </div>
		    );
		  }
		});

		ReactDOM.render(
		  <MyComponent />,
		  document.getElementById('example')
		);
    </script>
```
当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。
```js
var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

ReactDOM.render(<Input/>, document.body);
```
#### 组件的生命周期
- 组件的声明周期分为三个状态：
-- Mounting
-- Updating
-- Unmounting


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
- 引入的js脚本一般用一个立即执行的匿名函数包裹，在里面声明的东西挂到window上面是非常必要的，这样才能全局调用
```javascript
(function(){
	"use strict";
	var loadPage = function( target ){
		return function(){
			window.location.assign( target );
		};
	};
	window.loadPage = loadPage;
})();
```




