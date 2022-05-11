## 算术运算符

算术运算符包括 + - \* /（加 减 乘 除） %（取余或者求模） ++（自增运算符） --（自减运算符）

```php
$int = 10;
$float = 2.22;
$int2 = 3;

var_dump($int + $float); //float(12.22)
var_dump($int - $float); //float(7.78)
var_dump($int * $float); //float(22.2)
var_dump($int / $float); //float(4.5045045045045)
var_dump($int % $int2); //int(1)
```

```php
$int = 5;
echo $int++; //5
echo $int; //6

$float = 2.2;
echo ++$float; //3.2
echo $float; //3.2
```

::: warning 自增/自减运算符注意事项

- 自增或者自减就是在原值的基础上进行+1 或者-1 的操作
- 在进行自增或自减运算时，运算符号可以在变量前，也可以在变量后，但是意义不同
- 如果自增自减运算符号在变量前，表示先将当前进行+1 操作，然后在使用该变量，如果在变量后面，表示先使用该变量在进行自增或者自减运算
- 自增自减运算对布尔值无效，一般也不用于数组、对象、资源等类型，只用于整型和浮点型
- null 可以进行自增运算，不能进行自减运算
  :::

## 字符串运算符

字符串运算符就是用来连接字符串的符号，在 php 语言中就是英文状态下的点`.`

```php
$str = 'hello'
echo $str . 'wrold'
```

## 赋值运算符

1. `=` 普通赋值运算符

```php
$int = 5;
echo $int; //5
```

2. `+=` 加法赋值运算符

```php
$int = 5;
$int += 10;
// 拆解: $int = $int + 10
echo $int; //15
```

3. `-=` 减法赋值运算符

```php
$int = 10;
$int -= 5;
// 拆解: $int = $int - 5
echo $int; //5
```

4. `*=` 乘法赋值运算符

```php
$int = 10;
$int *= 5;
// 拆解: $int = $int * 5
echo $int; //50
```

5. `/=` 除法赋值运算符

```php
$int = 10;
$int /= 5;
// 拆解: $int = $int / 5
echo $int; //2
```

6. `%=` 取模赋值运算符

```php
$int = 10;
$int %= 5;
// 拆解: $int = $int % 5
echo $int; //0
```

7. `.=` 连接赋值运算符

```php
$int = 10;
$int .= 5;
// 拆解: $int = $int . 5
echo $int; //105
```

## 比较运算符

1. `>` 大于
2. `<` 小于
3. `>=` 大于等于
4. `<=` 小于等于
5. `==` 等于（只判断值，不判断类型）
6. `!=` 不等于（值不相等就是`true`）
7. `===` 全等于（判断值和类型都是相等才为`true`）
8. `!==` 非全等（除了全等于都是非全等）
9. `<==>` 比较两个表达式（表达式 1 小于表达 2 返回`-1`，如果等于返回`0`，大于返回`1`）

## 逻辑运算符

1. 逻辑与 `&` (需要满足 2 个条件都为`true`,结果才为`true`)

```php
var_dump(true & true); //true
var_dump(true & false); //false
var_dump(false & true); //false
var_dump(false & false); //false
```

2. 逻辑或 `|` (需要满足 1 个条件为`true`，结果就为 `true`)

```php
var_dump(true | true); //true
var_dump(true | false); //true
var_dump(false | true); //true
var_dump(false | false); //false
```

3. 逻辑非 `!` (相当取反)

```php
var_dump(!false); //true
var_dump(!true); //false
```

4. 逻辑异或 `xor` (当 2 个条件不一致时返回`true`，否则返回`false`)

```php
var_dump(true xor true); //false
var_dump(true xor false); //true
var_dump(false xor true); //true
var_dump(false xor false); //false
```

<!-- ## 位运算符 -->

## 其它运算符

1. @错误抑制符
   用于屏蔽单行错误，对于多行无效。尽量少用@符号进行错误屏蔽（效率低）
2. 三元运算符  
   格式：变量 = 条件 ？ 真 ： 假 (当条件成立取真值，否则取假值)

```php
$bool = true;
$val = $bool ? '条件成立' : '条件不成立';
echo $val; '条件成立'
```

3. null 运算符

```php
$bool = '条件成立';
$val = $bool ?? '条件不成立';
//相当于 $val = $bool ? '条件成立' : '条件不成立';
echo $val;
```
