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
module.exports = router
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

## 全局中间件

- 中间件就是当响应路由时，在路由前触发的函数，等中间件处理完成后在处理路由，且可以调用多个中间件，会按顺序执行中间件
- 中间件会共享 `req` `res`,上面定义的变量或函数可以传递到每个中间件，直至到路由后输出

```js
app.use(function (req, res, next) {
  // 执行函数
  next();
});
```

## 局部中间件

```js
const mw = (req, res, next) => {
  next();
};

app.get("/", mw, (req, res) => {
  res.send("hello");
});
```

引用多个局部中心件引用

```js
app.get("/",mw,mw2,(req.res)=>{
  next();
})
// 等价
app.get("/",[mw,mw2],(req.res)=>{
  next();
})
```

## 中间件注意事项

- 一定要在路由之前注册中间件
- 客户端发送过来的请求，可以连续调用多个中间件进行处理
- 执行完中间件的业务代码之后，不要忘记调用 next()函数
- 为了防止代码逻辑混乱，调用 next()函数后不要再写额外的代码
- 连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象

## 应用级中间件

```js
// 全局中间件
app.use((req.res,next)=>{
  next()
})
// 局部中间件
app.get("/",mw,(req,res)=>{
  res.send("Home Page.")
})

```

## 路由级中间件

```js
const router = express.Router();
router.use((req, res, next) => {
  next();
});
```

## 错误级中间件

错误级别中间专门用来捕获整个项目的异常错误，从而防止项目异常崩溃问题

```js
app.get('/',(req,res)=>{
  throw new Eroor("服务器内部发生了错误！“)
  res.send("Home Page.")
})

app.use((err.req,res,next)=>{
  console.log("发生了错误：" + err.message)
  res.send("Eroor!" + err.message)
})
```

> 错误级的中间件，必须放在路由尾部

## 内置的中间件

自 Express 4.16.0 版本开始，内置了 3 个常用的中间件，极大的提交开发效率

- express.static 托管静态资源的内置中间件
- express.json 解析 JSON 格式的请求体数据
- express.urlencode 解析 URL-encoded 格式的请求体数据

```js
// 配置解析 application/json
app.use(express.json());
// 配置解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
```

## 第三方中间件

- 运行 npm install body-parser 安装中间件
- 使用 require 导入中间件
- 调用 app.use()注册并使用中间件

```js
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: false }));
// app.use(express.urlencoded(extended:false))
```

> Express 内置的 express.urlencoded 中间件，主是基于 body-parser 第三方中间件封装出来的

## 跨域

cors 是 Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便解决跨域问题

```
npm install cors
```

```js
const cors = require("cors");
//在路由之前调用
app.use(cors());
```

## CORS 响应头部 Access-Control-Allow-Origin

```
Access-Control-Allow-Origin: <origin> | *
```

```js
// 只允许http://weber.com请求
res.setHeader("Access-Control-Allow-Origin":"http://weber.com")
//允许所有网站请求
res.setHeader("Access-Control-Allow-Origin":"*")
```

## CORS 响应头部 Access-Control-Allow-Headers

默认情况下，CORS 仅支持客户端向服务器发送如下的 9 个请求头：Accept/Accept-Language/Content-Language/DPR/Downlink/Save-Data/Viewport-Width/Width/Content-Type(值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一)  
如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败

```js
// 允许客户端额外向服务器发送Content-Type请求头和X-Custom-Header请求头
// 多个请求头之间使用英文逗号进行分割
res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Custom-Header");
```

## CORS 响应头部 Access-Control-Allow-Methods

默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。  
如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Allow-Methods 来指明实际请求所允许使用的 HTTP 方法。

```js
// 只允许POST,GET,DELETE,HEAD请求方法
res.setHeader("Access-Control-Allow-Methods", "POST,GET,DELETE,HEAD");
// 允许所有HTTP请求方法
res.setHeader("Access-Control-Allow-Methods", "*");
```

## CORS 请求分类

客户端在请求 CORS 接口时，根据请求方式和请求头的不同，可以将 CORS 的请求分为两大类，分别是：

- 简单请求
- 预检请求

## 简单请求

同时满足以下两条件的请求，就属于简单请求：

- 请求方式：GET、POST、HEAD 三者之一
- HTTP 头部信息不超过以下几种字段：无自定义头部字段、Accept/Accept-Language/Content-Language/DPR/Downlink/Save-Data/Viewport-Width/Width/Content-Type(值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一)

## 预检请求

只要符合以下任何一个条件的请求，都需要进行预检请求:

- 请求方式为 GET、POST、HEAD 之外的请求 Methods 类型
- 请求头中包含自定义头部字段
- 向服务器发送了 application/json 格式的数据

在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一次的 OPTION 请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据

## 简单请求和预检请求的区别

简单请求的特点：客户端与服务器之间只会发生一次请求  
预检请求的特点：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正请求

## SQL 语法

查询表所有字段

```
select * from users
```

查询表指定字段

```
select username from users
```

向表创建一条数据

```
insert into users (username, password) values ('tony stark2' , 'adsfewd')
```

更新表指定字段数据

```
update users set password='88888' where id=6
```

更新表多个字段数据

```
update users set username='admin',password='123456' where id=6
```

删除表中行数据

```
delete from users where id=4
```

### SQL 的 WHERE 子句中使用的运算符

| 操作符  | 描述         |
| ------- | ------------ |
| =       | 等于         |
| <> / != | 不等于       |
| >       | 大于         |
| <       | 小于         |
| >=      | 大于等于     |
| <=      | 小于等于     |
| BETWEEN | 在某个范围内 |
| LIKE    | 搜索某种模式 |

通过 where 子句来限定 select 的查询条件

```
select * from users where id>2
select * from users where username='web'
```

## SQL 的 AND 和 OR 运算符

```
// 条件必须同时满足
select * from users where username='web' and status=0
// 条件只需要满足一条
select * from users where username='web' or status=1
```

## SQL 的 ORDER BY 排序

对表中的数据，按照 status 字段进行升序排序

```
select * from users order by status
// 等价于
select * from users order by status asc
```

对表中的数据，按照 id 字段进行降序排序

```
select * from users order by id desc
```

多重排序

```
select * from users order by status desc, username asc
```

## SQL 的 COUNT(\*) 函数

查询表中某个字段的总数据条数

```
select count(*) from users where status=0
```

使用 AS 关键字给列起别名

```
select count(*) as totall from users where status=0
select username as name, password as pwd from users
```
