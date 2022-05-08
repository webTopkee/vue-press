## 自动数据类型转换

1. 自动类型转换不需要人工介入
2. 自动类型转换发生在运算或者判断的过程中
3. 自动类型转换公限于标量
4. 在类型转换过程中一般是向着更精确的数据进行转换

```php
$int = 10;
$string = '20';
var_dump($int+$tring); //int(10)

$int = 20;
$float = 2.22;
var_dump($int+$float); //float(22.22)
```

## 强制数据类型转换

#### 语言结构方式修改变量类型

```php
$int = 10;
var_dump((float)$int); //float(10)
var_dump((string)$int); //string(2) "10"

var_dump((boolean)$int); //bool(true)
var_dump((array)$int); //array(1) { [0]=> int(10) }
var_dump((object)$int); //object(stdClass)#1 (1) { ["scalar"]=> int(10) }
```

#### 使用指定功能进行数据类型转换

`strval()`将数据类型转换为字符串  
 `intval()`将数据类型转换为整型  
 `floatval()`将数据类型转换为浮点型

```php
$int = 10.12;
var_dump(strval($int)); //string(5) "10.12
var_dump(intval($int)); //int(10)
var_dump(floatval($int)); //float(10.12)
```

#### 字符串的转换规则

1. 如果是纯数字字符串，转换之后只改变类型
2. 如果是字符串以数字开头，数字后面是非数字字符串，那么将字符串最前面的连续的数字字符陬出来转换为数值
3. 注意：在数值前可以出现符号（-/+）表示正负数

## 通用类型转换功能

`settype()`该功能改变的是原有变量，返回是否转换成功(布尔值)，除`resource`资源类型不能转换外，其他类型都可以转换成功

```php
$string = 'hello world';
var_dump(settype($string,'int')); //bool(true)
var_dump(settype($string,'string')); //bool(true)
var_dump(settype($string,'bool')); //bool(true)
var_dump(settype($string,'array')); //bool(true)
```
