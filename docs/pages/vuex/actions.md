## 管理 actions

在 状态树的结构 提到了， Pinia 只需要用 actions 就可以解决各种数据操作，无需像 Vuex 一样区分为 mutations / actions 两大类。

## Store 添加 action

你可以为当前 Store 封装一些可以开箱即用的方法，支持同步和异步。

```js
// src/stores/index.ts
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    message: "Hello World",
  }),
  actions: {
    // 异步更新 message
    async updateMessage(newMessage: string): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          // 这里的 this 是当前的 Store 实例
          this.message = newMessage;
          resolve("Async done.");
        }, 3000);
      });
    },
    // 同步更新 message
    updateMessageSync(newMessage: string): string {
      // 这里的 this 是当前的 Store 实例
      this.message = newMessage;
      return "Sync done.";
    },
  },
});
```

可以看到，在 action 里，如果要访问当前实例的 state 或者 getter ，只需要通过 this 即可操作，方法的入参完全不再受 Vuex 那样有固定形式的困扰。

::: tip
在 action 里， this 是当前的 Store 实例，所以如果你的 action 方法里有其他函数也要调用实例，请记得写成 箭头函数 来提升 this 。
:::

## 调用 action

像普通的函数一样使用即可，不需要和 Vuex 一样执行 commit 或者 dispatch，在 Pinia ，不需要，不需要。

```js
export default defineComponent({
  setup() {
    const store = useStore();
    const { message } = storeToRefs(store);

    // 立即执行
    console.log(store.updateMessageSync("New message by sync."));

    // 3s 后执行
    store
      .updateMessage("New message by async.")
      .then((res) => console.log(res));

    return {
      message,
    };
  },
});
```
