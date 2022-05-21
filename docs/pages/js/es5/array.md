## length 属性

数组的`length`属性，返回数组的成员数量。

```js
const arr = [1, "b", true];

console.log(arr.length); // 3
```

## in 运算符

检查某个键名是否存在的运算符 in，适用于对象，也适用于数组。

```js
const arr = [1, "b", true];
console.log(1 in arr); //true
```

## for in 循环和数组的遍历

for...in 循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。

```js
const arr = [1, "b", true];
for (var k in arr) {
  console.log(k); // 0 1 2
}
```

但是，for...in 不仅会遍历数组所有的数字键，还会遍历非数字键。

```js
const arr = [1, "b", true];
arr["foo"] = "xxx";
for (var k in arr) {
  console.log(k); // 0 1 2 foo
}
```

数组的遍历可以考虑使用 `for 循环`或 `while 循环`及 `forEach循环` 方法来循环。
