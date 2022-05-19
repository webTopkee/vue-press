## 创建 Store

Store 是通过 `defineStore` 方法来创建的，它有两种入参形式：

### 形式 1 ：接收两个参数

接收两个参数，第一个参数是 `Store` 的唯一 ID ，第二个参数是 Store 的选项：

```js
// src/stores/index.ts
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  // Store 选项...
});
```

### 形式 2 ：接收一个参数

接收一个参数，直接传入 Store 的选项，但是需要把唯一 ID 作为选项的一部分一起传入：

```js
// src/stores/index.ts
import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  // Store 选项...
});
```

::: tip
不论是哪种创建形式，都必须为 Store 指定一个唯一 ID
:::

另外可以看到我把导出的函数名命名为 useStore ，以 use 开头是 Vue 3 对可组合函数的一个命名规范。
