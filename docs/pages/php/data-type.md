## PHP 中的数据类型

三大类八种数据类型

- 标量
  1. 整形 int
  2. 浮点型 float
  3. 字符串 string
  4. 布尔值 boolean
- 复合数据类型
  1. 数组 array
  2. 对象 object
- 特殊数据类型
  1. 资源 resource
  2. null

## 整形

1. 简单说就是整数，包括正整数、负整数、0
2. 声明方式

#### 正常 10 进制声明

```php
  $int = 10;
  var_dump($int); //int(10)
```

#### 8 进制声明整型

```php
  $int = 077;
  var_dump($int); //int(63)
```

#### 16 进制声明整型

```php
  $int = 0xff;
  var_dump($int); //int(255)
```

#### 2 进制声明整型

```php
  $int = 0b1010;
  var_dump($int); //int(10)

```

## 浮点型

1. 浮点型就是数学中的小数和分数等
2. 声明方式

#### 小数方式

```php
$float = 3.14;
var_dump($float); //float(3.14)
```

#### 科学计数法

```php
$int = 3.14e2;
var_dump($int); //float(314)
```

## 字符串

#### 单引号声明

```php
$string = '字符串';
var_dump($string); //string(9) "字符串"
```

#### 双引号声明

```php
$string = "字符串";
var_dump($string); //string(9) "字符串"
```

#### 定界符声明

1. 使用定界符需要注意开头和结尾的书写格式
2. 以`<<<`开始后面跟一串自定义的字符
3. 书写完自定义字符串时必须换行写内容
4. 写完内容时必须另起一行写结束符号
5. 结束符号所在的行必须顶头写，而且后面不能有任何其他内容
6. 自定义字符串一般使用 EOF (end of file)

```php
$string = <<<EOF
定界符
可以随便输写
但是一定要写结束
EOF;

var_dump($string); //string(53) "定界符 可以随便输写 但是一定要写结束"
```

#### 单双引号的区别

1.不能解析转移字符，只能解析转斜线和自己本身

```php
$string = '大家好，\r今天天气不错';
var_dump($string); //string(32) "大家好，\r今天天气不错"
```

2.可以解析转移字符

```php
$string = "大家好，\r今天天气不错";
var_dump($string); //string(31) "大家好， 今天天气不错"
```

#### 解析变量的能力

1. 单引号不能解析变量，可以使用字符串的连接符连接变量使用

```php
$world = 'world';
$string = 'hello {$world}';
var_dump($string); //$string = "大家好，\r今天天气不错";
$string = 'hello '. $world;
var_dump($string); //string(11) "hello world"
```

2. 双引号可以解析变量，但是要注意，在双引号中解析变量需要将变量使用`{}`扩起来，告诉字符串以变量解析

```php
$world = 'world';
$string = "hello {$world}";
var_dump($string); //string(11) "hello world"
```

#### 对单双绰号的支持（引号之间的互相嵌套）

1. 单引号可以包含双引号，如果包含单引号需要使用转译斜线进行转译
2. 双引号可以包含单引号，如果包含双引号需要使用转译斜线进行转译

## 布尔值

1. 布尔类型就是真（true）和假（false）
2. 布尔值表示真/假 有/无
3. 注意：布尔值只有 2 个值，true(真/1)，false(假/0),在书写 true 或者 false 的时候绝对不能加引号。（php 中布尔值不区分大小写）

```php
$boolean = false;
var_dump($boolean);  //bool(false)

$boolean = true;
var_dump($boolean); //bool(true)

```

## 数组

```php
$arr = array('小明',true,123);
var_dump($arr) //array(3) { [0]=> string(6) "小明" [1]=> bool(true) [2]=> int(123) }
```

## 对象

```php
class Person{
    var $name = '小明';

    function fn(){
        echo '方法';
    }
};

$obj = new Person();
```

## resource

打开 PHP 程序之外的东西都是资源

## null

1. 未赋值的变量，默认值为 null
2. 声明变量时，直接赋值为 null
3. 变量存在值，然后被删除值`unset`之后，值也是 null

```php
var_dump($a); //未赋值null

$name = null;
var_dump($name);  //赋值为null

$name = 'lala';
unset($name);
var_dump($name); //删除后为null
```
