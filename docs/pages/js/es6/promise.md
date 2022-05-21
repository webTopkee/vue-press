## 基本使用

ES6 规定，`Promise` 对象是一个构造函数，用来生成 `Promise` 实例。

```js
const promise = new Promise(function (resolve, reject) {
  // ... some code
  if (/_ 异步操作成功 _/) {
    resolve(value);
  } else {
    reject(error);
  }
});
```
