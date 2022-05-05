## 语法特点

1、以分号结尾( ; )，分号建议全部加上  
2、PHP 语言是区分大小写  
3、书写 PHP 语法 <?php 代码...  ?>  
4、PHP 属于弱类型语言

## 输出语句

php 有 4 种输入语句分别为`echo` `print` `print_r()` `var_dump()`

```php
    echo "今天要下雨了"; //今天要下雨了
    echo "<br>";
    echo "123456"; //123456;
    echo "<br>";
    //不用echo输出布尔值
    echo true; //1
    echo "<br>";
    echo false; // 空
    echo "<br>";
    // echo "array(10)"; //不支持数组
    echo "<br>";


    print "今天要下雨了"; //今天要下雨了
    echo "<br>";
    print "123456"; //123456
    echo "<br>";
    //不用echo输出布尔值
    print true; //1
    echo "<br>";
    print false; // 空
    echo "<br>";
    // print "array(10)";  //不支持数组
    echo "<br>";

    //print_r主要用于数组
    print_r("今天要下雨了"); //今天要下雨了
    echo "<br>";
    print_r("123456"); //123456
    echo "<br>";
    //不用echo输出布尔值
    print_r(true); //1
    echo "<br>";
    print_r(false); // 空
    echo "<br>";
    print_r(array(10));  //Array ( [0] => 10 )
    echo "<br>";


    var_dump("今天要下雨了"); //string(18) "今天要下雨了"
    echo "<br>";
    var_dump("123456"); //    string(6) "123456"
    echo "<br>";
    //不用echo输出布尔值
    var_dump(true); //bool(true)
    echo "<br>";
    var_dump(false); // bool(false)
    echo "<br>";
    var_dump(array(10));  //array(1) { [0]=> int(10) }
    echo "<br>";

```

## 超全局变量

| 变量名     | 描述                                 |
| ---------- | ------------------------------------ |
| $\_GET     | 接受表单通过 get 提交过来的数据      |
| $\_POST    | 接受表单通过 post 提交过来的数据     |
| $\_REQUEST | 接受表单通过 get/post 提交过来的数据 |

## 变量

1、命名变量需要通过符号（$）,它是变量的组成部分，用来做变量的开头  
2、变量名需要以字母下划线开头，由数字、字母、下划线组成

```php
   $aa = 'aa';
   $aa_bb = 'aabb';
   $_name = '123';

   echo $aa;    //aa
   echo $aa_bb; //aabb
   echo $_name; //123
```

3、传值和传址  
传值相对于在内存在复制一份变量

```php
   $a = 10;
   $b = $a;
   echo $b;  //10
   $a = 20;
   echo $b;  //10
```

传址相当于共用内存的变量

```php
   $x = 10;
   $y=&$x;
   echo $y; //10
   $x = 20;
   echo $y; //20
```

## 可变变量

```php
   $a = 10;
   $b = 'a';
   echo $b; //a
   echo $$b; //10
```

## 常量

1、定义常量一般用大写  
2、定义常量有 2 种方式 `define()`、`const`  
define("常量名"，"常量值",布尔值) 第三个布尔值是用于常量名是否区分大小写，默认 false，严格区分

```php
   define("WEBER",123456);
   echo WEBER; //123456

   const WEB = "LALA";
   echo WEB; //LALA
```

3、`constant()`用于解析特殊的常量名

```php
   define("^_^",123);
   //echo ^_^;  //报错
   echo constant("^_^"); //123
```

4、`defined()`判断当前常量是否存在

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

## 数据类型

- 标量类型
  | 标量数据类型 | 描述 |
  | ---------- | ------------------------------------ |
  | 整型（int） | 10/20 |
  | 浮点型（float） | 11.2/30.5 |
  | 字符串（string） | 双引号""/单引号'' |
  | 布尔类型（boolean） | true/false |
- 复合类型  
  数组
  ```php
    array(10,20,30)
  ```
  对象
  ```php
    class Person{
        public $name = "weber";
        public function func(){
            echo "weber"
        }
    }
  ```

## 浮点数

::: tip
凡是有小数点的浮点型内容，转换为二进制都是无限循环的，小数点后面能够支持 14 位小数
:::

