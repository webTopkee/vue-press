## 函数特性

1. 函数的作用
2. 函数的参数
3. 函数的返回值

## unset

`unset()`删除变量的功能，没有返回值

```php
$name = 'lala';
unset($name);
var_dump($name); //删除后为null且没有返回值
```

## isset

`isset()`检测变量，如果该变量设置值返回结果为 true，未设置值返回结果为 false,只要赋值不是 null 的数据，那么检测结果都是 true,如果变量未赋值或者赋值为 null，检测结果都为 false

```php
$name = 'lala';
$isset =  isset($name);
var_dump($isset); //bool(true)

$name = null;
$isset =  isset($name);
var_dump($isset); //bool(false)
```

## empty

`empty()`检测变量值是否为空的功能，如果为空返回 true,不为空返回 false

| 类型     | 空         |
| -------- | ---------- |
| int      | 0          |
| float    | 0.0        |
| string   | "" 或 0    |
| boolean  | false      |
| array    | 空数组为空 |
| object   | 都不为空   |
| resource | 都不为空   |
| null     | null       |

```php
$name = 0;
$empty =  empty($name);
var_dump($empty); //bool(true)

$name = "";
$empty =  empty($name);
var_dump($empty); //bool(true)

$name = [];
$empty =  empty($name);
var_dump($empty); //bool(true)

$name = null;
$empty =  empty($name);
var_dump($empty); //bool(true)
```

## var_dump

`var_dump()`该功能可以直接将数据的值和类型显示出来

```php
$name = 'weber';
var_dump($name); //string(5) "weber"
```

## gettype

`gettype()`可以获取任何数据的类型，获取之后可以给程序使用，可以检测以下类型的值：

- integer
- double
- string
- boolean
- array
- object
- resource
- null

```php
$name = 'weber';
var_dump($name); //string(5) "weber"
$type = gettype($name);
var_dump($type); //string(6) "string"
```

## is\_\*系列

单独检测某种变量是否指定类型，是则为 true，否则为 false

| 函数名                   | 描述                                               |
| ------------------------ | -------------------------------------------------- |
| is_int() / is_integer()  | 检测数据是否为整型                                 |
| is_float() / is_double() | 检测数据是否为浮点型                               |
| is_string()              | 检测数据是否为字符串                               |
| is_bool()                | 检测数据是否为布尔类型                             |
| is_array()               | 检测数据是否为数组                                 |
| is_object()              | 检测数据是否为对象                                 |
| is_resource()            | 检测数据是否为资源                                 |
| is_null()                | 检测数据是否为 null                                |
| is_scalar()              | 检测数据是否为标题（int/float/string/bool）        |
| is_numeric()             | 检测数据是否为数字（整型、浮点型、纯数字字字符串） |

```php
$name = 'weber';
var_dump($name); //string(5) "weber"
$type = is_string($name);
var_dump($type); //bool(true)
```
