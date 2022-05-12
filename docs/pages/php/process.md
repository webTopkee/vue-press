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
