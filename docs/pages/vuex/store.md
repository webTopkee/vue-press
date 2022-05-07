## 创建 Store

接收两个参数，第一个参数是 `Store` 的唯一 ID ，第二个参数是 Store 的选项：

```js
// src/stores/index.ts
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  // Store 选项...
});
```

## 给 Store 添加 state

`state` 就相当于 vue 中的 data 数据，提供数据存储的地方。

```js
// src/stores/index.ts
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  // 我们先定义一个最基本的 message 数据
  state: () => ({
    message: "Hello World",
    // 通过 as 关键字指定 TS 类型
    randomMessages: [] as string[],
    // 通过尖括号指定 TS 类型
    randomMessages: <string[]>[],
  }),
  // ...
});
```

## 获取和更新 state

直接通过 store.message 直接调用 state 里的数据。

```js
import { defineComponent } from "vue";
import { useStore } from "@/stores";

export default defineComponent({
  setup() {
    // 像 useRouter 那样定义一个变量拿到实例
    const store = useStore();

    // 直接通过实例来获取数据
    console.log(store.message);

    // 这种方式你需要把整个 store 给到 template 去渲染数据
    return {
      store,
    };
  },
});
```

在数据更新方面，在 `Pinia` 可以直接通过 Store 实例更新 state （这一点与 Vuex 有明显的不同，更改 Vuex 的 store 中的状态的唯一方法是提交 mutation），所以如果你要更新 message ，只需要像下面这样，就可以更新 message 的值了！

```js
store.message = "New Message.";
```
