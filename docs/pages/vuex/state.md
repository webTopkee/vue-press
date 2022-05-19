## 给 Store 添加 state

`state` 就相当于 vue 中的 data 数据，提供数据存储的地方。

```js
// src/stores/index.ts
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  // 我们先定义一个最基本的 message 数据
  state: () => ({
    message: "Hello World",
    arr: [1, 2, 3],
  }),
  // ...
});
```

## 获取和更新 state

### 使用 store 实例

用法上和 Vuex 很相似，但有一点区别是，数据直接是挂在 store 上的，而不是 store.state 上面！

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

### 使用 computed API

现在 state 里已经有我们定义好的数据了，下面这段代码是在 Vue 组件里导入我们的 Store ，并通过计算数据 `computed` 拿到里面的 `message` 数据传给 template 使用。

```js
import { computed, defineComponent } from "vue";
import { useStore } from "@/stores";

export default defineComponent({
  setup() {
    // 像 useRouter 那样定义一个变量拿到实例
    const store = useStore();

    // 通过计算拿到里面的数据
    const message = computed(() => store.message);
    console.log("message", message.value);

    // 传给 template 使用
    return {
      message,
    };
  },
});
```

上面例子中通过`computed`拿到`message`只是只读，没办法修改，如果要修改可以配置`computed`中的`set`方法进入修改。

```js
// 其他代码和上一个例子一样，这里省略...

// 修改：定义 computed 变量的时候配置 getter 和 setter
const message = computed({
  // getter 还是返回数据的值
  get: () => store.message,
  // 配置 setter 来定义赋值后的行为
  set(newVal) {
    store.message = newVal;
  },
});

// 此时不再抛出 Write operation failed: computed value is readonly 的警告
message.value = "New Message.";

// store 上的数据已成功变成了 New Message.
console.log(store.message);
```

### 使用 storeTorRefs API

Pinia 还提供了一个 storeToRefs API 用于把 state 的数据转换为 ref 变量。

这是一个专门为 Pinia Stores 设计的 API ，类似于 toRefs ，区别在于，它会忽略掉 Store 上面的方法和非响应性的数据，只返回 state 上的响应性数据。

```js
import { defineComponent } from "vue";
import { useStore } from "@/stores";

// 记得导入这个 API
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const store = useStore();

    // 通过 storeToRefs 来拿到响应性的 message
    const { message } = storeToRefs(store);
    console.log("message", message.value);

    return {
      message,
    };
  },
});
```

通过这个方式拿到的 message 变量是一个 Ref 类型的数据，所以你可以像普通的 ref 变量一样进行读取和赋值。

```js
// 直接赋值即可
message.value = "New Message.";

// store 上的数据已成功变成了 New Message.
console.log(store.message);
```

### 使用 toRefs API

如 使用 storeToRefs API 部分所说，该 API 本身的设计就是类似于 toRefs ，所以你也可以直接用 toRefs 把 state 上的数据转成 ref 变量。

```js
// 注意 toRefs 是 vue 的 API ，不是 Pinia
import { defineComponent, toRefs } from "vue";
import { useStore } from "@/stores";

export default defineComponent({
  setup() {
    const store = useStore();

    // 跟 storeToRefs 操作都一样，只不过用 Vue 的这个 API 来处理
    const { message } = toRefs(store);
    console.log("message", message.value);

    return {
      message,
    };
  },
});
```

可以像普通的 ref 变量一样进行读取和赋值。

另外，像上面这样，对 store 执行 toRefs 会把 store 上面的 getters 、 actions 也一起提取，如果你只需要提取 state 上的数据，可以这样做：

```js
// 只传入 store.$state
const { message } = toRefs(store.$state);
```

### 使用 toRef API

toRef 是 toRefs 的兄弟 API ，一个是只转换一个字段，一个是转换所有字段，所以它也可以用来转换 state 数据变成 ref 变量。

```js
// 注意 toRef 是 vue 的 API ，不是 Pinia
import { defineComponent, toRef } from "vue";
import { useStore } from "@/stores";

export default defineComponent({
  setup() {
    const store = useStore();

    // 遵循 toRef 的用法即可
    const message = toRef(store, "message");
    console.log("message", message.value);

    return {
      message,
    };
  },
});
```

## 批量更新 state

Pinia 也提供了一个 `$patch` API 用于同时修改多个数据，它接收一个参数：

### 传入一个对象

当参数类型为对象时，key 是要修改的 state 数据名称， value 是新的值（支持嵌套传值），用法如下：

```js
console.log(store.$state);
//{message: "Hello World",arr: [1, 2, 3],}

store.$patch({
  message: "weber",
  arr: [4, 5, 6],
});

console.log(store.$state);
//{message: "weber",arr: [4, 5, 6],}
```

::: tip
使用这个方式时， key 只允许是实例上已有的数据，不可以提交未定义的数据进去。

强制提交的话，在 TypeScript 会抛出错误， JavaScript 虽然不会报错，但实际上， Store 实例上面依然不会有这个新增的非法数据。
:::

### 传入一个方法

当参数类型为函数时，该函数会有一个入参 state ，是当前实例的 state ，等价于 store.$state ，用法如下：

```js
console.log(store.$state);
//{message: "Hello World",arr: [1, 2, 3],}

store.$patch((state) => {
  state.message = "weber";
  state.arr = [4, 5, 6];
});

console.log(store.$state);
//{message: "weber",arr: [4, 5, 6],}
```

::: tip
使用这个方式时，和 传入一个对象 一样只能修改已定义的数据，并且另外需要注意，传进去的函数只能是同步函数，不可以是异步函数！
:::

## 全量更新 state

从前面多次提到 state 数据可以通过 store.$state 来拿到，而这个属性本身是可以直接赋值的。

```js
store.$state = {
    message = "weber";
    arr = [4, 5, 6];
}
```

同样的，必须遵循 state 原有的数据和对应的类型。

## 重置 state

Pinia 提供了一个 $reset API 挂在每个实例上面，用于重置整顿 state 树为初始数据：

```js
// 这个 store 是我们上面定义好的实例
store.$reset();
```

具体例子：

```js
// 修改数据
store.message = "New Message";
console.log(store.message); // 输出 New Message

// 3s 后重置状态
setTimeout(() => {
  store.$reset();
  console.log(store.message); // 输出最开始的 Hello World
}, 3000);
```
