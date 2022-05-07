## 安装

```js
npm install pinia  // 需要 cd 到你的项目目录下
```

## 集成到项目

```js
import { createApp } from "vue";
import { createPinia } from "pinia"; // 导入 Pinia

createApp(App)
  .use(createPinia()) // 启用 Pinia
  .mount("#app");
```
