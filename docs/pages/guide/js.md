## Promise

- 基本使用

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

## async

- 基本使用

  `async` 函数返回一个 Promise 对象，可以使用 `then` 方法添加回调函数。当函数执行的时候，一旦遇到 `await` 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

  ```js
  async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPrice(symbol);
    return stockPrice;
  }

  getStockPriceByName("goog").then(function (result) {
    console.log(result);
  });
  ```
