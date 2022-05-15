## if

1. 第一种写法（只执行 `if` 后面的第一行语句）

```php
$val = false;
if ($val)
    echo '我来了';  //不输出
echo '我又来了';  //正常输出
```

2. 第二种写法（可以执行代码块的多条语句）

```php
<?php
$val = false;
if ($val) {
    // $val为true则执行以下代码块
    echo '我来了';
    echo '来到小明家';
} else {
    // $val为false则执行以下代码块
    echo '我不来了';
    echo '我自己去玩了';
}
```

3. 第三种写法 （多层判断）

```php
$val = 100;
if ($val == 100) {
    echo '优秀';
} else if ($val >= 80 && $val < 100) {
    echo '良好';
} else if ($val >= 60 && $val < 80) {
    echo '及格';
} else {
    echo '不及格';
}

```

## switch

`switch` 语句类似于具有同一个表达式的一系列 `if` 语句。很多场合下需要把同一个变量（或表达式）与很多不同的值比较，并根据它等于哪个值来执行不同的代码。

```php
$variable = 6;
switch ($variable) {
    case 1:
        echo '周一';
        break;
    case 2:
        echo '周二';
        break;
    case 2:
        echo '周三';
        break;
    case 2:
        echo '周四';
        break;
    case 2:
        echo '周五';
        break;

    default:
        echo '周末';
        break;
}
```

## while 循环

书写循环结构时一般都需要自增或者自减条件

```php
$i = 0;
while ($i <= 10) {
    echo $i; //012345678910
    $i++;
}
```

## do...while 循环

```php
$i = 1;
do {
    echo $i; //12345678910
    $i++;
} while ($i <= 10);
```

::: tip while 与 do...while 循环的区别

1. `while`型循环的每一次循环体的执行要依据 while 条件表达式的结果进行约束
2. `do...while`除了第一次之外，剩下每次的循环体的执行都要受`while`条件表达式结果的约束
   :::

## for 循环

```php
for ($i=1; $i<10; $i++){
    echo $i; //123456789
}
```

::: tip for 循环 与 while 循环的区别

1. 类型问题

   - 计数型循环只有`for`循环
   - 布尔值循环：`while`循环，`for`循环以及`foreach`循环

2. 效率问题
   - `for`循环要高于`while`循环，`for`循环属于计数型循环，而`while`循环属于布尔型循环

:::

## foreach 循环

数组专属循环

```php
$arr = [1,2,3,4,5];

foreach ($arr as $value){
    echo $value; //12345
}

foreach ($arr as $key => $value) {
    echo $key.'-'.$value.'<br/>'; //0-1 1-1 ... 4-5
}
```

## break

1. 作用
   - 可以在`switch`中使用`break`来终止分支结构的执行
   - 可以在任何循环体结构中用`break`来终止循环操作

```php
for ($i=1; $i<10; $i++){
    if($i == 5){
        break; //当值等于5时，则退出循环
    }
    echo $i; //1234
}
```

::: tip brea 后面可以跟随数字

`break`后面可以跟数值参数，`break 1`表示的意思跟`break`一样。如果在循环中设置`break 2`表示用来终止第二层循环
:::

## continue

1. 作用
   - 在循环结构中用来终止本次循环，开始下一次循环

```php
for ($i=1; $i<10; $i++){
    if($i == 5){
        continue;
    }
    echo $i; //12346789
}
```

::: tip continue 后面可以跟随数字

`continue`后面可以跟数值参数，`continue 1`表示的意思跟`continue`一样。如果在循环中设置`continue 2`表示跳转到外层继续循环
:::
