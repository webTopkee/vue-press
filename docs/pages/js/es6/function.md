## 函数默认值

### 基本用法

ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

```js
function log(x, y = "World") {
  console.log(x, y);
}

log("Hello"); // Hello World
log("Hello", "China"); // Hello China
log("Hello", ""); // Hello
```

### 与解构赋值默认值结合使用

参数默认值可以与解构赋值的默认值，结合起来使用。

```js
function fn({ a, b = 10 }) {
  console.log(a + b);
}

fn({ a: 5, b: 6 }); //11
fn({ a: 5 }); //15
fn(); // error
```

```js
function fn([a, b = 10]) {
  console.log(a + b);
}

fn([5, 6]); //11
fn([5]); //15
fn(); // error
```

### 函数的 length 属性

指定了默认值以后，函数的`length`属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，`length`属性将失真。

```js
function fn(a, b, o, c) {
  console.log(a, b, o, c);
}
fn.length; // 4

function fn2(a, b, o = 1, c) {
  console.log(a, b, o, c);
}
fn2.length; // 2
```

如果设置了默认值的参数不是尾参数，那么`length`属性也不再计入后面的参数了。

## rest 参数

ES6 引入 `rest` 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用 arguments 对象了。`rest` 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```js
function fn(...value) {
  console.log(value);
}

fn(1, 4, { a: 5 }, 8); //[1, 4, {a: 5}, 8]
```

```js
function fn(x, ...value) {
  console.log(x); //1
  console.log(value); //[4, {a: 5}, 8]
}

fn(1, 4, { a: 5 }, 8);
```
