## getters 作用

Pinia 的 `getters` 是用来计算数据的。

## 定义 getters

```js
// src/stores/index.ts
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    message: "Hello World",
  }),
  // 定义一个 fullMessage 的计算数据
  getters: {
    fullMessage: (state) => `The message is "${state.message}".`,
  },
  // ...
});
```

通过函数来返回计算后的值，但在 Pinia ，只能使用箭头函数，通过入参的 `state` 来拿到当前实例的数据。

### 调用

```js
const store = useSiteStore();
console.log(store.fullMessage); //The message is "hello world".
```

## 给 getter 传递参数

```js
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    message: "Hello World",
  }),
  getters: {
    // 定义一个接收入参的函数作为返回值
    signedMessage: (state) => {
      return (name: string) =>
        `${name} say: "The message is ${state.message}".`;
    },
  },
});
```

### 调用

```js
const store = useSiteStore();
console.log(store.signedMessage("weber")); // weber The message is "hello world".
```

## 获取和更新 getter

`getter` 和 state 都属于数据管理，读取和赋值的方法是一样的，请参考上方 获取和更新 state 一节的内容。