```php
    var_dump(0.1 == (1-0.9)); //bool(false)
```

用 bccomp(数值 1，数值 2，位数)进行小数类型的比较,当数值 1 比 2 大返回 1，数值 1 比数值 2 小返回-1，相等返回 0

```php
    var_dump(bccomp(3.2415,3.142,3)); //1
```

## 字符串

::: tip
单引号和双引号都可以表示字符串，单引号不能解析变量，双引号可以解析变量
:::

```php
   echo "今天天气不错"; //今天天气不错
   echo '今天天气不错'; //今天天气不错

   $name = 'weber';

   echo "你好，$name"; //你好，weber
   echo '你好，$name'; //你好，$name

   echo "{$name},你好"; //weber,你好
   echo "{ $name },你好"; //{ weber },你好
   echo "${name},你好"; //weber,你好
```

- 转义字符串`\`实现将特殊符号转成普通符号

```php
   echo "大家说：\"学习PHP\""; //大家说："学习PHP"
   echo "D:\\"; //D:\
```

## 字符串定界符

- 定界符以`<<<`开头
- 定界符的名字含有字母下划线数字，但是不能以数字开头
- 结束定界符，前后不能含有空格或者其他字符

```php
   $name = "weber";
   echo <<<admin
      <ul>
         <li>张三</li>
         <li>李四</li>
         <li>王五</li>
         <li>$name</li>
      </ul>
   admin;
```

## 数组

- 声明数组分别有二种方式

```php
   $arr = array("张三",false,123);
   var_dump($arr); //array(3) { [0]=> string(6) "张三" [1]=> bool(false) [2]=> int(123) }

   $arr2 = ["张三",false,123];
   var_dump($arr2); //array(3) { [0]=> string(6) "张三" [1]=> bool(false) [2]=> int(123) }
```

- 数组中的查找、增加、替换

```php
   $arr = ["张三",false,123];
   //查找
    var_dump($arr[0]); //string(6) "张三"
   //增加
   $arr[] = "lala";
    var_dump($arr); //array(4) { [0]=> string(6) "张三" [1]=> bool(false) [2]=> int(123) [3]=> string(4) "lala" }
   //替换
   $arr[0] = "李四";
   var_dump($arr); //array(4) { [0]=> string(6) "李四" [1]=> bool(false) [2]=> int(123) [3]=> string(4) "lala" }

```

- 数组下标

```php
   $arr = [12.5 => 12.5]; //array(1) { [12]=> float(12.5) } 坐标取整数
   $arr = [-12.5 => 12.5]; //array(1) { [-12]=> float(12.5) }
   $arr = [true => 12.5]; //array(1) { [1]=> float(12.5) }
   $arr = [false => 12.5]; //array(1) { [0]=> float(12.5) }
   $arr = ['' => 12,5]; //array(2) { [""]=> int(12) [0]=> int(5) }
   $arr = [null => 12.5, '' => 12.3]; //array(1) { [""]=> float(12.3) } 坐标相同后面覆盖前面

   //找出最大的索引下标的值加1作为后面一个值的索引下标
   $arr = ["张三", "age" => 22, "男"]; //array(3) { [0]=> string(6) "张三" ["age"]=> int(22) [1]=> string(3) "男" }
   $arr = [2 => "张三", "男"]; //array(2) { [2]=> string(6) "张三" [3]=> string(3) "男" }
```

## 进制转换

| 进制     | 编写 | 开头 |
| -------- | ---- | ---- |
| 十进制   | dec  |      |
| 八进制   | oct  | 0    |
| 二进制   | bin  | 0b   |
| 十六进制 | hex  | 0x   |

```php
    //将十进制转为二进制
    echo decbin(11); //1011
    //将二进制转为十进制
    echo bindec(1011); //11
    //将十进制转为八进制
    echo decoct(10); //12
    //将十进制转为十六进制
    echo dechex(255);  //ff

    //二进制以Ob开头
    echo 0b1000; //8
    //八进制以0开头
    echo 010; //8
    //十六进制以0x开头
    echo 0xff; //255
```

## ASCII 方法

```php
   //将十进制转为字符
   echo chr(99); //c
   //将字符转为数字
   echo ord("c"); //99
```
