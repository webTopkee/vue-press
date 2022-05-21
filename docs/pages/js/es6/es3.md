## 块级作用域

花括号划分出来的就是块级作用域

```js
var arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log(i);
}

//let关键字声明的变量不能在块级作用域外引用
console.log(i);
```
