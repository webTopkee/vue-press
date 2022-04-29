## 基本类型

JavaScript 原始类型也同样适应于 TypeScript 的类型系统，因此 string、number、boolean 也可以被用作类型注解：

```js
let num: number;
let str: string;
let bool: boolean;

num = 1234;
str = "1234";
bool = true;
```

## 数组

```js
let arr: number[] = [1, 2, 3];
let arr2: string[] = ["A", "B", "C"];
let arr3: boolean[] = [true, false];
```

## 接口

接口名称首字母大写

```js
interface Class {
  name: string;
  height: number;
}

let obj: Class = {
  name: "weber",
  height: 170,
};
```
