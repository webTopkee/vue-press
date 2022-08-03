## 父子组件通信    
### 父传子
子组件通过`this.props`来获取父级传递过来的数据
```js
class Demo extends React.Component {
  render() {
    let describe = "这是一段描述";
    return <Demo2 title="这是一个标题" describe={describe} />;
  }
}
```
Demo2.js
```js
class Demo2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
        <p>{this.props.describe}</p>
      </div>
    );
  }
}
```
### 子传父
子组件通过执行`this.props.clickMsg`方法,父组件接收了这个方法来拿到子组件传递过来的值
```js
class Demo extends React.Component {
  state = {
    msg: "父组件",
  };
  handleMsg = (data) => {
    this.setState({
      msg: data,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <Demo2 clickMsg={this.handleMsg} />
      </div>
    );
  }
}
```
Demo2.js
```js
class Demo2 extends React.Component {
  handleBtn = () => {
    this.props.clickMsg("改变父组件");
  };
  render() {
    return <button onClick={this.handleBtn}>改变父组件msg</button>;
  }
}
```
### 多层组件通信
当有多层组件嵌套时，父组件要传递给孙组件，如果一层层通过`props`明显有些麻烦。所以我们可能通过`React.createContext()`来实现多层传值
```js
const { Provider, Consumer } = React.createContext();
```
父组件   
```js
export const { Provider, Consumer } = React.createContext();

class Demo extends React.Component {
  state = {
    msg: "父组件",
  };
  render() {
    return (
      <div>
        <Provider value={this.state.msg}>
          <Demo2 />
        </Provider>
      </div>
    );
  }
}
```
孙组件
```js
import { Consumer } from "./Demo";

class Demo2 extends React.Component {
  render() {
    return <Consumer>{(data) => <div>通过Consume获取{data}</div>}</Consumer>;
  }
}
```