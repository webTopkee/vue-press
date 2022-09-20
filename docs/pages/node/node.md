## fs 文件系统模块

`fs.readFile()`方法，用来读取指定文件中的内容

```js
const fs = require("fs");
fs.readFile("./files/1.txt", "utf8", function (err, src) {
  console.log(err); //null
  console.log("---------");
  console.log(src); //获取数据
});
```

`fs.writeFile()`方法，用来向指定的文件上写入内容

```js
const fs = require("fs");
fs.writeFile("./files/2.txt", "66666", function (err) {
  console.log(err);
});
```

`__dirname` 表示当前文件所处的目录

```js
const fs = require("fs");
fs.readFile(__dirname + "/files/1.txt", "utf8", function (err, res) {
  console.log(res);
});
```

## path 路径模块

`path.join()`方法，用来将多个路径片段拼接成一个完整的路径字符串  
`path.basename()`方法，用来从路径字符串，将文件名解析出来  
`path.extname()`方法，可以获取路径中的扩展名

```js
const path = require("path");
console.log(path.join(__dirname + "/files/1.txt")); //F:\node\files\1.txt
console.log(path.basename(__dirname + "/files/1.txt")); //1.txt
console.log(path.basename(__dirname + "/files/1.txt", ".txt")); //1
console.log(path.extname(__dirname + "/files/1.txt")); //.txt
```

## http 模块

- 创建 web 服务器的基步骤

1. 导入 http 模块
2. 创建 webe 服务器实例
3. 为器实例绑定 request 事件，监听客户端请求
4. 启动服务器

```js
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const str = `当前地址路径为${req.url},且是${req.method}请求`;
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end(str);
});
server.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
```

## 包基础结构

基础包一般包含三个文件

- package.json (包管理配置文件)
- index.js （包入口文件）
- README.md （包说明文档）

```json
// package.json
{
  "name": "weber",
  "version": "1.0.0",
  "main": "index.js",
  "description": "包描述",
  "keywords": ["weber"],
  "license": "ISC"
}
```

```js
// index.js
module.exports = {
  UpperCase,
};
```

## npm 查看源和换源

```
npm config get registry  // 查看npm当前镜像源

npm config set registry https://registry.npm.taobao.org/  // 设置npm镜像源为淘宝镜像
```

## 镜像源地址部分如下

```
npm --- https://registry.npmjs.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/
```

## 发布包

- 终端登录 npm 账号

```
  npm login
```

- 发布到 npm 上

```
  发布前确保镜像源https://registry.npmjs.org/
  npm publish
```

- 删除已发布的包

```
  npm unpublish 包名 --force
```

## Express 的基本使用

```js
// 1.导入 express
const express = require("express");

// 2.创建 web 服务器
const app = express();

// 3 启动服务器
app.listen(80, () => {
  console.log("创建成功！");
});
```

## 监听 GET/POST 请求

```js
app.get("请请求路径",function(req,res)=>{/*处理函数*/});
app.post("请请求路径",function(req,res)=>{/*处理函数*/});
```

## res.send

通过 res.send()方法，可以把处理好的内容，发送给客户端

```js
app.post("/user", (req, res) => {
  res.send("请求成功");
});
```

## 获取 URL 中携带的参数

通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数

```js
app.post("/", (req, res) => {
  //默认是一个空对象
  console.log(req.query);
});
```

## 获取 URL 中动态参数

通过 req.params 对象，可以访问到 URL 中，通过:匹配到的动态参数

```js
app.post("/user/:id", (req, res) => {
  //可以添加多个动态值"/user/:id/:name"
  //默认是一个空对象
  console.log(req.params);
});
```
