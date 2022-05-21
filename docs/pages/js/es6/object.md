## 属性的简洁表示法

### 属性简写

属性名同名可以省略

```js
let name = "weber";
const obj = { name };
//等价于
// obj = { name: 'weber' };
```

### 方法简写

可以省略`function`名称

```js
let name = "weber";
const obj = {
  name,
  // my: function () {
  //   console.log('xxxx');
  // },
  my() {
    console.log("xxxx");
  },
};
```

## 属性名表达式

对象中的值接受变量，在`[]`里面使用变量名

```js
let name = "name";
const obj = {
  [name]: "weber",
};
console.log(obj); //{name: 'weber'}
```

## 属性的遍历

ES6 一共有 5 种方法可以遍历对象的属性。

### for in

`for in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

```js
const obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

for (let k in obj) {
  console.log(k);
  //name
  //height
  //sex
}
```

### object.keys

`Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名

```js
const obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

const k = Object.keys(obj);
console.log(k); //['name', 'height', 'sex']
```

### Object.getOwnPropertyNames

`Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

### Object.getOwnPropertySymbols

`Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名。

### Reflect.ownKeys

`Reflect.ownKeys`返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

## 扩展运算符

### 解构赋值

右边的对象会被解构成左边的对象中(名称要一致)

```js
const obj = { name: "weber", height: 170, sex: "男" };
const { name, height, sex } = obj;
console.log(name); //weber
console.log(height); //170
console.log(sex); //男
```

### 扩展运算符

对象的扩展运算符`...`用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。

```js
const obj = { name: "weber", height: 170, sex: "男" };
const obj2 = { ...obj, a: "玩电脑", b: "游泳" };
console.log(obj2); //{name: 'weber', height: 170, sex: '男', a: '玩电脑', b: '游泳'}
```
