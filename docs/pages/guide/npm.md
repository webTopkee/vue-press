## 初始化

```
npm init [-y]
```

`-y` 可写可不写，如果写上则会默认生成配置，否则则需要手动填写配置

## 安装单个软件包

```
npm install <package-name> [安装模式](-g/-S/-D)
```

通常会在此命令中看到更多标志:

- `-g` 全局安装，软件包会安装在当前计算机中，与项目无关
- `-S --save` 软件包会安装到生产依赖中，只会出现在项目目录中（`package.json` 文件的 `dependencies`）。
- `-D --dev` 软件包会安装到开发依赖中，软件包代码只会出现在项目目录中（`package.json` 文件的`devDependencies`)。

区别主要是，devDependencies 通常是开发的工具（例如测试的库），而 dependencies 则是与生产环境中的应用程序相关。

```
npm install <package-name>
```

## 全局安装

```
npm install -g <package-name>
```

## 安装所有依赖

```
npm install
```

## 更新软件包

```
npm update
```

## 更新单个软件包

```
npm update <package-name>
```

## 软件包旧版本

```
npm install <package>@<version>
npm install cowsay@1.2.0
```

## 卸载软件包

```
npm uninstall <package-name>
```

如果使用 -S 或 --save 标志，则此操作还会移除 package.json 文件中的引用。

如果程序包是开发依赖项（列出在 package.json 文件的 devDependencies 中），则必须使用 -D 或 --save-dev 标志从文件中移除：

```
npm uninstall -S <package-name>
npm uninstall -D <package-name>
npm uninstall -g <package-name>
```

## 全局软件包

```
npm list -g --depth 0
```
