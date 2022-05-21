## 扩展运算符

扩展运算符（spread）是三个点`...`

### 数组合并

```js
const arr = ["weber", 170, "男"];
const arr2 = [...arr, "玩电脑", "游泳"];
console.log(arr2); //['weber', 170, '男', '玩电脑', '游泳']
```

### 函数调用

```js
function sun(a, b, c) {
  return a + b + c;
}
const arr = [5, 8];
console.log(sun(10, ...arr)); //23
```

### 字符串

```js
const txt = "hello";
console.log([...txt]); // ['h', 'e', 'l', 'l', 'o']
```

## Array.from

`Array.from()`方法用于将两类对象转为真正的数组

```js
const arr = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

const arr2 = Array.from(arr);
console.log(arr2); //['a', 'b', 'c']
```

## Array.of

`Array.of()`方法用于将一组值，转换为数组

```js
const arr = Array.of(1, "b", 4);
console.log(arr); //[1, 'b', 4]

const arr2 = Array.of(3);
console.log(arr2); //[3]
```
