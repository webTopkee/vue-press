## 属性的操作

### 属性的读取

读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。

```js
var obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

console.log(obj.name); //weber
console.log(obj["height"]); //170
var s = "sex";
console.log(obj[s]); //男
```

### 属性的赋值

点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

```js
var obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

obj.name = "小红";
obj["height"] = 160;
var s = "sex";
obj[s] = " 女";

console.log(obj); //{name: '小红', height: 160, sex: ' 女'}
```

### 属性的查看

可以使用`Object.keys`方法，查看对象本身所有属性

```js
var obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

var v = Object.keys(obj);
console.log(v); //['name', 'height', 'sex']
```

### 属性的删除

`delete`命令用于删除对象的属性，删除成功后返回 true。

```js
var obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

var v = delete obj.height;
console.log(v); //true
console.log(obj); //{name: 'weber', sex: '男'}
```

### 属性是否存在

`in`运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回 true，否则返回 false。它的左边是一个字符串，表示属性名，右边是一个对象。

```js
var obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

console.log("name" in obj); // true
console.log("toString" in obj); // true
console.log("aaa" in obj); // false
```

::: tip
`in`运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象 obj 本身并没有`toString`属性，但是 in 运算符会返回 true，因为这个属性是继承的。
:::

### 属性的遍历

通过`for in`遍历可以获取到对象的键名

```js
var obj = {
  name: "weber",
  height: 170,
  sex: "男",
};

for (var v in obj) {
  console.log(v); // name  height  sex
}
```
