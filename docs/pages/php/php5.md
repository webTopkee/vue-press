## 常量

- 定义常量一般用大写
- 定义常量有 2 种方式 `define()`、`const`define("常量名"，"常量值",布尔值) 第三个布尔值是用于常量名是否区分大小写，默认 false，严格区分

```php
   define("WEBER",123456);
   echo WEBER; //123456

   const WEB = "LALA";
   echo WEB; //LALA
```

- `constant()`用于解析特殊的常量名

```php
   define("^_^",123);
   //echo ^_^;  //报错
   echo constant("^_^"); //123
```

- `defined()`判断当前常量是否存在

```php
   define("MM",123);
   var_dump(defined("MM")); //bool(true)
```

## 预定义常量

计算机已经定义好的常量

```php
   echo PHP_VERSION; //7.3.4 php版本
   echo PHP_OS; //WINNT php运行环境
```

## 魔术常量

```php
   echo __LINE__; //输出当前行数
   echo __FILE__; //代码当前所在的文件
```

## 显示所有常量

输出`get_defined_constants()`可以查看所有常量
