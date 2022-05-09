## 声明常量

#### define()声明常量

1. 常量名开头不可以使用`$`
2. 声明常量不要使用中文，可以使用英文，推荐大写
3. 可以使用数字，但是不能以数字开头
4. 不能使用特殊字符，除了下划线
5. 常量命名要有意义
6. 常量名严格区分大小写

```php
   define("WEBER",123456);
   echo WEBER; //123456
```

::: warning 注意
定义常量时，在 php 版本>7.3 之后可以使用除对象之外的任意类型，在 php<5.4 版本之前，常量值仅限标题。如果>7.3 版本`define`允许接收第三个参数，如果设置为`trut`表示常量名不区分大小写，默认为`false`区分大小写。

- 常量一旦定义不可以在改变值
- 常量习惯上使用大写
- 常量如果没有声明，该常量名称当做字符串处理
  :::

#### const 关键字声明

1. 该方法只有声明方式和`define()`不同，其他规则相同

```php
const HELLO = 'hello';
var_dump(HELLO); //string(5) "hello"
```

## 魔术常量

| 常量名           | 说明                              |
| ---------------- | --------------------------------- |
| \_\_FILE\_\_     | 表示当前文件相对于系统的绝对路径  |
| \_\_LINE\_\_     | 表示当前常量所在的行              |
| \_\_FUNCTION\_\_ | 可以在函数中获取当前函数名称      |
| \_\_CLASS\_\_    | 表示当前常量所在的 CLASS 类的名称 |
| \_\_METHOD\_\_   | 表示当前方法所在的类和方法名称    |

## 其他常量

#### constant 获取常量值

1. 该功能一般是当常量名为一个字符串类型的时候，使用该功能可能获取到对应的常量值

```php
define('STR','hello world');
var_dump(constant('STR')); //string(11) "hello world"

$str = 'STR';
var_dump(constant($str)); //string(11) "hello world"
```

#### defined 检测常量是否被定义

1. 如果该常量被定义返回`true`,否则则返回`false`

```php
define('STR','hello world');
var_dump(defined('STR')); //bool(true)
```

#### get_defined_constants 获取所有常量集合

1. 获取当前定义的所有常量集合，返回一个数组

```php
var_dump(get_defined_constants());
```
