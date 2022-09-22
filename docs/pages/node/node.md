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

## 托管静态资源

express 提供了一个非常好用的函数，叫做 express.static()，通过它，我们可以非常方便地创建一个静态资源服务器

```js
//下面代码可以将public目录下的图片、css文件、js文件对外开放访问了
// http://localhost:3000/index.html
app.use(express.static("public"));
```

如果要托管多个静态资源目录，请多次调用`express.static()`函数

```js
app.use(express.static("public"));
app.use(express.static("files"));
```

访问静态资源文件时，express.static()函数会根据目录的添加顺序查找所需的文件。

如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用以下的方式

```js
// http://localhost:3000/public/index.html
app.use("/public", express.static("public"));
```

## 安装 nodemon

当修改完代码后，nodemon 会自动重启服务器，极大方便了开发和调试

```
npm install -g nodemon
```

## 创建路由模块

```js
// router.js
// 1.导入express
const express = require("express");
// 2.创建路由对象
const router = express.Router();
// 3.挂载具体的路由
router.get("/user/list",(req,res)=>{
  res.send("get user list.")
})
router.post("/user/add",(req.res)=>{
  res.send("add new user.")
})
// 4.向外导出路由对象
module.exports = reouter
```

## 导入路由模块

```js
// 1.导入路由模块
const router = require("router.js");
// 2.注册路由模块
app.use(router);
```

## 路由模块添加前缀

类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方法也非常简单

```js
// 1.导入路由模块
const router = require("router.js");
// 2.注册路由模块
app.use("/api", router);
```

此时当我们访问路由时，都需要带上`/api`，如http://127.0.0.1/api/...
