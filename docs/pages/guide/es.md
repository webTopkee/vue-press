## 变量声明 let

```js
console.log(a); //执行错误，变量没有被提升
let a = 1;
```

## for of 循环

```js
var arr = [1, 2, 3, 4, 5];
for (var i of arr) {
  console.log(i);
}
```

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

## 箭头函数

`()=>{}`实际上就是一个匿名函数
(参数)=>{返回值}

```js
let sun = (a, b) => a + b;
//等价于
let sun = (a, b) => {
  return a + b;
};
```

## 模板字符串

在 ES6 中可以用模板字符串，在字符串中解析变量`${变量名}`

```js
let name = "weber";
let height = 170;
console.log(`我叫${name},身高${height}`);
```

## 对象快速赋值

为了编写对象成员的代码量

```js
let name = "weber";
let height = 170;

//对象的属性与要绑定的变量名一致时，可以简写
let person = {
  name,
  height,
};
```

## 数组遍历

在 ES5 中数组遍历的主要手段是 `for` 循环  
在 ES6 中添加了 6 个数组遍历方法  
| 方法名 | 描述 |
| ----------- | -------------- |
|forEach |普通遍历，没有返回值|
|map |遍历并进行批量操作，返回新数组（不改变旧数组）|
|filter|过滤器，遍历并检查每个元素，保留符合条件的，返回新数组（不改变旧数组）|
|every|遍历并检查每个元素，如果都符合条件返回 true,有一个不符合返回 false|
|some|遍历并检查每个元素，有一个符合条件返回 true,都不符合返回 false|
|findIndex|查索引，返回值是数值型的索引，如果没有找到符合条件的元素，返回-1|

```js
let arr = [1, 2, 3, 4, 5];

//用forEach方法遍历数组元素
let result = arr.forEach((item, index, arr) => {
  console.log(item + "-" + index);
});

//用map方法进行指处理，返回新数组，不改变旧数组
let mapResult = arr.map((item, index, arr) => {
  return item * 10;
});
console.log(arr); //[1,2,3,4,5]
console.log(mapRewsult); // [10,20,30,40,50]

//用filter方法进行筛选，返回新数组，不改变旧数组
let filterResult = arr.filter((item, index, arr) => {
  return item > 2;
});
console.log(filterResult); //[3,4,5]

//用every方法进行检查，返回布尔值
let everyResult = arr.every((item, index, arr) => {
  console.log(item); //执行了4次
  return item < 4;
});
console.log(everyResult); //false
//如果every方法要返回true，请问遍历多少次？
//every方法需要证明每个元素都符合条件
//every方法遍历的次数应该和数组长度一致

//用some方法进行检查，返回布尔值
let someResult = arr.some((item, index, arr) => {
  return item < 4;
});
console.log(someResult); //true
//如果some方法要返回false，请问遍历多少次？
//some方法需要证明至少证明一个元素都符合条件
//some方法遍历的次数应该和数组长度一致

//用findIndex查找目标索引
let findIndexResult = arr.findIndex((item, index, arr) => {
  return item > 3;
});
console.log(findIndexResult); //3
```
