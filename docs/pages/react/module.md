## 生命周期
```js
class Demo extends React.Component {
  // 挂载
  componentDidMount() {
    console.log("componentDidMount");
  }
  //卸载
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return <div>Demo</div>;
  }
}
//render
//componentDidMount
//componentWillUnmount
```
## 插槽
### 匿名插槽
```js
class Layout extends React.Component {
  render() {
    return (
      <Home isTopBar={true} isBottonBar={true}>
        <div>中间内容区域</div>
      </Home>
    );
  }
}
```
Home.js
```js
class Home extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
```
### 具名插槽
第一种方式    
```js
class Layout extends React.Component {
  render() {
    return (
      <Home isTopBar={true} isBottonBar={true}>
        {{
          def: (
            <>
              <h1>组件复合</h1>
              <p className="p">
                复合组件给与你足够的敏捷去定义自定义组件的外观和行为
              </p>
            </>
          ),
          footer: <button>确定</button>,
        }}
      </Home>
    );
  }
}
```
Home.js
```js
class Home extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        {this.props.children.def}
        {this.props.children.footer}
      </div>
    );
  }
}

```
第二种方式
```js
render() {
    return (
      <div>
        <Demo2 title="标题">
          <div page="head">头部</div>
          <div page="content">内容</div>
          <div page="foot">尾部</div>
        </Demo2>
      </div>
    );
  }
```
```js
class Demo2 extends React.Component {
  render() {
    return <div>{this.props.children[2]}</div>; // 尾部
  }
}
```
