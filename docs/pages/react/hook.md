# 基础 Hook

## useState

`useState`这个函数接收的参数是状态的初始值(Initial state)，它返回一个数组，这个数组的第 0 位是当前的状态值，第 1 位是可以改变状态值的方法函数。

```js
// 定义
const [name, setName] = useState("weber");
```

```html
<!-- 取值 -->
<div>hello {name}</div>
```

```js
//改变
setName("world");
```

## useEffect

`useEffect`用来代替常用生命周期函数。  
首次渲染和之后的每次渲染都会调用一遍`useEffect`函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。

```js
const [count, setCount] = useState(0);
useEffect(() => {
  console.log("渲染和更新执行");
});

useEffect(() => {
  console.log("无监听,首次渲染和更新执行");
}, []);

useEffect(() => {
  console.log("监听count值的变化");
}, [count]);

return (
  <div>
    {count}
    <button onClick={() => setCount(count + 1)}>增加</button>
  </div>
);
```

在组件中经常用到 componentWillUnmount 生命周期函数（组件将要被卸载时执行）。

```js
useEffect(() => {
  console.log("渲染和更新执行");
  return () => {
    console.log("渲染和更新都执行解绑");
  };
});

useEffect(() => {
  console.log("无监听,首次渲染和更新执行");
  return () => {
    console.log("只在页面销毁时解绑");
  };
}, []);

useEffect(() => {
  console.log("监听count值的变化");
  return () => {
    console.log("监听count值的变化后解绑");
  };
}, [count]);
```

## useContext

多层组件传值,A>B>C 当 C 组件要获取 A 组件值时，不需要通过 props 一层层往下传，只需要通过`createContext`定义一个值，在 C 组件中通过`useContext`接收

```js
// A 组件提供
export const nameContext = createContext("");

<nameContext.Provider value="weber">
  <B />
</nameContext.Provider>;
```

```js
// C 组件接收
import { nameContext } from "./A";

const name = useContext(nameContext);
{
  name;
}
// 或
// <nameContext.Consumer>{(name) => <p>{name}</p>}</nameContext.Consumer>;
```

## useReducer

```js
const [num, setNum] = useState(0);
const [count, dispatch] = useReducer((state, action) => {
  console.log(state);
  console.log(action);
  switch (action) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
}, 8);
return (
  <div>
    {count}
    <button
      onClick={() => {
        dispatch("add");
      }}
    >
      add
    </button>
    <button
      onClick={() => {
        dispatch("sub");
      }}
    >
      sub
    </button>
  </div>
);
```

## useRef

可以在 useRef 中设置或获取值，但改变值时不会触发组件的重新渲染

```js
// 设置
const hasClickedButton = useRef(false);
// 更新
hasClickedButton.current = true;
// 取值
hasClickedButton.current;
```

通过 useRef 实现组件钩子函数只执行一次

```js
const isFirstRender = useRef(true);
useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
  }
});
```

上面例子可以用`useCallback`来改写,第二个参数可以用来监听参数变化后执行

```js
const ref = useCallback((node) => {
  console.log("只执行一次");
}, []);
```

获取元素 DOM

```JS
const ref = useRef();

<div ref={ref}>这是一个块级元素</div>

//这是一个块级元素
coonsole.log(ref.current.innerHTML)
```
