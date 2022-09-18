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

## package.json

```json
{
  "name": "weber",
  "version": "1.0.0",
  "main": "index.js",
  "description": "包描述",
  "keywords": ["weber"],
  "license": "ISC"
}
```

## 发布包

- 终端登录 npm 账号

```
  npm login
```

- 发布到 npm 上

```
  npm publish
```

- 删除已发布的包

```
 npm unpublish 包名 --force
```
